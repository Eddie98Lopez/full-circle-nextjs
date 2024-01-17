import React from "react";
import styles from "./VerifyAge.module.css";
import { useOpen } from "../Navigation/NavProvider";
import { useModal } from "../Modal/ModalProvider";
import Image from "next/image";



const VerifyAge = (props) => {
  const {display,setDisplay} = props.modal

  const verifyAge = ()=>{
    localStorage.setItem('ofDrinkingAge','true')
    console.log(localStorage)
    setDisplay(false)
  }

  const closeModal = () => setDisplay(false)
  return (
    <div className={`w-full h-full ${styles.wrapper} `}>
      <div className="w-full h-full flex place-content-center">
        <div className={styles.imageWrap}>
          <div className={styles.circle}></div>
        <Image src='/images/opaque-full-logo.svg' alt='logo' width={100} height={100}/>
        </div>
      </div>
      <div className="w-full h-full flex place-content-center">
        <div className={styles.answers}>
          <div className={styles.top}>
            <p className="font-bold text-2xl ">Are you over 21?</p>
            <p className="display-2 text-9xl"  onClick={verifyAge}>Yes</p>
          </div>
          <div className={styles.bottom}>
            <p className="display-2 text-9xl">No</p>
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
