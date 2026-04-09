import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

// Reset the <html> dark class after every test so tests don't affect each other
afterEach(() => {
  document.documentElement.classList.remove('dark');
});

// ─── Test 1: Renders the button ───────────────────────────────────────────────
test('renders the toggle button', () => {
  const { getByRole } = render(<ThemeToggle />);

  const button = getByRole('button', { name: /toggle dark mode/i });
  expect(button).toBeInTheDocument();
});

// ─── Test 2: Shows sun icon by default (light mode) ──────────────────────────
test('shows sun icon by default in light mode', () => {
  const { getByRole } = render(<ThemeToggle />);

  const button = getByRole('button', { name: /toggle dark mode/i });
  expect(button.textContent).toContain('☀️');
});

// ─── Test 3: Clicking adds dark class and shows moon icon ────────────────────
test('adds dark class to <html> and shows moon icon when clicked', () => {
  const { getByRole } = render(<ThemeToggle />);

  const button = getByRole('button', { name: /toggle dark mode/i });
  fireEvent.click(button);

  // dark class should now be on the root <html> element
  expect(document.documentElement.classList.contains('dark')).toBe(true);

  // icon should switch to moon
  expect(button.textContent).toContain('🌙');
});

// ─── Test 4: Clicking again removes dark class and shows sun icon ─────────────
test('removes dark class and shows sun icon when clicked again', () => {
  const { getByRole } = render(<ThemeToggle />);

  const button = getByRole('button', { name: /toggle dark mode/i });

  fireEvent.click(button); // light → dark
  fireEvent.click(button); // dark → light

  expect(document.documentElement.classList.contains('dark')).toBe(false);
  expect(button.textContent).toContain('☀️');
});
