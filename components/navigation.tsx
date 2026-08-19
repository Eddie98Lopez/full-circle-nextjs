"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SocialLinksBar from "./social-bar";
import { dummySocialLinks } from "@/lib/menus";
import Logo from "./logo";
import { Menu } from "lucide-react";
import { header_menu } from "@/lib/menus";
import { Separator } from "./ui/separator";
import { StaggerReveal } from "./ui/stagger-wrapper";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open menu" className="flex flex-col gap-1.5">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="z-5000 background-paper data-[side=right]:w-full data-[side=right]:sm:max-w-none border-none p-8 place-content-center"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[1fr_auto] gap-8 h-[80vh] mx-auto max-w-[1600px] w-full">
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <Logo className="size-40 lg:size-80 fill-white" />
            <SocialLinksBar links={dummySocialLinks} />
          </div>

          <Separator orientation="vertical" className="hidden lg:block" />

          <div className="flex justify-center items-center">
            <div className="w-40 lg:w-80 ">
              <nav>
                <ul>
                  <StaggerReveal
                    direction="y"
                    delay={0.25}
                    className="flex flex-col gap-6 text-center lg:text-left"
                    preset="faster"
                  >
                    {header_menu.map((link) => (
                      <li
                        key={link.slug}
                        className="group hover:translate-x-2 transition-all"
                      >
                        <Link
                          href={`/${link.slug}`}
                          onClick={() => setOpen(false)}
                          className={`text-4xl font-bold uppercase group-hover:text-primary ${pathname.includes(link.slug) && link.slug !== "" && "text-yellow-500"} ${link.slug == "" && pathname == "/" && "text-yellow-500"}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </StaggerReveal>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
