import React from "react";
import Image from "next/image";
import styles from "./FooterLogo.module.css";

const FooterLogo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}>
        <Image
          src="/images/opaque-full-logo.svg"
          width={50}
          height={50}
          alt="logo-in-footer"
        />
      </div>
    <div className='text-2xl'>
    <h3 className="display-2 text-3xl">Full Circle Brewing Co.</h3>
      <p>info@email.com</p>
      <p>xxx-xxx-xxxx</p>
      <p>1234 W Street St</p>
    </div>
    </div>
  );
};

export default FooterLogo;
