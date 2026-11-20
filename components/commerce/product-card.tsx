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
import { cn } from "@/lib/utils";

type ProductCardSize = "default" | "sm";

const ProductCard = ({
  product,
  size = "default",
}: {
  product: Product;
  size?: ProductCardSize;
}) =>
  size === "sm" ? (
    <ProductCardCompact product={product} />
  ) : (
    <ProductCardDefault product={product} />
  );

export default ProductCard;

/* ---------- shared ---------- */

function ProductCardAction({
  product,
  compact = false,
  className,
}: {
  product: Product;
  compact?: boolean;
  className?: string;
}) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  if (!product.options) {
    return (
      <AddToCartBtn
        disabled={!product.inStock}
        size={compact ? "sm" : "lg"}
        variant={compact ? "link" : "default"}
        className={cn(
          "font-bold uppercase !transition-colors disabled:hidden",
          className,
        )}
        onClick={handleAddToCart}
      >
        {compact ? "+ Add to Cart" : "Add to Cart"}
      </AddToCartBtn>
    );
  }

  return (
    <QuickView product={product}>
      <Button
        size={compact ? "sm" : "lg"}
        variant="secondary"
        className={cn(
          "uppercase font-bold border border-foreground",
          className,
        )}
      >
        {compact ? "View" : "Quick View"}
      </Button>
    </QuickView>
  );
}

/* ---------- default (vertical) ---------- */

function ProductCardDefault({ product }: { product: Product }) {
  return (
    <div className="w-full min-w-0 group">
      <div className="w-full aspect-7/9 bg-neutral-300 grid group-hover:bg-neutral-100 transition-all duration-200 grid-cols-1 grid-rows-1 place-items-center place-content-center overflow-hidden">
        <div className="relative z-1 col-start-1 row-start-1 w-full h-full grid grid-cols-1 grid-rows-1 place-items-center place-content-center overflow-hidden">
          <div className="w-full h-full background-brick absolute z-1 col-start-1 col-end-2 row-end-2 row-start-1 group-hover:opacity-70 opacity-0 transition-opacity duration-300" />
          <Link
            href={`/shop/product/${product.slug}`}
            className="relative w-full h-full block"
          >
            {product.image !== "" ? (
              <Image
                src={product.image}
                alt={product.imageAltText}
                fill
                sizes="(min-width: 1024px) 25vw, 90vw"
                className="object-cover group-hover:scale-107 transition-scale duration-300 col-start-1 col-end-2 row-end-2 row-start-1 z-2"
              />
            ) : (
              <ImageIcon />
            )}
          </Link>
        </div>

        <div className="pointer-events-none flex flex-col justify-between w-full z-3 col-start-1 row-start-1 h-full p-2 md:p-4">
          <div className="flex flex-col gap-1 items-start">
            {product.inStock ? (
              product.badges?.map((badge) => (
                <Badge
                  key={`product-${product.id}-badge-${badge.label}`}
                  className="uppercase"
                  style={{ backgroundColor: badge.color }}
                >
                  {badge.label}
                </Badge>
              ))
            ) : (
              <Badge variant="destructive" className="uppercase">
                Out of Stock
              </Badge>
            )}
          </div>

          <div className="pointer-events-auto w-full flex flex-col lg:translate-y-20 lg:opacity-0 transition-[translate,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ProductCardAction product={product} className="w-full" />
          </div>
        </div>
      </div>

      <div className="text-center mt-2">
        <p className="font-medium text-lg text-foreground/50">{product.name}</p>
        <p className="font-heading text-2xl">${product.price} USD</p>
      </div>
    </div>
  );
}

/* ---------- sm (horizontal row) ---------- */

function ProductCardCompact({ product }: { product: Product }) {
  const href = `/shop/product/${product.slug}`;
  return (
    <div className="flex gap-4 w-full min-w-0 items-center p-2 border">
      <Link
        href={href}
        className="size-25 bg-neutral-200 overflow-hidden relative flex-none flex justify-center items-center"
      >
        {product.image !== "" ? (
          <Image
            src={product.image}
            alt={product.imageAltText}
            fill
            sizes="80px"
            quality={30}
            className="object-cover"
          />
        ) : (
          <ImageIcon />
        )}
      </Link>

      <div className="flex-1 min-w-0 flex flex-col items-start gap-0">
        <Link href={href} className="w-full">
          <p className="font-medium text-sm truncate">{product.name}</p>
        </Link>
        <p className="font-heading text-lg">${product.price}</p>
        {product.inStock ? (
          <ProductCardAction product={product} compact />
        ) : (
          <p className="text-xs uppercase font-bold text-destructive">
            Out of stock
          </p>
        )}
      </div>
    </div>
  );
}
