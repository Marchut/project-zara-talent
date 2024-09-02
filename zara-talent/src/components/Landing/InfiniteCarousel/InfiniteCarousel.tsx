import React, { useState, useEffect, useRef, useCallback } from 'react';
import './InfiniteCarousel.scss';
import SlideCard from './SlideCard';
import { InfiniteCarouselProps, Slide } from './types';

const IMAGES_VISIBLE_COUNT = 5;
const IMAGE_HEIGHT = 400;
const MARGIN_VARIATION = 0.3 * IMAGE_HEIGHT; // 30% variation in height
const AUTO_PLAY_INTERVAL = 1500; // 1.5 seconds

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ slides }) => {
  const [visibleSlides, setVisibleSlides] = useState<Slide[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageLevels, setImageLevels] = useState<number[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };

    window.addEventListener('resize', updateContainerWidth);
    updateContainerWidth();

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const initializeImageLevels = useCallback((count: number): number[] => {
    let previousLevel = 1;
    const levels = Array.from({ length: count }, () => {
      const newLevel = calculateNextLevel(previousLevel);
      previousLevel = newLevel;
      return newLevel;
    });
    return levels;
  }, []);

  const calculateNextLevel = (previousLevel: number): number => {
    if (previousLevel === 1) {
      return Math.random() > 0.5 ? 0 : 2;
    }
    return 1;
  };

  const updateSlides = useCallback((forward: boolean) => {
    setVisibleSlides((prevSlides) => {
      const newSlides = forward
        ? [...prevSlides.slice(1), slides[(slides.indexOf(prevSlides[0]) + prevSlides.length) % slides.length]]
        : [slides[(slides.indexOf(prevSlides[0]) - 1 + slides.length) % slides.length], ...prevSlides.slice(0, -1)];
      return newSlides;
    });
    setImageLevels((prevLevels) => {
      const newLevel = forward
        ? calculateNextLevel(prevLevels[prevLevels.length - 1])
        : calculateNextLevel(prevLevels[0]);
      return forward
        ? [...prevLevels.slice(1), newLevel]
        : [newLevel, ...prevLevels.slice(0, -1)];
    });
  }, [slides]);

  const nextSlide = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      updateSlides(true);
      setTransitioning(false);
    }, 500); // Matching the CSS transition duration
  }, [updateSlides]);

  const prevSlide = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      updateSlides(false);
      setTransitioning(false);
    }, 500); // Matching the CSS transition duration
  }, [updateSlides]);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay(); // Ensure no multiple intervals are running
    intervalRef.current = window.setInterval(nextSlide, AUTO_PLAY_INTERVAL);
  }, [nextSlide]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    const visibleCount = IMAGES_VISIBLE_COUNT;
    setVisibleSlides(slides.slice(0, visibleCount));
    setImageLevels(initializeImageLevels(visibleCount));
  }, [containerWidth, slides, initializeImageLevels]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [visibleSlides, startAutoPlay, stopAutoPlay]);

  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  const imageWidth = containerWidth / IMAGES_VISIBLE_COUNT;

  const infiniteCarouselHeight = IMAGE_HEIGHT + MARGIN_VARIATION * 2

  return (
    <div
      className="infinite-carousel"
      style={{height: infiniteCarouselHeight}}
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`carousel-track ${transitioning ? 'transition' : ''}`}>
        {visibleSlides.map((slide, index) => (
          <SlideCard
            key={index}
            slide={slide}
            width={imageWidth}
            height={IMAGE_HEIGHT}
            marginTop={imageLevels[index] * MARGIN_VARIATION}
          />
        ))}
      </div>
      <div className="navigation">
        {/* <button onClick={() => { prevSlide(); stopAutoPlay(); }}>Prev</button>
        <button onClick={() => { nextSlide(); stopAutoPlay(); }}>Next</button> */}
      </div>
    </div>
  );
};

export default InfiniteCarousel;