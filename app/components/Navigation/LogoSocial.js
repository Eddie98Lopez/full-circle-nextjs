import React from "react";
import styles from "./NavLinkList/NavList.module.css";
import Image from "next/image";
import socialDummyData from "../SocialComponent/dummyData";
import SocialList from "../SocialComponent/SocialList";

const LogoSocial = () => {
  return (
    <div className="flex-col place-content-center w-full center">
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/opaque-full-logo.svg"}
          alt="logo-icon"
          width={50}
          height={50}
        />
      </div>

      <SocialList array={socialDummyData} theme="light" />
    </div>
  );
};

export default LogoSocial;
