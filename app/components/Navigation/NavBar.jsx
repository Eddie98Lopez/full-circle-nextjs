"use client";
import React from "react";
import Image from "next/image";
import { useOpen } from "./NavProvider";
import Hamburger from "./Hamburger";
import styles from "./Navigation.module.css";
import OpenMenu from './OpenMenu'

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

      <button className={`${styles.shop} `}>shop</button>

      <OpenMenu/>
    </nav>
  );
};

export default NavBar;
