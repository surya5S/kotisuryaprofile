import { render, screen, act } from '@testing-library/react';
import Hero from './Hero';

// Mock child components to keep Hero tests focused and isolated
vi.mock('./ThemeToggle', () => ({ default: () => <button>ThemeToggle</button> }));
vi.mock('./TicTacToe', () => ({ default: () => <div>TicTacToe</div> }));

// ─── Test 1: Renders the hero section ────────────────────────────────────────
test('renders the hero section', () => {
  render(<Hero />);

  const section = document.querySelector('section#hero');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: All nav link buttons are rendered ────────────────────────────────
test('renders all navigation link buttons', () => {
  render(<Hero />);

  const navLabels = [
    'Home', 'Experience', 'Projects', 'Tools & IDEs',
    'Certifications', 'Education', 'Interests', 'Contact',
  ];

  navLabels.forEach((label) => {
    expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
  });
});

// ─── Test 3: Name words appear in the DOM ─────────────────────────────────────
test('renders all name words after timers fire', async () => {
  vi.useFakeTimers();

  render(<Hero />);

  // Fast-forward all setTimeout calls so all name words become visible
  await act(async () => {
    vi.runAllTimers();
  });

  expect(screen.getByText('Koti')).toBeInTheDocument();
  expect(screen.getByText('Surya')).toBeInTheDocument();
  expect(screen.getByText('Prakash')).toBeInTheDocument();
  expect(screen.getByText('Kanneti')).toBeInTheDocument();

  vi.useRealTimers();
});

// ─── Test 4: All skill badges are rendered ────────────────────────────────────
test('renders skill badges', () => {
  render(<Hero />);

  // Check a representative sample of skill labels
  expect(screen.getByText('React.js')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('Docker / K8s')).toBeInTheDocument();
  expect(screen.getByText('Azure')).toBeInTheDocument();
});

// ─── Test 5: View Resume link has correct href ────────────────────────────────
test('View Resume link points to the correct Google Drive URL', () => {
  render(<Hero />);

  const resumeLink = screen.getByRole('link', { name: /view resume/i });
  expect(resumeLink).toBeInTheDocument();
  expect(resumeLink).toHaveAttribute(
    'href',
    'https://drive.google.com/file/d/1h6Cotp9PiAj4NUZSmCUBjkU_l9YoNPN2/view?usp=sharing'
  );
  expect(resumeLink).toHaveAttribute('target', '_blank');
});

// ─── Test 6: About section highlights are rendered ────────────────────────────
test('renders about section highlights after timers fire', async () => {
  vi.useFakeTimers();

  render(<Hero />);

  await act(async () => {
    vi.runAllTimers();
  });

  // getAllByText used because some labels appear in both the badge strip and about section
  expect(screen.getAllByText(/Cloud-Native Architecture/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/AI \/ LLM Integration/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/DevOps & Reliability/i).length).toBeGreaterThan(0);

  vi.useRealTimers();
});
