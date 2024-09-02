import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="landing-hero">
      <video autoPlay muted loop className="video">
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;