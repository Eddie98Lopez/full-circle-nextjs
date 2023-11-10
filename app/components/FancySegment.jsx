import React from "react";
import styles from "./FeaturedBeers/Details.module.css";
import Image from "next/image";

const FancySegment = () => {
  return (
    <div className={styles.fancySegment}>
      <div className={styles.segment}></div>

      <div className={styles.hop}>
        <Image src='/images/hop-white.svg' width={50} height={50} alt='decorative-hop-icon'/>
      </div>

      <div className={styles.segment}></div>
    </div>
  );
};

export default FancySegment;
