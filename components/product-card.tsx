"use client";
import React from "react";
import type { Product } from "@/lib/dummyData";
import { ImageIcon } from "lucide-react";
import { useCart } from "./commerce/cart-provider";
import { Badge } from "./ui/badge";
import AddToCartBtn from "./ui/add-to-cart-btn";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <div className="w-full group">
      <div className="w-full aspect-7/9 bg-neutral-300 grid group-hover:bg-white transition-all duration-200 grid-cols-1 grid-rows-1 place-items-center place-content-center overflow-hidden">
        <div className="relative z-1 col-start-1 row-start-1 w-full h-full flex place-items-center place-content-center overflow-hidden">
          {product.image !== "" ? (
            <Image
              src={product.image}
              alt={product.imageAltText}
              fill
              sizes=""
              className="object-cover group-hover:scale-105 transition-scale duration-300"
            />
          ) : (
            <ImageIcon />
          )}
        </div>
        <div className="flex flex-col justify-between w-full z-2 col-start-1 row-start-1 h-full p-2 md:p-4">
          <div className="flex flex-col gap-1">
            {product.inStock ? (
              product.badges?.map((badge) => (
                <Badge
                  key={`product-${product.id}-badge-${badge.label}`}
                  variant={"default"}
                  className={`uppercase`}
                  style={{ backgroundColor: badge.color }}
                >
                  {badge.label}
                </Badge>
              ))
            ) : (
              <Badge variant={"destructive"} className="uppercase">
                Out of Stock
              </Badge>
            )}
          </div>
          <div className="w-full flex flex-col lg:translate-y-20 lg:opacity-0 transition-[translate,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <AddToCartBtn
              disabled={!product.inStock}
              size="lg"
              className="text-white font-bold uppercase !transition-colors disabled:hidden w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </AddToCartBtn>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="font-medium text-lg text-foreground/50">{product.name}</p>
        <p className="font-heading text-2xl">${product.price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;
