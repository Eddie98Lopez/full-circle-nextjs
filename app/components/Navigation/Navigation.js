"use client";

import React from "react";
import NavBar from "./NavBar/NavBar";
import styles from "./Navigation.module.css";
import NavProvider from "./NavProvider";
import NavMenu from "./NavLinkList/NavMenu";

const Navigation = () => {
  return (
    <NavProvider>
      <nav className={styles.nav}>
        <NavBar />
        <NavMenu />
      </nav>
    </NavProvider>
  );
};

export default Navigation;
