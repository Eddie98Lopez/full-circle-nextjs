'use client'
import React from "react";
import Image from "next/image";
import { useOpen } from "./NavProvider";
import Hamburger from "./Hamburger";
import styles from './Navigation.module.css'

const NavBar = (props) => {
  
  return (
    <nav className={`${styles.nav}`}>
        
      <Hamburger />
      <div>
        <Image src="/images/logo-icon.svg" height={40} width={40} alt="logo" />
      </div>

      <div>button</div>
    </nav>
  );
};

export default NavBar;
