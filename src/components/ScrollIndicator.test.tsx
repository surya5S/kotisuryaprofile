import { render, fireEvent, act } from '@testing-library/react';
import ScrollIndicator from './ScrollIndicator';

// Helper: mock scroll-related DOM properties as getters (they are read-only in jsdom)
function mockScrollProps(scrollY: number, scrollHeight: number, clientHeight: number) {
  Object.defineProperty(window, 'scrollY', {
    get: () => scrollY,
    configurable: true,
  });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    get: () => scrollHeight,
    configurable: true,
  });
  Object.defineProperty(document.documentElement, 'clientHeight', {
    get: () => clientHeight,
    configurable: true,
  });
}

// ─── Test 1: Renders without crashing ────────────────────────────────────────
test('renders the scroll indicator bar', () => {
  const { container } = render(<ScrollIndicator />);

  // Outer wrapper div should exist
  const outerBar = container.firstChild as HTMLElement;
  expect(outerBar).toBeInTheDocument();
});

// ─── Test 2: Initial width is 0% ─────────────────────────────────────────────
test('bar width starts at 0% when page is not scrolled', () => {
  // scrollY=0, total scrollable = 1000-500 = 500 → 0/500 * 100 = 0%
  mockScrollProps(0, 1000, 500);

  const { container } = render(<ScrollIndicator />);
  const innerBar = container.querySelector('div > div') as HTMLElement;

  // jsdom normalizes 0% to '' (treats zero-length as empty), both mean "not scrolled"
  const width = innerBar.style.width;
  expect(width === '0%' || width === '').toBe(true);
});

// ─── Test 3: Bar width updates on scroll ─────────────────────────────────────
test('bar width updates to 50% when scrolled halfway', async () => {
  // total = 1000-500 = 500, scrollY=250 → 250/500*100 = 50%
  mockScrollProps(0, 1000, 500);
  const { container } = render(<ScrollIndicator />);

  await act(async () => {
    mockScrollProps(250, 1000, 500);
    fireEvent.scroll(window);
  });

  // React sets style via CSSOM; check innerHTML which reflects the actual rendered style
  expect(container.innerHTML).toContain('width: 50%');
});

// ─── Test 4: Bar reaches 100% at bottom ──────────────────────────────────────
test('bar width is 100% when scrolled to the bottom', async () => {
  // scrollY = 500 = scrollHeight(1000) - clientHeight(500) → 100%
  mockScrollProps(0, 1000, 500);
  const { container } = render(<ScrollIndicator />);

  await act(async () => {
    mockScrollProps(500, 1000, 500);
    fireEvent.scroll(window);
  });

  expect(container.innerHTML).toContain('width: 100%');
});

// ─── Test 5: Event listener removed on unmount ───────────────────────────────
test('removes scroll event listener when component unmounts', () => {
  const removeSpy = vi.spyOn(window, 'removeEventListener');

  const { unmount } = render(<ScrollIndicator />);
  unmount();

  expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  removeSpy.mockRestore();
});
