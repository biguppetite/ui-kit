import React from "react";
export interface CarouselProps {
    items: any[];
    showDotsNav?: boolean;
    itemsToShow?: number;
    speed?: number;
    controlClass?: string;
    leftControlClass?: string;
    rightControlClass?: string;
    leftControlIconClass?: string;
    rightControlIconClass?: string;
    containerClassName?: string;
    activeSlideClassName?: string;
    controlIcon?: JSX.Element;
    dotsNavActiveItemClassName?: string;
    dotsNavContainerClassName?: string;
    dotsNavItemsClassName?: string;
    centerMode?: boolean;
}
declare const Carousel: React.FunctionComponent<CarouselProps>;
export default Carousel;
