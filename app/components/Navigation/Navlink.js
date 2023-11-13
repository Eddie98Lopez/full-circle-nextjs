import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ children, ...props }) => {
  const { name, path } = link;
  const pathName= usePathname()

  return (
    <Link {...props} >
      {children}
    </Link>
  );
};

export default Navlink;
