"use client";
import React, { useState, useContext, createContext } from "react";

const ModalContext = createContext();
const useModal = () => useContext(ModalContext)


const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const dispatch = ()=>{setModal(!modal)}

  return (
    <ModalContext.Provider value={{modal, dispatch}}>
      {children}
    </ModalContext.Provider>
  );
};



export default ModalProvider;
export {useModal}
