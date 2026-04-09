import { render, screen } from '@testing-library/react';
import Education from './Education';

// framer-motion animations don't work in jsdom — render as plain div
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

// ─── Test 1: Renders the education section ────────────────────────────────────
test('renders the education section', () => {
  render(<Education />);

  const section = document.querySelector('section#education');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: Both school names are displayed ──────────────────────────────────
test('renders both school names', () => {
  render(<Education />);

  expect(screen.getByText('Northern Arizona University')).toBeInTheDocument();
  expect(screen.getByText("Vignan's Lara Institute of Technology and Science")).toBeInTheDocument();
});

// ─── Test 3: Both degree names are displayed ──────────────────────────────────
test('renders both degree names', () => {
  render(<Education />);

  expect(screen.getByText('Master of Science in Computer Science')).toBeInTheDocument();
  expect(screen.getByText('Bachelor of Science in Computer Science & Engineering')).toBeInTheDocument();
});

// ─── Test 4: GPA and location details are shown ───────────────────────────────
test('renders GPA and location for both entries', () => {
  render(<Education />);

  expect(screen.getByText('GPA 3.83')).toBeInTheDocument();
  expect(screen.getByText('GPA 7.8')).toBeInTheDocument();
  expect(screen.getByText(/Flagstaff, AZ, USA/i)).toBeInTheDocument();
  expect(screen.getByText(/Kakinada, AP, India/i)).toBeInTheDocument();
});
