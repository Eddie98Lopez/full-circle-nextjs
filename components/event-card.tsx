import React from "react";
import { Item, ItemContent, ItemTitle, ItemDescription } from "./ui/item";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({
  image,
  title,
  date,
  location,
  description,
}: EventCardProps) => {
  const formatedDate = new Date(date);
  return (
    <li>
      <Item className="border border-foreground/10 p-0">
        {/* <div className="aspect-square w-full">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div> */}

        <ItemContent className="flex flex-col gap-0 space-y-0 space-x-0">
          <div className=" relative w-full aspect-5/3 max-w-none grid place-content-center bg-neutral-100">
            <Calendar className=" opacity-20" />
            <div className="background-paper text-white font-heading flex flex-col aspect-square  w-20 justify-center items-center text-center p-1 absolute right-6 -bottom-10">
              <div className="text-4xl">
                {String(formatedDate.getDate()).padStart(2, "0")}
              </div>
              <div className="text-2xl">
                {formatedDate.toLocaleDateString("en-US", { month: "short" })}
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-col md:place-items-start  m-0 px-4 md:p-8 pt-12 pb-4 w-full">
            <ItemTitle className="text-title text-3xl">{title}</ItemTitle>
            <ItemDescription>
              <p className="text-lg font-medium mb-1">
                {formatedDate.toLocaleTimeString("en-us", {
                  timeStyle: "short",
                })}{" "}
                | {location}
              </p>
              <p>{description}</p>
            </ItemDescription>
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
