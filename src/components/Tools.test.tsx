import { render, screen } from '@testing-library/react';
import Tools from './Tools';

// framer-motion animations don't work in jsdom — render as plain div
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

// ─── Test 1: Renders the tools section ───────────────────────────────────────
test('renders the tools section', () => {
  render(<Tools />);

  const section = document.querySelector('section#tools');
  expect(section).toBeInTheDocument();
});

// ─── Test 2: All 7 category labels are displayed ──────────────────────────────
test('renders all category labels', () => {
  render(<Tools />);

  expect(screen.getByText('IDEs & Editors')).toBeInTheDocument();
  expect(screen.getByText('Version Control & DevOps')).toBeInTheDocument();
  expect(screen.getByText('Cloud & Infrastructure')).toBeInTheDocument();
  expect(screen.getByText('API & Testing')).toBeInTheDocument();
  expect(screen.getByText('Databases & Monitoring')).toBeInTheDocument();
  expect(screen.getByText('AI Tools')).toBeInTheDocument();
  expect(screen.getByText('Collaboration & Project Management')).toBeInTheDocument();
});

// ─── Test 3: Tool names from each category are displayed ─────────────────────
test('renders tool names from each category', () => {
  render(<Tools />);

  // IDEs & Editors
  expect(screen.getByText('VS Code')).toBeInTheDocument();

  // Version Control & DevOps
  expect(screen.getByText('GitHub Actions')).toBeInTheDocument();

  // Cloud & Infrastructure
  expect(screen.getByText('Microsoft Azure')).toBeInTheDocument();

  // API & Testing
  expect(screen.getByText('Swagger / OpenAPI')).toBeInTheDocument();

  // Databases & Monitoring
  expect(screen.getByText('MongoDB Compass')).toBeInTheDocument();

  // AI Tools
  expect(screen.getByText('Claude (Anthropic)')).toBeInTheDocument();

  // Collaboration & Project Management
  expect(screen.getByText('Confluence')).toBeInTheDocument();
});
