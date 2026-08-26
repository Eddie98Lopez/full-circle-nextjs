"use client";
import React, { useState } from "react";
import type { Product } from "@/lib/dummyData";
import AddToCartBtn from "../ui/add-to-cart-btn";
import QuantityCounter from "./qty-counter";
import { useCart } from "./cart-provider";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

export function ProductHeroDetails({ product }: { product: Product }) {
  const [counter, setCounter] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const { addToCart } = useCart();

  // Optional: require every option group to be chosen before adding.
  const allOptionsSelected =
    !product.options ||
    product.options.every((opt) => selectedOptions[opt.name]);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, counter, selectedOptions);
  };
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        {!product.inStock && (
          <Badge variant={"destructive"} className="uppercase">
            Out of Stock
          </Badge>
        )}
        <div>
          <h1 className="text-4xl text-title tracking-wide">{product.name}</h1>
          <p className="text-xs font-medium text-muted-foreground">
            {product.sku}
          </p>
        </div>
        <p className="text-xl font-bold">${product.price} USD</p>
        <p className="text-xl text-muted-foreground">
          {product.shortDescription}
        </p>
      </div>
      <div className="space-y-4">
        {product.options?.map((option) => (
          <div
            key={`${option.name}-option-container`}
            className="flex gap-2 items-center"
          >
            <span className="capitalize font-medium">{option.name}:</span>
            {option.values.map((val) => {
              const isSelected = selectedOptions[option.name] === val;
              return (
                <Button
                  key={`option-value-${val}`}
                  variant={isSelected ? "default" : "secondary"}
                  onClick={() =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [option.name]: val,
                    }))
                  }
                >
                  {val}
                </Button>
              );
            })}
          </div>
        ))}
      </div>
      <QuantityCounter
        min={1}
        value={counter}
        onDecrease={() => setCounter(counter - 1)}
        onIncrease={() => setCounter(counter + 1)}
      />

      <div className="w-full h-full flex flex-col">
        <AddToCartBtn
          onClick={handleAddToCart}
          disabled={!product.inStock || !allOptionsSelected}
          size={"lg"}
        >
          Add to Cart
        </AddToCartBtn>
      </div>
    </div>
  );
}

// TODO : Create a product images carousel component. Not necessary right now as I only have one image per dummy product.
