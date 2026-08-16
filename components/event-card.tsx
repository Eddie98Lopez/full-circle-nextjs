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
}

const EventCard = ({ image, title, date, location }: EventCardProps) => {
  const formatedDate = new Date(date);
  return (
    <li>
      <Item className="border border-border p-0">
        {/* <div className="aspect-square w-full">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div> */}

        <ItemContent className="flex flex-row md:flex-col gap-0 space-y-0 space-x-0">
          <div className=" min-w-30 max-w-80 md:w-full md:aspect-square md:max-w-none grid place-content-center bg-gray-200">
            <Calendar className=" opacity-20" />
          </div>
          <div className="background-paper text-background md:flex md:flex-col md:place-items-center  m-0 p-8 w-full">
            <ItemTitle className="text-title text-3xl">{title}</ItemTitle>
            <ItemDescription className="text-lg font-bold text-background/70">
              {formatedDate.toLocaleDateString()} | {location}
            </ItemDescription>
            <div className="mt-4 w-full flex flex-col gap-4">
              <Button variant={"link"} size={"sm"}>
                More Info
              </Button>
              <Button size={"lg"}>Buy Tickets</Button>
            </div>
          </div>
        </ItemContent>
      </Item>
    </li>
  );
};

export default EventCard;
