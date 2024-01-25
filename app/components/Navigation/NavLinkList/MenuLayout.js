import React from "react";
import styles from "./MenuLayout.module.css";
import { useOpen } from "../NavProvider";
import { RiCloseFill } from "react-icons/ri";

const MenuLayout = ({ children }) => {
  console.log(children);
  const { isOpen, dispatch } = useOpen();
  return (
    <div className={`${styles.menu} bg-2 ${isOpen == true && styles.openMenu}`}>
      <div onClick={dispatch} className={styles.close}>
        <button alt="close-menu-menu">
          <RiCloseFill className="text-white" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default MenuLayout;
