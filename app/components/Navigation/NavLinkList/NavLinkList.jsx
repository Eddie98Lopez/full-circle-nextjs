import React from "react";
import Link from "next/link";
import styles from "./NavList.module.css";
import { useOpen } from "../NavProvider";
import "../../../animate.css";
import Navlink from "./Navlink";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Beer", path: "/beer" },
  { name: "Story", path: "/story" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
];

const NavLinkList = () => {
  const { isOpen } = useOpen();
  return (
    <div className={styles.list}>
      {navLinks.map((link, i) => {
        return (
          <Navlink
            key={Math.random()}
            href={link.path}
            className={`${styles.open}`}
            style={{
              animationDelay: `${ .2*(i / navLinks.length)}s`,
            }}
            link={link}
          >
            {link.name}
          </Navlink>
        );
      })}
    </div>
  );
};

export default NavLinkList;
