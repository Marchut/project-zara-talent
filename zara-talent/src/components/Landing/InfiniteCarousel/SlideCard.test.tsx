import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SlideCard from './SlideCard';

const slide = {
  url: 'test-image.jpg',
  title: 'Test Title',
  description: 'Test Description',
};

test('renders SlideCard component', () => {
  render(<SlideCard slide={slide} width={300} height={400} marginTop={20} />);

  // Verify the front side image
  const imgElement = screen.getByAltText(slide.title);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', slide.url);

  // Verify the back side content
  const titleElement = screen.getByText(slide.title);
  const descriptionElement = screen.getByText(slide.description);
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});