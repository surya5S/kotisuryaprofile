import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// ─── Test 1: Renders the footer element ──────────────────────────────────────
test('renders the footer element', () => {
  render(<Footer />);

  const footer = document.querySelector('footer');
  expect(footer).toBeInTheDocument();
});

// ─── Test 2: Shows the correct current year ───────────────────────────────────
test('displays the current year', () => {
  render(<Footer />);

  const currentYear = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
});

// ─── Test 3: Shows the full copyright text ────────────────────────────────────
test('displays the full copyright text with name', () => {
  render(<Footer />);

  expect(
    screen.getByText(/Koti Surya Prakash Kanneti\. All rights reserved\./i)
  ).toBeInTheDocument();
});
