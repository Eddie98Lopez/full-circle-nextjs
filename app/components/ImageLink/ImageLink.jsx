'use client';

import React, { useRef } from "react";
import styles from "./ImageLink.module.css";
import useOnScreen from "@/app/utils/useOnScreen";

const ImageLink = ({ link, ...props }) => {
  const linkRef = useRef();
  const visible = useOnScreen(linkRef, { rootMargin: "0px", threshold: 1 });

  const { background, display, href } = link;
  return (
    <li
      ref={linkRef}
      className={`${styles.item} display-2 initial ${visible && 'show'}`}
      style={{
        backgroundImage: `url(${href})`,
        /* animation: visible && "fadeIn 0.5s linear .2s forwards",
        transition: "all 0.3s ease-in-out", */
      }}
    >
      <div className={styles.bgdiv}></div>
      <a>{display}</a>
    </li>
  );
};

export default ImageLink;
