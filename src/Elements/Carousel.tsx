import React, { useState } from "react";
import SimplyCarousel from "react-simply-carousel";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

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
}

const Carousel: React.FunctionComponent<CarouselProps> = ({ ...props }) => {
  const {
    items,
    itemsToShow,
    speed,
    showDotsNav,
    controlClass,
    leftControlClass,
    rightControlClass,
    leftControlIconClass,
    rightControlIconClass,
    controlIcon,
    containerClassName,
    activeSlideClassName,
  } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={`carouselContainer ${containerClassName}`}>
      <SimplyCarousel
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        centerMode
        onRequestChange={setActiveSlide}
        containerProps={{
          className: "w-full justify-between",
        }}
        innerProps={{
          className: "w-full !max-w-full",
        }}
        itemsListProps={{
          className: "",
        }}
        activeSlideProps={{
          className: activeSlideClassName,
        }}
        forwardBtnProps={{
          children: controlIcon ? (
            controlIcon
          ) : (
            <ArrowLeftIcon
              className={` carouselControlIcon ${rightControlIconClass}`}
            />
          ),
          className: `carouselControl rotate-180 ${controlClass} right-0 ${rightControlClass}`,
        }}
        backwardBtnProps={{
          children: controlIcon ? (
            controlIcon
          ) : (
            <ArrowLeftIcon
              className={`carouselControlIcon ${leftControlIconClass} `}
            />
          ),
          className: `carouselControl ${controlClass} left-0 ${leftControlClass}`,
        }}
        dotsNav={{
          show: !!showDotsNav,
        }}
        itemsToShow={itemsToShow || 3}
        speed={speed || 400}
      >
        {items.map((item) => item)}
      </SimplyCarousel>
    </div>
  );
};

export default Carousel;
