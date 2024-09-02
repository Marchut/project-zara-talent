import React, { useState, useRef, useEffect, useCallback } from 'react';
import './InfiniteScroller.scss';

interface InfiniteScrollerProps {
  images: string[];
  orientation: 'horizontal' | 'vertical';
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({ images, orientation }) => {
  const [visibleImages, setVisibleImages] = useState<string[]>(images.slice(0, 10));
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      if (
        (orientation === 'vertical' && scrollTop + clientHeight >= scrollHeight - 100) ||
        (orientation === 'horizontal' && scrollLeft + clientWidth >= scrollWidth - 100)
      ) {
        loadMoreImages();
      }
    }
  }, [orientation]);

  const loadMoreImages = () => {
    setVisibleImages((prevImages) => [
      ...prevImages,
      ...images.slice(prevImages.length, prevImages.length + 10),
    ]);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div ref={containerRef} className={`infinite-scroller ${orientation}`}>
      <p className='text'>SCR
        OLL</p>
      {visibleImages.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroller;