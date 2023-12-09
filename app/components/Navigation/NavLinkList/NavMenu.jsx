"use client";
import React from "react";
import LogoSocial from "../NavLogoSection/LogoSocial";
import MenuLayout from "./MenuLayout";
import NavLinkList from "./NavLinkList";
import styles from './NavList.module.css'


const NavMenu = () => {
  return (
    <MenuLayout>
      <div className="relative w-full h-full">
        <LogoSocial/>
      </div>
      <div className="relative w-full h-full">
        <NavLinkList />
      </div>

      <div className="relative w-full h-full">
        <a href="/" className={styles.button}>
          <button className="btn text-2xl" >Shop</button>
        </a>
      </div>
    </MenuLayout>
  );
};

export default NavMenu;
