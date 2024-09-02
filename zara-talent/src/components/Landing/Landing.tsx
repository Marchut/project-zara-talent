import React, { useEffect, useRef, useState } from 'react';
import './Landing.scss';
import Hero from './Hero/Hero';
import WeAre from './WeAre/WeAre';
import OurPeople from './OurPeople/OurPeople';
import ArteixoLife from './ArteixoLife/ArteixoLife';

const Landing: React.FC = () => {
  const arteixoRef = useRef<HTMLElement>(null);
  const [bgColor, setBgColor] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      if (arteixoRef.current) {
        const rect = arteixoRef.current.getBoundingClientRect();
        const topPosition = rect.top;
        const windowHeight = window.innerHeight;
        const minTopPositionToChange = windowHeight * 0.25
        const maxTopPositionToChange = windowHeight * -0.40

        if (topPosition < minTopPositionToChange
          && topPosition > maxTopPositionToChange
        ) {
          setBgColor('white');
        } else {
          setBgColor('black');
        }

        console.log(topPosition, '-', maxTopPositionToChange, '-', minTopPositionToChange);
        console.log(bgColor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`landing ${bgColor === 'white' ? 'bg-white' : ''}`}>
      <Hero />

      <section className='security-margin'>
        <WeAre />
      </section>

      <section className='security-margin'>
        <OurPeople />
      </section>

      <section ref={arteixoRef}>
        <ArteixoLife />
      </section>

      <section className='security-margin'>
        <WeAre />
      </section>
    </div>
  );
};

export default Landing;