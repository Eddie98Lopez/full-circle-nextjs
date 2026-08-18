"use client";
import React from "react";
import type { Product } from "@/lib/dummyData";
import { ImageIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "./commerce/cart-provider";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <div className="w-full group">
      <div className="w-full aspect-7/9 bg-neutral-300 grid group-hover:bg-white transition-all grid-cols-1 grid-rows-1 place-items-center place-content-center overflow-hidden">
        <div className="z-1 col-start-1 row-start-1 w-full h-full flex place-items-center place-content-center ">
          <ImageIcon />
        </div>
        <div className="flex flex-col justify-between w-full z-2 col-start-1 row-start-1 h-full p-4">
          <div>badges</div>
          <Button
            size={"lg"}
            className=" lg:block lg:translate-y-15 text-white font-bold uppercase lg:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="font-bold text-lg text-foreground/50">{product.name}</p>
        <p className="font-heading text-xl">${product.price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;
