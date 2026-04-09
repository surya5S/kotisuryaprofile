import { render, screen } from '@testing-library/react';
import Contact from './contact';

// ─── Test 1: Renders the contact section ─────────────────────────────────────
test('renders the contact section', () => {
  render(<Contact />);

  const section = document.querySelector('section#contact');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: All 6 service titles are displayed ───────────────────────────────
test('renders all service titles', () => {
  render(<Contact />);

  expect(screen.getByText('Full Stack Development')).toBeInTheDocument();
  expect(screen.getByText('Cloud Architecture')).toBeInTheDocument();
  expect(screen.getByText('API Design & Integration')).toBeInTheDocument();
  expect(screen.getByText('Data Engineering')).toBeInTheDocument();
  expect(screen.getByText('AI / LLM Integration')).toBeInTheDocument();
  expect(screen.getByText('DevOps & CI/CD')).toBeInTheDocument();
});

// ─── Test 3: Email Me link has correct mailto href ────────────────────────────
test('Email Me link points to correct mailto address', () => {
  render(<Contact />);

  const emailLink = screen.getByRole('link', { name: /email me/i });
  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:suryaprakash1658@gmail.com');
});

// ─── Test 4: All 3 social links render with correct hrefs ────────────────────
test('renders all social links with correct hrefs', () => {
  render(<Contact />);

  const github = screen.getByRole('link', { name: 'GitHub' });
  expect(github).toHaveAttribute('href', 'https://github.com/surya5S?tab=repositories');
  expect(github).toHaveAttribute('target', '_blank');

  const linkedin = screen.getByRole('link', { name: 'LinkedIn' });
  expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/suryaprakash123/');
  expect(linkedin).toHaveAttribute('target', '_blank');

  const instagram = screen.getByRole('link', { name: 'Instagram' });
  expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/surya.k.prakash/');
  expect(instagram).toHaveAttribute('target', '_blank');
});
