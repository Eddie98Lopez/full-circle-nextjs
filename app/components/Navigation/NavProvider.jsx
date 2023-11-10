'use client'

import React, { createContext, useState, useContext } from "react";

const NavContext = createContext();

const useOpen = () => useContext(NavContext);

const NavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = ()=> setIsOpen(!isOpen);

  return (
    <NavContext.Provider value={{ isOpen, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
export { useOpen };
