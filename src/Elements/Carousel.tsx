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
  activeSlideClassName?:string
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
    containerClassName,
    activeSlideClassName
  } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const ControlClass = `z-10 absolute top-1/2 -translate-y-1/2 w-8 h-8 border border-Gray_200 rounded-full flex items-center  justify-center  focus:outline-none ${controlClass}`;

  return (
    <div className={`w-full relative ${containerClassName}`}>
      <SimplyCarousel
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        centerMode
        onRequestChange={setActiveSlide}
        containerProps={{
          className: "w-full",
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        innerProps={{
          className: "w-full !max-w-full",
        }}
        itemsListProps={{
          className: "",
        }}
        activeSlideProps={{
            className: activeSlideClassName
        }}
        forwardBtnProps={{
          children: (
            <ArrowLeftIcon
              className={`rotate-180 text-black w-5 ${rightControlIconClass}`}
            />
          ),
          className: `${ControlClass} right-0 ${rightControlClass}`,
        }}
        backwardBtnProps={{
          children: (
            <ArrowLeftIcon
              className={`text-black w-5 ${leftControlIconClass} `}
            />
          ),
          className: `${ControlClass} left-0 ${leftControlClass}`,
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
