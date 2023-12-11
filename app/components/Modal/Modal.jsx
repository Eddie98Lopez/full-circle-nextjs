"use client";

import React, { useContext } from "react";
import ModalProvider, { useModal } from "./ModalProvider";
import styles from "./Modal.module.css";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({ children, visible, ...props }) => {

  //const display = () => (modal ? "block" : "none");
  return (
    <ModalProvider>
      <div className={styles.modal} /* style={{ display: display() }} */>
        <div className="close-btn">
          <button alt="close-modal-button">
            <RiCloseFill className="text-white" />
          </button>
        </div>
        {children}
      </div>
    </ModalProvider>
  );
};

export default Modal;
