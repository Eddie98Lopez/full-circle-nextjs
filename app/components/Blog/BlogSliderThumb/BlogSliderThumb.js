import React from "react";
import styles from "./BlogSliderThumb.module.css";

const BlogSliderThumb = () => {
  return (
    <div className={`${styles.thumb}`}>
      <li>
        <div className={`${styles.img}`}>img</div>
        <div className={`${styles.gradient}`}/>
        <h3 className={`${styles.title} display-1 text-white`}>Blog Post  Title</h3>
      </li>
    </div>
  );
};

export default BlogSliderThumb;
