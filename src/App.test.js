import { render, screen } from '@testing-library/react';
import AppJSX from './basic/AppJSX';

test('renders learn react link', () => {
  render(<AppJSX />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
