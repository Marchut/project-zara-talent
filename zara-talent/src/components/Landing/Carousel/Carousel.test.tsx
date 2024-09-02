import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';
import { Slide } from './types';

const slides: Slide[] = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quia vero ducimus saepe praesentium, officiis minima id, tempora assumenda, quas inventore ipsum possimus? Ea, voluptas et. Dolorem natus eum minus!",
  },
  {
    title: "Title 2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae totam consectetur voluptas pariatur? Itaque consequuntur fuga eligendi quis dicta id expedita quam aliquam, aperiam dolor dolorem sed neque ipsa culpa.",
  },
  {
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis est quos dicta sapiente perferendis quae enim, a deserunt quod officiis incidunt reiciendis atque cum nisi nihil iure nobis dolorem!",
  }
];

describe('Carousel Component', () => {
  it('renders correctly in column layout', () => {
    render(<Carousel slides={slides} layout="column" />);
    expect(screen.getByText(slides[0].description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /indicator/i })).toBeInTheDocument();
    expect(screen.getByText(slides[0].description).closest('.carousel')).toHaveClass('column');
  });

  it('renders correctly in row layout', () => {
    render(<Carousel slides={slides} layout="row" />);
    expect(screen.getByText(slides[0].description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /indicator/i })).toBeInTheDocument();
    expect(screen.getByText(slides[0].description).closest('.carousel')).toHaveClass('row');
  });

  it('changes slides automatically every 5 seconds', () => {
    jest.useFakeTimers();
    render(<Carousel slides={slides} layout="column" />);

    // Check initial slide
    expect(screen.getByText(slides[0].description)).toBeInTheDocument();

    // Fast-forward 5 seconds
    jest.advanceTimersByTime(5000);
    expect(screen.getByText(slides[1].description)).toBeInTheDocument();

    // Fast-forward another 5 seconds
    jest.advanceTimersByTime(5000);
    expect(screen.getByText(slides[2].description)).toBeInTheDocument();

    // Fast-forward another 5 seconds
    jest.advanceTimersByTime(5000);
    expect(screen.getByText(slides[0].description)).toBeInTheDocument();
  });

  it('changes slide when indicator is clicked', () => {
    render(<Carousel slides={slides} layout="column" />);

    const indicators = screen.getAllByRole('button');
    fireEvent.click(indicators[1]);

    expect(screen.getByText(slides[1].description)).toBeInTheDocument();
  });

  it('renders the correct number of indicators', () => {
    render(<Carousel slides={slides} layout="column" />);

    const indicators = screen.getAllByRole('button');
    expect(indicators.length).toBe(slides.length);
  });
});