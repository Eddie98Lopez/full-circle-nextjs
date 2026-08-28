import React from "react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { CartItem } from "./cart-provider";

function CartItemRow({ item }: { item: CartItem }) {
  return (
    <div className="flex gap-4 py-2">
      <div className="size-16 bg-neutral-200 rounded relative flex-none flex justify-center items-center">
        {item.product.image !== "" ? (
          <Image
            src={item.product.image}
            alt={item.product.imageAltText}
            fill
            quality={30}
            className="object-cover bg-transparent"
          />
        ) : (
          <ImageIcon />
        )}

        <div className="size-5 rounded-full bg-primary flex justify-center items-center text-sm font-bold -top-2 -right-2 absolute">
          <p className="[text-box-trim:both] text-center text-white">
            {item.quantity}
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex-1">
          <p className="font-medium">{item.product.name}</p>
          <div className="text-sm">
            {item.product.options?.map((option, i) => (
              <p key={`cart-item-option-${option.name}-${i}`}>
                <span className="capitalize">{option.name}: </span>
                {item.selectedOptions?.[option.name]}
              </p>
            ))}
          </div>
        </div>

        <div className="ml-auto space-y-2">
          <p className="text-xl font-heading text-right">
            ${item.product.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemRow;
