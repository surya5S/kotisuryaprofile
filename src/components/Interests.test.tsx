import { render, screen } from '@testing-library/react';
import Interests from './Interests';

// framer-motion animations don't work in jsdom — render as plain div
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

// ─── Test 1: Renders the interests section ────────────────────────────────────
test('renders the interests section', () => {
  render(<Interests />);

  const section = document.querySelector('section#interests');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: All 4 interest titles are displayed ──────────────────────────────
test('renders all interest titles', () => {
  render(<Interests />);

  expect(screen.getByText('Competitive Problem Solving')).toBeInTheDocument();
  expect(screen.getByText('Food & Cooking')).toBeInTheDocument();
  expect(screen.getByText('Travel')).toBeInTheDocument();
  expect(screen.getByText('Marathon Running')).toBeInTheDocument();
});

// ─── Test 3: All 4 tags are displayed ────────────────────────────────────────
test('renders all interest tags', () => {
  render(<Interests />);

  expect(screen.getByText('LeetCode · HackerRank')).toBeInTheDocument();
  expect(screen.getByText('Food Lover · Home Chef')).toBeInTheDocument();
  expect(screen.getByText('Explorer · Adventurer')).toBeInTheDocument();
  expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
});
