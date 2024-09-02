import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfiniteScroller from './InfiniteScroller';

const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
  'image11.jpg',
  'image12.jpg',
];

describe('InfiniteScroller Component', () => {
  it('renders initial set of images in horizontal layout', () => {
    render(<InfiniteScroller images={imageUrls} orientation="horizontal" />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(10);
  });

  it('renders initial set of images in vertical layout', () => {
    render(<InfiniteScroller images={imageUrls} orientation="vertical" />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(10);
  });

  it('loads more images on horizontal scroll', () => {
    render(<InfiniteScroller images={imageUrls} orientation="horizontal" />);
    const container = screen.getByRole('generic');
    fireEvent.scroll(container, { target: { scrollLeft: 1000 } });

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(12); // 10 initial + 2 additional
  });

  it('loads more images on vertical scroll', () => {
    render(<InfiniteScroller images={imageUrls} orientation="vertical" />);
    const container = screen.getByRole('generic');
    fireEvent.scroll(container, { target: { scrollTop: 1000 } });

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(12); // 10 initial + 2 additional
  });
});