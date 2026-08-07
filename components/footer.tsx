import Link from "next/link";
import React from "react";
import SocialLinksBar, { dummySocialLinks } from "./social-bar";
import { Separator } from "./ui/separator";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="w-full h-full flex justify-center background-paper p-16 md:bg-fixed">
      <div className="w-full max-w-[11600px] lg:grid lg:grid-cols-3 gap-8 content-center items-center text-center">
        <div>newsletter signup</div>
        <div className="h-20 mx-auto">
          <Separator orientation="vertical" className="bg-background h-full" />
        </div>
        <div className="min-w mx-auto text-center lg:text-right space-y-4">
          <p className="font-heading text-2xl">Follow Us</p>
          <SocialLinksBar links={dummySocialLinks} />
        </div>
        <div>footer menu</div>
        <div>
          <div className="text-center text-white">
            <Link href="/" className="min-w mx-auto bg-green-500">
              <div className="size-40 mx-auto mb-4">
                <Logo className="fill-background mx-auto" />
              </div>
            </Link>
            <p className="font-heading text-3xl">Craft brewery Website</p>
            <p>
              <Link href="mailto:info@lopezed.com">info@lopezed.com</Link>
            </p>
            <p></p>
            <p>1234 W Street St</p>
          </div>
        </div>
        <div>business hours</div>
        <div>order action buttons</div>
        <div className="h-20 mx-auto">
          <Separator orientation="vertical" className="bg-background h-full" />
        </div>
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
