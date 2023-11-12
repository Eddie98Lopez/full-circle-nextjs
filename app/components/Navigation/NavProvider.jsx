"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavContext = createContext();

const useOpen = () => useContext(NavContext);

const NavProvider = ({ children }) => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <NavContext.Provider value={{ isOpen, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
export { useOpen };
