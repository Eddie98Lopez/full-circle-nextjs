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
      <SheetContent className="z-5001 data-[side=right]:sm:max-w-md">
        <SheetHeader>
          <div className="text-xl font-heading">Cart</div>
          <Separator className="mt-2 border" />
        </SheetHeader>
        <div className="px-4">cart items</div>
        <SheetFooter>
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
      </SheetContent>
    </Sheet>
  );
}

export function SideCartRowItem() {
  return <div>SideCart</div>;
}

export default SideCart;
