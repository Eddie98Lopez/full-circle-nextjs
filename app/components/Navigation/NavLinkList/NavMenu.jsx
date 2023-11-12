"use client";
import React from "react";
import styles from "./NavList.module.css";
import Image from "next/image";
import MenuLayout from "./MenuLayout";
import NavLinkList from "./NavLinkList";

const NavMenu = () => {
  return (
    <MenuLayout>
      <div className={styles.imageWrapper}>
        <Image src="/images/logo-full.svg" width={50} height={50} alt="logo" />
        <div>social media component</div>
      </div>

      <div>
        <NavLinkList />
      </div>

      <div className={styles.button}>
        <a href='/'><button className="btn">Shop</button></a>
      </div>
    </MenuLayout>
  );
};

export default NavMenu;
