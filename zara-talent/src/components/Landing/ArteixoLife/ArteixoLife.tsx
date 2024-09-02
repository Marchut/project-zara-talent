import React from 'react';
import './ArteixoLife.scss';
import InfiniteCarousel from '../InfiniteCarousel/InfiniteCarousel';

const slides = [
  {
    url: 'working.jpg',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    url: 'working.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    url: 'working.jpg',
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    url: 'working.jpg',
    title: 'Title 4',
    description: 'Description 4',
  },
  {
    url: 'working.jpg',
    title: 'Title 5',
    description: 'Description 5',
  },
  {
    url: 'working.jpg',
    title: 'Title 6',
    description: 'Description 6',
  },

];

const ArteixoLife: React.FC = () => {
  return (
    <div className="arteixolife">
      <div className='title'>
        <h1 className='title-1'>Arteixo</h1>
        <h1 className='title-2'>Life</h1>
      </div>

      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam fugit tenetur voluptas repudiandae dolore quidem perferendis, eveniet nostrum aperiam possimus.
        </p>
      </div>

      <div className="carousel">
        <InfiniteCarousel slides={slides} />
      </div>
    </div>
  );
};

export default ArteixoLife;
