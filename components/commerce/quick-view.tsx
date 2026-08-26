import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import type { Product } from "@/lib/dummyData";
import { ProductHeroDetails } from "./product-hero";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const QuickView = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="z-6000 bg-black/50" />
        <DialogContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="sm:max-w-5xl p-4 md:p-8 z-60000 overflow-y-auto "
        >
          <DialogTitle className="sr-only">Product Quick View</DialogTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="aspect-square w-full h-full bg-neutral-300 relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.imageAltText}
                objectFit="contain"
                fill
                className="aspect-4/5 "
              />
            </div>
            <div className="flex flex-col ">
              <ProductHeroDetails product={product} />
              <Link
                href={`/shop/product/${product.slug}`}
                className="w-full grid"
              >
                {" "}
                <Button variant={"link"} size={"sm"} className="mt-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default QuickView;
