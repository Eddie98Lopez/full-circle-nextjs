import React from "react";
import Link from "next/link";
import styles from './NavList.module.css'
import { usePathname } from "next/navigation";

const Navlink = ({ children,link, ...props }) => {
  const { name, path } = link;
  const pathName= usePathname()
  const active = pathName==='/'? pathName===path : pathName.includes(name.toLowerCase())



  return (
    <Link {...props} className={`${props.className} ${ active && styles.active }`}>
      {children}
    </Link>
  );
};

export default Navlink;
