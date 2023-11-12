import React from "react";
import { useOpen } from "./NavProvider";
import Image from "next/image";

const Hamburger = () => {
  const { isOpen, dispatch } = useOpen();

  return (
    <button onClick={dispatch} alt='open-menu-button'>
      <Image src={"/images/hamburger.svg"} alt="logo" height={32} width={32} />
    </button>
  );
};

export default Hamburger;
