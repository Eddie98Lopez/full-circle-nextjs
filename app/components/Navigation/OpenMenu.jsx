"use client";
import React from "react";
import styles from "./Navigation.module.css";
import { useOpen } from "./NavProvider";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Beer", path: "/beer" },
  { name: "Story", path: "/story" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
];

const OpenMenu = () => {
  const { isOpen, dispatch } = useOpen();

  return (
    <div className={`${styles.menu} bg-2 ${isOpen == true && styles.openMenu}`}>
      <div onClick={dispatch} className={styles.close}>
        <RiCloseFill className="text-white" />
      </div>
      <div className={styles.imageWrapper}>
        <Image src="/images/logo-full.svg" width={50} height={50} alt="logo" />
      </div>

      <div>
        <div className={styles.menuList}>
          {navLinks.map((link, i) => {
            return (
              <Link key={i} href={link.path} onClick={dispatch}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={styles.button}>
        <button className="btn">Shop</button>
      </div>
    </div>
  );
};

export default OpenMenu;
