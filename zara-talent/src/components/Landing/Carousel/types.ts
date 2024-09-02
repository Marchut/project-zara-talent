export interface Slide {
  title?: string;
  description: string;
}

export interface CarouselProps {
  slides: Slide[];
  layout: 'column' | 'row';
}