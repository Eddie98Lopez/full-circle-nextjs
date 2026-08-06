import Link from "next/link";
import React from "react";
import SocialLinksBar, { dummySocialLinks } from "./social-bar";

const Footer = () => {
  return (
    <footer className="w-full h-full flex justify-center background-paper p-16 md:bg-fixed">
      <div className="w-full max-w-[11600px] lg:grid lg:grid-cols-3 gap-8 content-center items-center text-center">
        <div>newsletter signup</div>
        <div>vertical seperator</div>
        <div className="min-w mx-auto text-center">
          <SocialLinksBar links={dummySocialLinks} />
        </div>
        <div>footer menu</div>
        <div>business contact information</div>
        <div>business hours</div>
        <div>order action buttons</div>
        <div>vertical divider</div>
        <div>
          copyright 2026 by{" "}
          <Link href="https://www.lopezed.com" target="_blank">
            Lopezed LLC
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
