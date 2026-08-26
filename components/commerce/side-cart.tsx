"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { XCircle } from "lucide-react";
import { useCart } from "./cart-provider";
import { motion, AnimatePresence } from "motion/react";
import { ImageIcon } from "lucide-react";
import type { CartItem } from "./cart-provider";
import Image from "next/image";
import { StaggerReveal } from "../ui/stagger-wrapper";
import { dummyProducts } from "@/lib/dummyData";
import ProductCard from "./product-card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import QuantityCounter from "./qty-counter";

function SideCart() {
  const { cartItems, cartTotal, itemCount } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex gap-1.5 items-center" id="header-cart-btn">
        {cartItems.length > 0 && (
          <motion.div
            key={itemCount}
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 12 }}
            className="size-5 rounded-full bg-primary flex justify-center items-center text-sm font-bold"
          >
            <p className="[text-box-trim:both] text-center text-white">
              {itemCount}
            </p>
          </motion.div>
        )}
        <ShoppingBag />
      </SheetTrigger>

      <SheetContent className="z-5001 bg-transparent data-[side=right]:w-full data-[side=right]:sm:max-w-none data-[side=right]:md:max-w-min grid gap-0 grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(450px,_1fr)] ">
        <SheetClose className="z-5002 group fixed top-2 right-2 size-10  flex justify-center items-center">
          <XCircle className="opacity-25 group-hover:opacity-50" />
        </SheetClose>
        <AnimatePresence>
          {cartItems.length !== 0 && (
            <motion.div
              key="recommendations"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1, transitionDelay: 0.2 }}
              exit={{ width: 0, opacity: 0, transitionDelay: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.15,
              }}
              className="z-1 hidden md:flex flex-col col-start-1 overflow-hidden h-full bg-neutral-200"
            >
              <div className="w-70 p-4 flex flex-col flex-1 min-h-0 gap-4">
                <p className="uppercase font-bold text-foreground/70 tracking-wider text-center">
                  You might like
                </p>
                <StaggerReveal
                  as="ul"
                  delay={0.25}
                  className="flex-1 min-h-0 overflow-y-auto gap-4 flex flex-col"
                >
                  {dummyProducts.map((product) => (
                    <li key={`product-card-${product.id}`}>
                      <ProductCard product={product} />
                    </li>
                  ))}
                </StaggerReveal>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="z-2 bg-white shadow-lg flex flex-col col-start-2 ">
          <SheetHeader className="mb-0 pb-0">
            <div className="text-xl font-heading">
              Cart {`(${cartItems.reduce((a, b) => a + b.quantity, 0)})`}
            </div>
            <Separator className="mt-2 border" />
          </SheetHeader>
          {cartItems.length > 0 ? (
            <>
              <div className="px-4 flex-1 overflow-y-scroll">
                <ul>
                  {cartItems.map((item, i) => (
                    <li key={`side-cart-item-${item.product.id}-${i}`}>
                      <SideCartRowItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>
              <SheetFooter className="mt-auto">
                <Separator className="border mb-2" />
                <div className="flex justify-between text-lg font-bold">
                  <p>Estimated Total</p>
                  <p>${cartTotal}</p>
                </div>
                <p className="text-foreground/80">
                  Taxes and shipping are calculated at checkout.
                </p>
                <div className="flex flex-col justify-center gap-2 mt-3">
                  <Link href={"/shop/checkout"} className="grid">
                    <Button size={"lg"} id="side-cart-checkout-btn">
                      Checkout
                    </Button>
                  </Link>
                  <Link href={"/shop/cart"} className="grid">
                    <Button size={"lg"} variant={"secondary"}>
                      View Cart
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          ) : (
            <div className="w-full text-center font-bold text-xl my-auto space-y-3">
              <ShoppingBag className="size-12 mx-auto" />
              <p>Your cart is empty</p>
              <SheetClose asChild>
                <Button variant={"secondary"} size={"sm"} className="uppercase">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SideCartRowItem({ item }: { item: CartItem }) {
  const { updateQuantity } = useCart();
  return (
    <div className="flex gap-2 border-b py-4">
      <div className="size-20 bg-neutral-200 overflow-hidden relative flex-none flex justify-center items-center">
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
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex-1">
          <p className="font-medium">{item.product.name}</p>
          <p>${item.product.price}</p>
          <div className="text-muted-foreground">
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
          <QuantityCounter
            value={item.quantity}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default SideCart;
