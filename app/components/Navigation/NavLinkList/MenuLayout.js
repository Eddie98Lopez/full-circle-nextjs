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
        <RiCloseFill className="text-white" />
      </div>

      <div>{children[0]}</div>
      <div>{children[1]}</div>
      <div className={styles.full}>{children[2]}</div>
    </div>
  );
};

export default MenuLayout;
