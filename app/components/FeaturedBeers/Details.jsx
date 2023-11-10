import React from "react";
import styles from "./Details.module.css";
import FancySegment from "../FancySegment";

const Details = ({ beer, ...props }) => {
  const { name, beer_type, abv, description } = beer;
  return (
    <div className={styles.wrapper}>
      <h3 className="display-2">{name}</h3>
      

      <FancySegment/>

      <p className={`${styles.span} display-2 text-3xl`}>
        <span>{beer_type}</span>   |   <span>{abv}%</span>
        <span className={styles.abv}>ABV</span>
      </p>

      <div className={styles.segment}></div>

      <p className={styles.description}>{description.slice(0, 200)}...</p>
    </div>
  );
};

export default Details;
