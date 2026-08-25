import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import type { Beer } from "@/lib/dummyData";
import Hop from "./hop";
import { Card, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import DemoDialog from "./demo-dialog";
import SectionTitle from "./section-title";

const BeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <li className="grid grid-cols-1 w-full min-h-90 h-full relative group ">
      <Image
        fill
        src={beer.artwork}
        alt="beer artwork"
        className="row-start-1 row-end-2 w-full object-cover md:opacity-0 md:translate-y-10 group-hover:opacity-100 transition-all duration-200 mix-blend-multiply"
      />
      <div className="row-start-1 row-end-2 relative w-full z-1 translate-y-12 h-full min-h-70">
        <Image
          fill
          objectFit="contain"
          objectPosition={"center center"}
          src="/images/beer-can-with-logo.png"
          alt="beer can"
          className="scale-115 origin-center drop-shadow-xl/30 group-hover:rotate-4 w-full group-hover:-translate-y-6 group-hover:drop-shadow-lg/80 group-hover:scale-140 transition-all ease-[cubic-bezier(0.34,2.25,0.64,1)] duration-400 z-2"
        />
      </div>
      <div className=" text-center  pt-6  row-start-2 row-end-3 col-start-1 col-end-2 z-1 group-hover:-rotate-2 transition-all">
        <div className="flex items-center w-full h-full my-auto p-8 pl-8 ">
          <div className="w-full h-full flex flex-col justify-center text-white gap-3.5">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading">
              {beer.title}
            </h3>
            <Separator className="border-1 rounded" />
            <p className="font-heading text-2xl md:text-3xl">
              {beer.beerType} {"  "} | {"  "} {beer.alcByVolPercentage}% ABV
            </p>
            <Separator className="border-1 rounded" />
            <p className="text-pretty">{beer.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="background-paper h-full my-auto row-start-2 row-end-3 col-start-1 col-end-2 z-0 group-hover:-rotate-2 transition-all"></div>
    </li>
  );
};

export const BeerHero = ({ beer }: { beer: Beer }) => {
  return (
    <div className="grid grid-cols-1 max-w-5xl mx-auto min-h-90 h-full relative">
      <div className="row-start-1 row-end-2 relative w-full z-1 translate-y-10 h-full min-h-70">
        <Image
          fill
          objectFit="contain"
          objectPosition={"center center"}
          src="/images/beer-can-with-logo.png"
          alt="beer can"
          className="scale-120 origin-center drop-shadow-xl/80 w-full z-2 -translate-x-10 "
        />
        <Image
          fill
          objectFit="contain"
          objectPosition={"center center"}
          src="/images/pint-glass-lg.png"
          alt="beer can"
          className="scale-120 origin-center drop-shadow-sm/60 w-full z1 translate-x-10 -translate-y-2 scale-120"
        />
      </div>
      <div className=" text-center  pt-10  row-start-2 row-end-3 col-start-1 col-end-2 pb-4 md:pb-8 z-1">
        <div className="flex items-center w-full h-full my-auto p-8 pl-8 ">
          <div className="w-full h-full flex flex-col justify-center text-white gap-3.5">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading">
              {beer.title}
            </h3>
            <div className="flex gap-4 items-center w-full">
              <Separator className="border-1 rounded w-full flex-1" />{" "}
              <Hop className="fill-primary size-6" />
              <Separator className="border-1 rounded w-full flex-1" />
            </div>
            <p className="font-heading text-2xl md:text-3xl mb-2">
              {beer.beerType} {"  "} | {"  "} {beer.alcByVolPercentage}% ABV
            </p>
            <Separator className="border-1 rounded" />
            <div>
              <p className="text-pretty">{beer.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-paper h-full my-auto row-start-2 row-end-3 col-start-1 col-end-2 z-0"></div>
    </div>
  );
};

export function BeerClubBanner() {
  return (
    <section>
      <Card className="group flex w-full h-full min-h-[60vh] grid p-0">
        <div
          className="w-full h-full col-start-1 row-start-1 group-hover:scale-105 z-0 transition-all duration-800"
          style={{
            backgroundImage: `url("/images/blog-brand-loyalty.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-start-1 row-start-1  w-full min-h-40 h-full  bg-black/80  transition-colors z-1 " />

        <CardContent className="w-full h-full col-start-1 row-start-1 z-3 grid gap-8 p-8 place-content-center text-center backdrop-blur-xs">
          <CardTitle className="text-6xl text-white text-pretty">
            <SectionTitle>
              <p className="text-base font-sans uppercase font-bold tracking-widest mb-2">
                Thirsty for More?
              </p>
              <h2 className="text-6xl">Join the Club.</h2>
            </SectionTitle>
          </CardTitle>
          {/* <Separator className="bg-primary border-2 border-primary rounded max-w-20 mx-auto" /> */}

          <CardDescription className="text-white text-xl text-balance max-w-2xl ">
            Get early access to limited-batch releases, exclusive merch, and
            members-only taproom perks. Your next favorite pint is waiting.
          </CardDescription>
          <DemoDialog>
            <Button size={"lg"} className="mt-4 min-w-50 max-w-sm mx-auto">
              Sign Up Now
            </Button>
          </DemoDialog>
        </CardContent>
      </Card>
    </section>
  );
}
export default BeerCard;
