import React from "react";
import { LogoSmall } from "./logo";

const Header = () => {
  return (
    <header className="w-full mx-auto flex justify-center items-center sticky top-0 z-500 bg-black text-white p-3">
      <div className="w-full max-w-[1600px] flex justify-between items-center">
        <div>hamburger</div>
        <div className="size-10 fill-white">
          <LogoSmall />
        </div>
        <div>button</div>
      </div>
    </header>
  );
};

export default Header;
