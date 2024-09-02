import React, { useEffect, useState, useCallback, useRef } from 'react';
import './Carousel.scss';
import { CarouselProps } from './types';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Carousel: React.FC<CarouselProps> = ({ slides, layout }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
    setIsPaused(true);
  };

  useInterval(() => {
    if (!isPaused) {
      nextSlide();
    } else {
      setIsPaused(false);
    }
  }, 3500);

  return (
    <div className={`carousel ${layout}`}>
      <div className={`text ${direction}`}>
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? 'active' : ''}>
            {
              slide.title ? <h1>{slide.title}</h1> : ""
            }
            <p>{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            role="button"
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;