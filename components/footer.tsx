import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full flex justify-center">
      <div className="w-full max-w-[11600px] lg:grid lg:grid-cols-3 content-center items-center text-center">
        <div>newsletter signup</div>
        <div>vertical seperator</div>
        <div>social bar</div>
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
