"use client";
import React from "react";
import LogoSocial from "../LogoSocial";
import MenuLayout from "./MenuLayout";
import NavLinkList from "./NavLinkList";
import styles from './NavList.module.css'
import SocialList from "../../SocialComponent/SocialList";
import socialDummyData from "../../SocialComponent/dummyData";

const NavMenu = () => {
  return (
    <MenuLayout>
      <div>
        <LogoSocial/>
      </div>
      <div>
        <NavLinkList />
      </div>

      <div className={styles.button}>
        <a href="/">
          <button className="btn">Shop</button>
        </a>
      </div>
    </MenuLayout>
  );
};

export default NavMenu;
