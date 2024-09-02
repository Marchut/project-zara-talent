import React from 'react';
import './OurPeople.scss';
import InfiniteScroller from '../InfiniteScroller/InfiniteScroller';
import Carousel from '../Carousel/Carousel';
import { Slide } from '../Carousel/types';

const imageUrls = [
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
  '/working.jpg',
];

const carouselSlides: Slide[] = [
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

const OurPeople: React.FC = () => {
  return (
    <div className="ourpeople">
        <div className='title'>
          <h1 className='title-1'>Our</h1>
          <h1 className='title-2'>people</h1>
        </div>
        <InfiniteScroller images={imageUrls} orientation="horizontal" />
        <Carousel slides={carouselSlides} layout="row" />
    </div>
  );
};

export default OurPeople;
