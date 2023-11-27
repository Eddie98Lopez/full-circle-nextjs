"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import styles from "./Carousel.module.css";
import { useCarousel } from "./index";
import useOnScreen from "@/app/utils/useOnScreen";

const CarouselSlide = ({ children, ...props }) => {
  const ref = useRef(null);
  const { current, setCurrent } = useCarousel().current;
  const { root } = useCarousel();

  const visible = useOnScreen(ref, {
    root: root.current,
    rootMargin: "0px",
    threshold: 1,
  });

  //console.log(ref.current, visible)

  useEffect(() => {
    const element = ref.current;

    if (visible) {
      const index = Number(element.id.split("-")[1]);
     // console.log(index)
      setCurrent(index);
    }
  }, [visible]);
  return (
    <div className={styles.listdiv} ref={ref} {...props}>
      {children}
    </div>
  );
};

export default CarouselSlide;
