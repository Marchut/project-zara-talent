import React from 'react';
import './WeAre.scss';
import Carousel from '../Carousel/Carousel';
import { Slide } from '../Carousel/types';

const carouselSlides: Slide[] = [
  {
    // title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quia vero ducimus saepe praesentium, officiis minima id, tempora assumenda, quas inventore ipsum possimus? Ea, voluptas et. Dolorem natus eum minus!",
  },
  {
    // title: "Title 2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae totam consectetur voluptas pariatur? Itaque consequuntur fuga eligendi quis dicta id expedita quam aliquam, aperiam dolor dolorem sed neque ipsa culpa.",
  },
  {
    // title: "Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis est quos dicta sapiente perferendis quae enim, a deserunt quod officiis incidunt reiciendis atque cum nisi nihil iure nobis dolorem!",
  }
];

const WeAre: React.FC = () => {
  return (
    <div className="weare">
      <div className='title-container'>
        <p id='we'>We</p>
        <p id='are'>are</p>
      </div>

      <div className='row'>
        <div className="we-container">
          <img src="/working.jpg" alt="Working placeholder" />
        </div>

        <div className="are-container">
          <Carousel slides={carouselSlides} layout="column" />
        </div>
      </div>
    </div>
  );
};

export default WeAre;
