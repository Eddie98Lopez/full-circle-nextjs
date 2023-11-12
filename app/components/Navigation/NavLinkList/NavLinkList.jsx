import React from "react";
import Link from "next/link";
import styles from "./NavList.module.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Beer", path: "/beer" },
  { name: "Story", path: "/story" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
];

const NavLinkList = () => {
  return (
    <div className={styles.list}>
      {navLinks.map((link, i) => {
        return (
          <Link key={Math.random() * i} href={link.path}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinkList;
