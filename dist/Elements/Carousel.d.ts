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
}
declare const Carousel: React.FunctionComponent<CarouselProps>;
export default Carousel;
