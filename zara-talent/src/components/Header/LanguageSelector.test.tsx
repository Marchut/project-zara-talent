import React from 'react';
import { render } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

test('renders LanguageSelector component', () => {
  const { getByText } = render(<LanguageSelector />);
  const linkElement = getByText(/LanguageSelector Component/i);
  expect(linkElement).toBeInTheDocument();
});
