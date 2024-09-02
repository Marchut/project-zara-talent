import React from 'react';
import { render } from '@testing-library/react';
import WeAre from './WeAre';

test('renders WeAre component', () => {
  const { getByText } = render(<WeAre />);
  const linkElement = getByText(/WeAre Component/i);
  expect(linkElement).toBeInTheDocument();
});
