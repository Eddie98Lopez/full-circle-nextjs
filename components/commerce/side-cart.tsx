import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

function SideCart() {
  return (
    <Sheet>
      <SheetTrigger className="flex flex-col gap-1.5">
        <ShoppingBag />
      </SheetTrigger>

      <SheetContent className="z-5001 bg-transparent data-[side=right]:sm:max-w-none data-[side=right]:w-min grid gap-0 grid-cols-[auto_1fr]">
        <div className="z-1 w-70 col-start-1 delay-200 transition-500 transition-width overflow-hidden h-full bg-neutral-200 p-4 flex flex-col">
          <p className="uppercase font-bold text-foreground/70 tracking-wider text-center">
            You might like
          </p>
        </div>
        <div className="z-2 bg-white shadow-lg flex flex-col col-start-2 data-[side=right]:sm:max-w-3xl group-data-[side=right]:sm:max-w-3xl w-md">
          <SheetHeader>
            <div className="text-xl font-heading">Cart</div>
            <Separator className="mt-2 border" />
          </SheetHeader>
          <div className="px-4 flex-1 overflow-y-scroll">cart items</div>
          <SheetFooter className="mt-auto">
            <Separator className="border mb-2" />
            <div className="flex justify-between text-lg font-bold">
              <p>Estimated Total</p>
              <p>$00</p>
            </div>
            <p className="text-foreground/80">
              Taxes and shipping are calculated at checkout.
            </p>
            <div className="flex flex-col justify-center gap-2 mt-3">
              <Button size={"lg"}>Checkout</Button>
              <Button size={"lg"} variant={"secondary"}>
                View Cart
              </Button>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SideCartRowItem() {
  return <div>SideCart</div>;
}

export default SideCart;
