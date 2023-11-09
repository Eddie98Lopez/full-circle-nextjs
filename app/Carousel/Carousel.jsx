"use client";

import React, { useState } from "react";
import FeaturedBeerCard from "./FeaturedBeerCard";
import styles from "./Featured.module.css";
import Controls from "./Controls";

const FeaturedBeersList = ({ array,  ...props }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const previous = () => {
    current === 0 ? setCurrent(array.length - 1) : setCurrent(current - 1);
  };
  const next = () => {
    current === array.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    // add your conditional logic here

    isLeftSwipe && next();
    isRightSwipe && previous();
  };

  return (
    <div
      className={styles.viewPort}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      <ul
        className={`${styles.list}`}
        style={{
          transform: `translateX(-${current * (100 / array.length)}%)`,
          width: `${array.length * 100}%`,
        }}
      >
        {array.map((item,i) => (
          <div key={i}/>
        ))}
      </ul>
      <Controls next={next} previous={previous} />
    </div>
  );
};

export default FeaturedBeersList;
