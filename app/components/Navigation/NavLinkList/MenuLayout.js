import React from "react";
import styles from "./MenuLayout.module.css";
import { useOpen } from "../NavProvider";
import { RiCloseFill } from "react-icons/ri";

const MenuLayout = ({ children }) => {
  const { isOpen, dispatch } = useOpen();
  return (
    <div className={`${styles.menu} bg-2 ${isOpen == true && styles.openMenu}`}>
      <div onClick={dispatch} className={styles.close}>
        <button alt='close-menu-menu'>
          <RiCloseFill className="text-white" />
        </button>
      </div>

      <div className={styles.logo}>{children[0]}</div>
      <div className={styles.div}></div>
      <div className={styles.links}>{children[1]}</div>
      <div  className={styles.button}>{children[2]}</div>
    </div>
  );
};

export default MenuLayout;
