import { render, screen, fireEvent } from '@testing-library/react';
import Certifications from './Certifications';

// framer-motion uses animations that don't work in jsdom — mock it to render children directly
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

// ─── Test 1: Renders the certifications section ───────────────────────────────
test('renders the certifications section', () => {
  render(<Certifications />);

  const section = document.querySelector('section#certifications');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: All 4 cert titles are displayed ──────────────────────────────────
test('renders all certification titles', () => {
  render(<Certifications />);

  expect(screen.getByText('Azure Developer Associate')).toBeInTheDocument();
  expect(screen.getByText('AWS Certified Developer – Associate')).toBeInTheDocument();
  expect(screen.getByText('Microsoft Certified: Data Fundamentals')).toBeInTheDocument();
  expect(screen.getByText('Microsoft Certified: Azure Fundamentals')).toBeInTheDocument();
});

// ─── Test 3: All cert codes are displayed ─────────────────────────────────────
test('renders all certification codes', () => {
  render(<Certifications />);

  expect(screen.getByText('AZ-204')).toBeInTheDocument();
  expect(screen.getByText('DVA-C02')).toBeInTheDocument();
  expect(screen.getByText('DP-900')).toBeInTheDocument();
  expect(screen.getByText('AZ-900')).toBeInTheDocument();
});

// ─── Test 4: Clicking View opens modal with correct title ─────────────────────
test('opens modal with correct title when View is clicked', () => {
  render(<Certifications />);

  // Modal should not exist yet
  expect(screen.queryByRole('img', { name: /resume/i })).not.toBeInTheDocument();

  // Click the first View button (Azure Developer Associate)
  const viewButtons = screen.getAllByRole('button', { name: /view/i });
  fireEvent.click(viewButtons[0]);

  // Modal title should match the first cert
  expect(screen.getByText('Azure Developer Associate', { selector: 'span' })).toBeInTheDocument();

  // iframe should be present with correct src
  const iframe = document.querySelector('iframe');
  expect(iframe).toBeInTheDocument();
  expect(iframe).toHaveAttribute('src', '/certs/az-204.pdf');
});

// ─── Test 5: Clicking Cancel closes the modal ─────────────────────────────────
test('closes the modal when Cancel button is clicked', () => {
  render(<Certifications />);

  const viewButtons = screen.getAllByRole('button', { name: /view/i });
  fireEvent.click(viewButtons[0]);

  // Modal is open — iframe visible
  expect(document.querySelector('iframe')).toBeInTheDocument();

  // Click ✕ Cancel
  fireEvent.click(screen.getByRole('button', { name: /cancel/i }));

  // Modal should be gone
  expect(document.querySelector('iframe')).not.toBeInTheDocument();
});

// ─── Test 6: Clicking the backdrop closes the modal ──────────────────────────
test('closes the modal when backdrop is clicked', () => {
  render(<Certifications />);

  const viewButtons = screen.getAllByRole('button', { name: /view/i });
  fireEvent.click(viewButtons[0]);

  // Modal is open
  expect(document.querySelector('iframe')).toBeInTheDocument();

  // The backdrop is the fixed overlay div (parent of the modal content div)
  const backdrop = document.querySelector('.fixed.inset-0') as HTMLElement;
  fireEvent.click(backdrop);

  // Modal should be gone
  expect(document.querySelector('iframe')).not.toBeInTheDocument();
});
