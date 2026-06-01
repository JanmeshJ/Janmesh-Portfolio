import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders hero with name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Janmesh Joshi/i })).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: /main navigation/i });
  expect(nav).toBeInTheDocument();
  expect(within(nav).getByRole('link', { name: /^Work$/ })).toBeInTheDocument();
  expect(within(nav).getByRole('link', { name: /^About$/ })).toBeInTheDocument();
});
