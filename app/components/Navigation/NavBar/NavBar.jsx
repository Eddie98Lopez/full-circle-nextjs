"use client";
import React from "react";
import Image from "next/image";
import Hamburger from "../Hamburger";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={`${styles.nav}`}>
      <Hamburger />
      <div className={styles.logo}>
        <Image
          width={50}
          height={50}
          src="/images/logo-small-animated.svg"
          alt="skull logo icon with blinking eyes"
        />
      </div>

      <a>
        <button className={`${styles.shop} `}>shop</button>
      </a>
    </nav>
  );
};

export default NavBar;
