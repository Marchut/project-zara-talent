import React from 'react';
import { render } from '@testing-library/react';
import NavMenu from './NavMenu';

test('renders NavMenu component', () => {
  const { getByText } = render(<NavMenu />);
  const linkElement = getByText(/NavMenu Component/i);
  expect(linkElement).toBeInTheDocument();
});
