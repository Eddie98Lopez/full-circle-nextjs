import React from "react";
import styles from "./FeaturedBeers/Details.module.css";
import Image from "next/image";
import HopIcon from "./HopIcon";

const FancySegment = () => {
  return (
    <div className={styles.fancySegment}>
      <div className={styles.segment}></div>

      <div className={styles.hop}>
      <HopIcon/>
      </div>

      <div className={styles.segment}></div>
    </div>
  );
};

export default FancySegment;
