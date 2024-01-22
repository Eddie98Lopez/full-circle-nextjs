import React from "react";
import styles from "./BlogSliderThumb.module.css";
import Image from "next/image";

const BlogSliderThumb = ({blog,...props}) => {
    const{cover_photo, title, id} = blog
  return (
    <div className={`${styles.thumb}`}>
      <li>
        <div className={`${styles.img}`}>
            <Image alt='cover-image' src={cover_photo} fill/>
        </div>
        <div className={`${styles.gradient}`}/>
        <h3 className={`${styles.title} display-1 text-white`}>{title}</h3>
      </li>
    </div>
  );
};

export default BlogSliderThumb;
