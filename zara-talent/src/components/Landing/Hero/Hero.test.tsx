import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

test('renders Hero component', () => {
  const { getByText } = render(<Hero />);
  const linkElement = getByText(/Hero Component/i);
  expect(linkElement).toBeInTheDocument();
});
