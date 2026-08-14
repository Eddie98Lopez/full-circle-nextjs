import Link from "next/link";
import React from "react";
import SocialLinksBar from "./social-bar";
import { dummySocialLinks } from "@/lib/menus";
import { Separator } from "./ui/separator";
import Logo from "./logo";
import EmailOptIn from "./email-subscribe";
import { Button } from "./ui/button";

const hours = [
  { day: "Sun", time: "9 AM – 5 PM" },
  { day: "Mon", time: "9 AM – 5 PM" },
  { day: "Tue", time: "9 AM – 5 PM" },
  { day: "Wed", time: "9 AM – 5 PM" },
  { day: "Thu", time: "9 AM – 5 PM" },
  { day: "Fri", time: "9 AM – 5 PM" },
  { day: "Sat", time: "9 AM – 5 PM" },
];

function Footer() {
  return (
    <footer className="w-full h-full flex justify-center background-paper p-16 md:bg-fixed">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-8 place-content-between items-center  text-center ">
        <div>
          <EmailOptIn />
        </div>
        <div className="h-20 mx-auto hidden md:block ">
          <Separator orientation="vertical" className="bg-background h-full" />
        </div>
        <div className="text-center lg:text-right space-y-4 ">
          <p className="font-heading text-2xl">Follow Us</p>
          <div className="flex justify-center md:justify-end w-full">
            <SocialLinksBar links={dummySocialLinks} />
          </div>
        </div>
        <div>footer menu</div>
        <div className="h-10 mx-auto md:hidden">
          <Separator orientation="vertical" className="bg-background h-full" />
        </div>
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
        <div className="flex justify-center md:justify-end">
          <ul className="min-w-40 font-heading">
            {hours.map(({ day, time }) => (
              <li
                key={day}
                className="flex justify-between text-lg md:text-base py-1 max-w-xs"
              >
                <span className="">{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <Button size="lg">Order Now</Button>{" "}
          <Button size="lg" variant={"outline"}>
            Find Beer
          </Button>
        </div>
        <div className="h-10 md:h-20 mx-auto ">
          <Separator orientation="vertical" className="bg-background h-full" />
        </div>
        <div className="text-center md:text-right w-full">
          copyright 2026 by{" "}
          <Link href="https://www.lopezed.com" target="_blank">
            Lopezed LLC
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
