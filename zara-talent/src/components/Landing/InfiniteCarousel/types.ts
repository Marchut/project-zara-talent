export interface Slide {
    url: string;
    title: string;
    description: string;
}

export interface InfiniteCarouselProps {
    slides: Slide[];
}

export interface SlideComponentProps {
    slide: Slide;
    width: number;
    height: number;
    marginTop: number;
}