"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useCart } from "@/components/commerce/cart-provider";
import { SideCartRowItem } from "@/components/commerce/side-cart";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const router = useRouter();
  console.log(cartItems);
  return (
    <div>
      <div className="grid grid-cols-[1fr_1.5fr] bg-neutral-600 mx-auto min-h-screen w-full relative ">
        <div className="flex relative justify-end background-brick text-white border-r border-r-black p-8">
          <Button variant={"ghost"} size={"xs"} onClick={() => router.back()}>
            <ArrowLeftIcon /> Back to site
          </Button>
          <div className="min-w-lg space-y-8 p-4 py-6 md:p-8 ">
            <div>
              <ul className="flex flex-col">
                {cartItems.map((item) => (
                  <SideCartRowItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
            <div>totals</div>
          </div>
        </div>

        <div className=" flex justify-start bg-neutral-200">
          <div className="w-full  space-y-8 p-4 py-6 md:p-8 lg:p-16">
            <div>forms</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
