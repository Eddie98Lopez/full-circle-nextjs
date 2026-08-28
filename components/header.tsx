import React from "react";
import { LogoSmall } from "./logo";
import { MobileNav } from "./navigation";
import Link from "next/link";
import SideCart from "./commerce/side-cart";

const Header = () => {
  return (
    <header className="w-full mx-auto flex justify-center items-center sticky top-0 z-10 bg-black text-white p-3">
      <div className="w-full max-w-[1600px] flex justify-end items-center gap-3">
        <Link href="/" className="size-8 fill-white mr-auto">
          <LogoSmall className="" />
        </Link>
        <div>
          <SideCart />
        </div>
        <div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
