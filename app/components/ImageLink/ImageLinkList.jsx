import React from "react";
import styles from "./ImageLink.module.css";

import ImageLink from "./ImageLink";

const links = [
  { display: "find our beer", href: "/images/find-beer.webp" },
  { display: "black owned", href: "/images/black-owned.webp" },
  { display: "#goodvibesonly", href: "/images/boop.webp" },
  { display: "events", href: "/images/events.webp" },
];

const ImageLinkList = () => {
  return (
    <ul className={styles.list}>
      {links.map((item) => (
        <ImageLink key={Math.random()} link={item} />
      ))}
    </ul>
  );
};

export default ImageLinkList;
