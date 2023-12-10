import React from "react";
import styles from "./VerifyAge.module.css";
import {useModal} from '../Modal/Modal'

const VerifyAge = (props) => {
    const modal = useModal()
    console.log(modal)
  return (
    <div className={`w-full h-full ${styles.wrapper}`}>
      <div className="w-full h-full flex place-content-center">left LOGO</div>
      <div className="w-full h-full flex place-content-center">
        <div className={styles.answers}>
          <div className={styles.top}>
            <p className="font-bold text-2xl ">Are you over 21?</p>
            <p className="display-2 text-7xl" >Yes</p>
          </div>
          <div className={styles.bottom}>
            <p className="display-2 text-7xl">No</p>
          </div>
        </div>
      </div>
      <div className={`bg-2 ${styles.background}`}>
        <div className={styles.invert}></div>
      </div>
    </div>
  );
};

export default VerifyAge;
