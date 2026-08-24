import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import type { Beer } from "@/lib/dummyData";
import Hop from "./hop";

const BeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <li className="grid grid-cols-1 w-full min-h-90 h-full relative">
      <div className="row-start-1 row-end-2 relative w-full z-1 translate-y-10 h-full min-h-70">
        <Image
          fill
          objectFit="contain"
          objectPosition={"center center"}
          src="/images/beer-can.png"
          alt="beer can"
          className="scale-120 origin-center drop-shadow-xl w-full"
        />
      </div>
      <div className=" text-center  pt-6  row-start-2 row-end-3 col-start-1 col-end-2  z-1">
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
      <div className="background-paper h-full my-auto row-start-2 row-end-3 col-start-1 col-end-2 z-0"></div>
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
          src="/images/beer-can.png"
          alt="beer can"
          className="scale-120 origin-center drop-shadow-xl w-full z-2 -translate-x-10 "
        />
        <Image
          fill
          objectFit="contain"
          objectPosition={"center center"}
          src="/images/pint-glass-lg.png"
          alt="beer can"
          className="scale-120 origin-center drop-shadow-sm w-full z1 translate-x-10 -translate-y-2 scale-120"
        />
      </div>
      <div className=" text-center  pt-10  row-start-2 row-end-3 col-start-1 col-end-2 pb-4 md:pb-8 z-1">
        <div className="flex items-center w-full h-full my-auto p-8 pl-8 ">
          <div className="w-full h-full flex flex-col justify-center text-white gap-3.5">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading">
              {beer.title}
            </h3>
            <div className="flex gap-4 items-center w-full">
              <Separator className="border-1 rounded w-full flex-1" />{" "}
              <Hop className="fill-white size-6" />
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
export default BeerCard;
