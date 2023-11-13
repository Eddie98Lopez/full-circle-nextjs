import React from "react";
import Link from "next/link";
import styles from "./NavList.module.css";
import { useOpen } from "../NavProvider";
import "../../../animate.css";

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
          <Link
            key={Math.random()}
            href={link.path}
            className={`${styles.open}`}
            style={{
              animationDelay: `${ .2*(i / navLinks.length)}s`,
            }}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinkList;
