import React from "react";
import { Item, ItemContent, ItemTitle, ItemDescription } from "./ui/item";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import type { BreweryEvent } from "@/lib/dummyData";

const EventCard = ({ event }: { event: BreweryEvent }) => {
  const { startDate, image, title, location, shortDescription, imageAltText } =
    event;
  const formatedDate = new Date(startDate);
  return (
    <li>
      <Item className=" group border border-foreground/10 p-0">
        {/* <div className="aspect-square w-full">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div> */}

        <ItemContent className="flex flex-col gap-0 space-y-0 space-x-0">
          <div className=" relative w-full aspect-7/3 max-w-none grid place-content-center bg-neutral-400 ">
            {image == "" ? (
              <Calendar />
            ) : (
              <div className="aspect-5/3 col-start-1 row-start-1 flex w-full h-full overflow-hidden ">
                {" "}
                <Image
                  src={image}
                  alt={imageAltText}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="background-paper border text-white font-heading flex flex-col aspect-square  w-20 justify-center items-center text-center p-1 absolute right-6 -bottom-10">
              <div className="text-4xl">
                {String(formatedDate.getDate()).padStart(2, "0")}
              </div>
              <div className="text-2xl">
                {formatedDate.toLocaleDateString("en-US", { month: "short" })}
              </div>
            </div>
          </div>
          <div className=" bg-gray-100 flex flex-col place-items-start m-0 px-4 md:p-8 pt-12 pb-4 md:pb-4 w-full">
            <ItemTitle className="text-title text-3xl">{title}</ItemTitle>
            <ItemDescription className="text-lg font-medium mb-1">
              {formatedDate.toLocaleTimeString("en-us", {
                timeStyle: "short",
              })}{" "}
              | {location}
            </ItemDescription>
            <ItemDescription>{shortDescription}</ItemDescription>
            <div className="mt-4 w-full flex flex-col gap-4">
              <Button size={"lg"} className="uppercase font-bold text-white">
                Buy Tickets
              </Button>
              <Button variant={"link"} size={"sm"} className="uppercase">
                More Info
              </Button>
            </div>
          </div>
        </ItemContent>
      </Item>
    </li>
  );
};

export default EventCard;
