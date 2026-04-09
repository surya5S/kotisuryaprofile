import { render, screen } from '@testing-library/react';
import Experience from './Experience';

// framer-motion animations don't work in jsdom — render as plain div
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

// ─── Test 1: Renders the experience section ───────────────────────────────────
test('renders the experience section', () => {
  render(<Experience />);

  const section = document.querySelector('section#experience');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: All 4 company names are displayed ────────────────────────────────
test('renders all company names', () => {
  render(<Experience />);

  // Innova Solutions appears twice (two different roles), getAllByText handles that
  expect(screen.getAllByText('Innova Solutions').length).toBe(2);
  expect(screen.getByText('BNS International Inc')).toBeInTheDocument();
  expect(screen.getByText('Northern Arizona University')).toBeInTheDocument();
});

// ─── Test 3: All 4 roles are displayed ───────────────────────────────────────
test('renders all job roles', () => {
  render(<Experience />);

  expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  expect(screen.getByText('.NET Full Stack Developer')).toBeInTheDocument();
  expect(screen.getByText('Graduate Teaching Assistant & Application Developer')).toBeInTheDocument();
  expect(screen.getByText('Associate Software Engineer')).toBeInTheDocument();
});

// ─── Test 4: "Current" badge only shows for the current entry ─────────────────
test('shows Current badge only for the active job', () => {
  render(<Experience />);

  // Only one "Current" badge should exist
  const currentBadges = screen.getAllByText('Current');
  expect(currentBadges).toHaveLength(1);
});

// ─── Test 5: Tech stack badges render for entries that have a stack ───────────
test('renders tech stack badges for entries that have a stack', () => {
  render(<Experience />);

  // From Innova Solutions (Full Stack) entry
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('GraphQL')).toBeInTheDocument();
  expect(screen.getByText('Kubernetes')).toBeInTheDocument();

  // From BNS entry
  expect(screen.getAllByText('.NET').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Azure').length).toBeGreaterThan(0);
});
