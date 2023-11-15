import React from "react";
import styles from "./ImageLink.module.css";

const links = ["find our beer", "black-owned", "#goodvibesonly", "events"];

const ImageLinkList = () => {
  return (
    <ul className={styles.list}>
      {links.map((item) => (
        <li key={Math.random()} className={`${styles.item} display-2`}><a>{item}</a></li>
      ))}
    </ul>
  );
};

export default ImageLinkList;
