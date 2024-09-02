import React from 'react';
import './SlideCard.scss';

interface SlideCardProps {
  slide: {
    url: string;
    title: string;
    description: string;
  };
  width: number;
  height: number;
  marginTop: number;
}

const SlideCard: React.FC<SlideCardProps> = ({ slide, width, height, marginTop }) => {
  return (
    <div className="slide" style={{ width, height, marginTop }}>
      <div className="card">
        <div className="card-front">
          <img src={slide.url} alt={slide.title} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-back">
          <div className="info">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;