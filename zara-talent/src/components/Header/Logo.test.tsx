import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

test('renders Logo component', () => {
  const { getByText } = render(<Logo />);
  const linkElement = getByText(/Logo Component/i);
  expect(linkElement).toBeInTheDocument();
});
