import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

test('renders Landing component', () => {
  const { getByText } = render(<Landing />);
  const linkElement = getByText(/Landing Component/i);
  expect(linkElement).toBeInTheDocument();
});
