import React from "react";
import { Item, ItemContent, ItemTitle } from "./ui/item";
import Link from "next/link";

export interface ImageLink {
  image: string;
  label: string;
  href?: string;
}

const ImageLinkCard = ({ image, label, href }: ImageLink) => {
  return (
    <Link href={href ?? "/"}>
      <Item className="group grid w-full h-32 md:h-full md:aspect-2/1 rounded-none transition-all p-0 border-none outline-none overflow-hidden">
        {/* overlay — sits in the single grid cell */}
        <div
          className="w-full h-full col-start-1 row-start-1 group-hover:scale-105 z-0 transition-all duration-800"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-start-1 row-start-1 w-full h-full bg-black/60 transition-colors z-1 " />
        <div className="col-start-1 row-start-1 w-full h-full transition-colors group-hover:bg-primary/50 z-2" />
        {/* content — same cell, so it stacks on top of the overlay */}
        <ItemContent className="col-start-1 row-start-1 flex justify-center items-center z-3">
          <ItemTitle className="text-4xl text-white font-bold font-heading group-hover:tracking-widest duration-600 transition-all">
            {label}
          </ItemTitle>
        </ItemContent>
      </Item>
    </Link>
  );
};

export default ImageLinkCard;
