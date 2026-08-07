import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardTitle,
  CardDescription,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
}

const EventCard = ({ image, title, date, location }: EventCardProps) => {
  return (
    <li>
      <Card className="p-0 aspect-1.5/3">
        <div className="aspect-square w-full">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div>
        <CardContent className="background-paper text-background">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {date} | {location}
          </CardDescription>
          <CardAction>
            <Button variant={"link"}>More Info</Button>
            <Button>Buy Tickets</Button>
          </CardAction>
        </CardContent>
      </Card>
    </li>
  );
};

export default EventCard;
