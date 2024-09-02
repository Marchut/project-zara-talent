import React from 'react';
import { render } from '@testing-library/react';
import OurPeople from './OurPeople';

test('renders OurPeople component', () => {
  const { getByText } = render(<OurPeople />);
  const linkElement = getByText(/OurPeople Component/i);
  expect(linkElement).toBeInTheDocument();
});
