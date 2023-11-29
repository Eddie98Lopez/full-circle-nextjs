import React from "react";
import styles from "./ImageLink.module.css";
import { url } from "inspector";

const links = [
  { display: "find our beer", href: "/images/find-beer.webp" },
  { display: "black owned", href: "/images/black-owned.webp" },
  { display: "#goodvibesonly", href: "/images/boop.webp" },
  {display:"events",href:'/images/events.webp'},
];

const ImageLinkList = () => {
  return (
    <ul className={styles.list}>
      {links.map((item) => (
        <li
          key={Math.random()}
          className={`${styles.item} display-2`}
          style={{ backgroundImage: `url(${item.href})` }}
        >
          <a>{item.display}</a>
        </li>
      ))}
    </ul>
  );
};

export default ImageLinkList;
