"use client";

import React, {
  useState,
  useRef,
  useContext,
  createContext,
  createRef,
} from "react";
import styles from "./Carousel.module.css";
import Controls from "./Controls";

const CarouselContext = createContext();

export const useCarousel = () => useContext(CarouselContext);

const Carousel = ({ array, children, ...props }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const holster = useRef(null);
  const state = {
    current: { current, setCurrent },
    root: holster,
  };

  const previous = () => {
    if (current == 0) {
      const element =
        holster.current && holster.current.children[array.length - 1];
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrent(array.length - 1);
    } else {
      const element = holster.current && holster.current.children[current - 1];
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrent(current - 1);
    }
  };
  const next = () => {
    if (current == array.length - 1) {
      
      const element =
        holster.current && holster.current.children[0];
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrent(0);
    } else {
      const element = holster.current && holster.current.children[current + 1];
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrent(current + 1);
    }
  };

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    e.stopPropagation();
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    // add your conditional logic here

    isLeftSwipe && next();
    isRightSwipe && previous();
  };
  //console.log(holster)

  return (
    <CarouselContext.Provider value={state}>
      <div
        className={styles.viewPort}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        id="viewport-carousel"
      >
        <ul className={`${styles.list}`} ref={holster}>
          {children}
        </ul>
        <Controls next={next} previous={previous} />
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
