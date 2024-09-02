import React from 'react';
import { render } from '@testing-library/react';
import ArteixoLife from './ArteixoLife';

test('renders ArteixoLife component', () => {
  const { getByText } = render(<ArteixoLife />);
  const linkElement = getByText(/ArteixoLife Component/i);
  expect(linkElement).toBeInTheDocument();
});
