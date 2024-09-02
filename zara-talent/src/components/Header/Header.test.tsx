import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Header Component/i);
  expect(linkElement).toBeInTheDocument();
});
