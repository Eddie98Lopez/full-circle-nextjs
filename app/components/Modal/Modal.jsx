"use client";

import React, { useState, createContext, useContext } from "react";
import styles from "./Modal.module.css";
import { RiCloseFill } from "react-icons/ri";

const ModalContext = createContext();

const useModal = () => useContext(ModalContext);

const Modal = ({ children, visible, ...props }) => {
  const [modal, setModal] = useState(visible);
  const display = () => (modal ? "block" : "none");
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <div className={styles.modal} style={{ display: display() }}>
        <div onClick={() => setModal(false)} className="close-btn">
          <button alt="close-modal-button">
            <RiCloseFill className="text-white" />
          </button>
        </div>
        {children}
      </div>
    </ModalContext.Provider>
  );
};

export { useModal };
export default Modal;
