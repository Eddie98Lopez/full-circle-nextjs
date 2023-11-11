'use client'
import React from "react";
import Image from "next/image";
import { useOpen } from "./NavProvider";
import Hamburger from "./Hamburger";
import styles from './Navigation.module.css'
import LogoAnimated from "../../../public/images/LogoAnimated";

const NavBar = (props) => {
  
  return (
    <nav className={`${styles.nav}`}>
        
      <Hamburger />
      <div className={styles.logo}>
        <Image width={50} height={50} src='/images/logo-small-animated.svg'/>
      </div>

      <div>button</div>
    </nav>
  );
};

export default NavBar;
