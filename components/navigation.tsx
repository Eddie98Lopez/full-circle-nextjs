"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialLinksBar, { dummySocialLinks } from "./social-bar";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

type NavLink = { label: string; slug: string };

const links: NavLink[] = [
  { label: "Home", slug: "" },
  { label: "Our Story", slug: "our-story" },
  { label: "Beers", slug: "beers" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu" className="flex flex-col gap-1.5">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="z-5000 background-paper data-[side=right]:w-full data-[side=right]:sm:max-w-none border-none p-8"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <Logo className="size-40 md:size-80 fill-white" />
          <SocialLinksBar links={dummySocialLinks} />
        </div>
        <nav className="flex flex-col gap-4 mt-8">
          {links.map((link) => (
            <Link key={link.slug} href={`/${link.slug}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <Button size={"lg"}>Shop Now</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
