import React from "react";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="relative">
      <Image
      className="center"
        src="images/opaque-full-logo.svg"
        width={50}
        height={50}
        alt="logo-in-footer"
      />
    </div>
  );
};

export default FooterLogo;
