"use client";
import React from "react";
import LogoSocial from "../NavLogoSection/LogoSocial";
import MenuLayout from "./MenuLayout";
import NavLinkList from "./NavLinkList";
import styles from "./MenuLayout.module.css";

const NavMenu = () => {
  return (
    <MenuLayout>
      <div className={styles.logo}>
        <LogoSocial />
      </div>
      <div className={styles.links}>
        <NavLinkList />
      </div>
      <div className={styles.div}></div>

      <div className={styles.button}>
        <a href="/">
          <button className="btn text-2xl">Shop</button>
        </a>
      </div>
    </MenuLayout>
  );
};

export default NavMenu;
