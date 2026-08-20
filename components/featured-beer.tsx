import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import type { Beer } from "@/lib/dummyData";

const FeaturedBeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <li className="grid grid-cols-1 md:grid-cols-[1fr_2fr] max-w-4xl mx-auto min-h-90 h-full relative">
      <div className="row-start-1 row-end-2 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 w-full z-1 translate-y-10 md:translate-y-0 h-full min-h-70">
        <Image
          fill
          objectFit="contain"
          objectPosition={"center center"}
          src="/images/beer-can.png"
          alt="beer can"
          className="scale-120 origin-center drop-shadow-xl w-full"
        />
      </div>
      <div className=" text-center md:text-left pt-6 md:pt-0 row-start-2 row-end-3 col-start-1 col-end-2 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 z-1">
        <div className="flex items-center w-full h-full my-auto p-8 pl-8 md:pl-0">
          <div className="w-full h-full flex flex-col justify-center text-white gap-3.5">
            <h3 className="text-3xl md:text-5xl font-heading">{beer.title}</h3>
            <Separator className="border-1 rounded" />
            <p className="font-heading text-2xl md:text-3xl">
              {beer.beerType} {"  "} | {"  "} {beer.alcByVolPercentage}% ABV
            </p>
            <Separator className="border-1 rounded" />
            <p className="text-pretty">{beer.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="background-paper h-full md:h-8/10 my-auto row-start-2 row-end-3 col-start-1 col-end-2 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 z-0"></div>
    </li>
  );
};

export default FeaturedBeerCard;
