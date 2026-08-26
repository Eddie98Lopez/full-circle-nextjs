"use client";
import React from "react";
import type { Product } from "@/lib/dummyData";
import { ImageIcon } from "lucide-react";
import { useCart } from "./cart-provider";
import { Badge } from "../ui/badge";
import AddToCartBtn from "../ui/add-to-cart-btn";
import Image from "next/image";
import { Button } from "../ui/button";
import QuickView from "./quick-view";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quickview, setQuickview] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  return (
    <div className="w-full group">
      <div className="w-full aspect-7/9 bg-neutral-300 grid group-hover:bg-neutral-100 transition-all duration-200 grid-cols-1 grid-rows-1 place-items-center place-content-center overflow-hidden">
        <div className="relative z-1 col-start-1 row-start-1 w-full h-full grid grid-cols-1 grid-rows-1 place-items-center place-content-center overflow-hidden">
          <div className="w-full h-full background-brick absolute z-1 col-start-1 col-end-2 row-end-2 row-start-1 group-hover:opacity-70 opacity-0 transition-opacity duration-300"></div>
          <Link
            href={`/shop/product/${product.slug}`}
            className="relative w-full h-full block"
          >
            {product.image !== "" ? (
              <Image
                src={product.image}
                alt={product.imageAltText}
                fill
                sizes=""
                className="object-cover group-hover:scale-107 transition-scale duration-300 col-start-1 col-end-2 row-end-2 row-start-1 z-2"
              />
            ) : (
              <ImageIcon />
            )}
          </Link>
        </div>
        <div className="pointer-events-none flex flex-col justify-between w-full z-3 col-start-1 row-start-1 h-full p-2 md:p-4">
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
          <div className="pointer-events-auto w-full flex flex-col lg:translate-y-20 lg:opacity-0 transition-[translate,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {!product.options ? (
              <AddToCartBtn
                disabled={!product.inStock}
                size="lg"
                className="text-white font-bold uppercase !transition-colors disabled:hidden w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </AddToCartBtn>
            ) : (
              <QuickView product={product}>
                <Button
                  size={"lg"}
                  variant={"secondary"}
                  className="uppercase font-bold border border-foreground"
                >
                  Quick View
                </Button>
              </QuickView>
            )}
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
