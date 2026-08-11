import React from "react";
import { Separator } from "./ui/separator";

const FeaturedBeerCard = () => {
  return (
    <li className="grid grid-cols-1 md:grid-cols-[1fr_2fr] max-w-4xl mx-auto h-90">
      <div className="row-start-1 row-end-2 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 w-full z-1 sm:translate-y-10 md:translate-y-0">
        picture
      </div>
      <div className=" sm:pt-10 md:pt-0 row-start-2 row-end-3 col-start-1 col-end-2 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 z-1">
        <div className="flex items-center w-full h-full my-auto p-8">
          <div className="w-full h-full flex flex-col justify-center text-white gap-3.5">
            <h3 className="text-3xl md:text-5xl font-heading">Beer Name</h3>
            <Separator className="border-1 rounded" />
            <p className="font-heading text-2xl md:text-3xl">
              Beer Type | 3.5% ABV
            </p>
            <Separator className="border-1 rounded" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="background-paper h-full md:h-8/10 my-auto row-start-2 row-end-3 col-start-1 col-end-2 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 z-0"></div>
    </li>
  );
};

export default FeaturedBeerCard;
