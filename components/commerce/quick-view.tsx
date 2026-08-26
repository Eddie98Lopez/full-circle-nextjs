import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import type { Product } from "@/lib/dummyData";
import { ProductHeroDetails } from "./product-hero";
import Image from "next/image";
import { Button } from "../ui/button";

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
      <DialogContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="sm:max-w-5xl p-8 z-60000"
      >
        <DialogTitle className="sr-only">Product Quick View</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square w-full h-full bg-neutral-300 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAltText}
              objectFit="contain"
              fill
              className="aspect-4/5 "
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <ProductHeroDetails product={product} />
            <Button variant={"link"} size={"sm"} className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickView;
