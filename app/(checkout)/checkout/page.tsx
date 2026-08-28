"use client";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useCart } from "@/components/commerce/cart-provider";
import { useRouter } from "next/navigation";
import CartItemRow from "@/components/commerce/cart-item";
import { Input } from "@/components/ui/input";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import CheckoutForm from "@/components/commerce/checkout-form";
import { Separator } from "@/components/ui/separator";
import { StaggerReveal } from "@/components/ui/stagger-wrapper";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
if (!stripeKey) throw new Error("Missing NEXT_PUBLIC_STRIPE_KEY");
const stripePromise = loadStripe(stripeKey);

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();
  const router = useRouter();
  const clientSecret = useMemo(
    () =>
      fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems,
        }),
      })
        .then((r) => r.json())
        .then((d) => d.clientSecret),
    [cartItems],
  );
  return (
    <div>
      <div className="grid relative grid-cols-1 lg:grid-cols-[1fr_1.5fr] bg-neutral-600 mx-auto min-h-screen w-full">
        <div className="flex flex-col relative lg:block w-full lg:justify-end background-brick text-white border-r border-r-black p-4 md:p-8 lg:p-16 ">
          <Button variant={"ghost"} size={"xs"} onClick={() => router.back()}>
            <ArrowLeftIcon /> Back to site
          </Button>
          <div className="w-full lg:w-md h-min lg:ml-auto lg:sticky lg:top-16 space-y-4">
            <div>
              <h2 className="text-xl uppercase text-title mb-4">
                Cart Summary
              </h2>
              <StaggerReveal className="flex flex-col" as={"ul"}>
                {cartItems.map((item) => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </StaggerReveal>
            </div>
            {/* <Separator /> */}
            <div className="flex gap-3 items-stretch">
              <Input placeholder="Discount Code" />
              <Button className="h-full self-stretch">Apply</Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Subtotal</span>
                <span>{cartTotal}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Shipping</span>
                <span>{cartTotal}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Tax</span>
                <span>{cartTotal}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-2xl font-bold uppercase">
              <span>total</span>
              <span>{cartTotal}</span>
            </div>
          </div>
        </div>

        <div className=" flex justify-start bg-neutral-200 background-logo">
          <div className="w-full max-w-3xl flex flex-col space-y-8 p-4 py-6 md:p-8 lg:p-16">
            {" "}
            <CheckoutElementsProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <CheckoutForm />
            </CheckoutElementsProvider>
            <div className=" mt-auto ">
              <Separator className="bg-black/50 mb-2" />
              <div className="flex justify-center lg:justify-between font-regular flex-wrap">
                <Button variant={"link"} className="text-sm text-foreground">
                  Refund Policy
                </Button>
                <Button variant={"link"} className="text-sm text-foreground">
                  Shipping
                </Button>
                <Button variant={"link"} className="text-sm text-foreground">
                  Privacy Policy
                </Button>
                <Button variant={"link"} className="text-sm text-foreground">
                  Terms of Service
                </Button>
                <Button variant={"link"} className="text-sm text-foreground">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
