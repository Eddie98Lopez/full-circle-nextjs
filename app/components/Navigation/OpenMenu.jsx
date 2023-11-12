"use client";
import React from "react";
import styles from "./Navigation.module.css";
import { useOpen } from "./NavProvider";
import { RiCloseFill } from "react-icons/ri";

const OpenMenu = () => {
  const { isOpen, dispatch } = useOpen();

  return (
    <div id="menu"
      className={`${styles.menu} bg-2 ${isOpen==true && styles.openMenu}`}
    >
      <div onClick={dispatch} className="text-5xl">
        <RiCloseFill className="text-white" />
      </div>
    </div>
  );
};

export default OpenMenu;
