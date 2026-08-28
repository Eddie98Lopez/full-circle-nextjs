"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  PaymentElement,
  ShippingAddressElement,
  useCheckoutElements,
} from "@stripe/react-stripe-js/checkout";
import { Label } from "../ui/label";

function CheckoutForm() {
  const result = useCheckoutElements();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (result.type !== "success") return;
    setSubmitting(true);
    setError(null);
    const res = await result.checkout.confirm({ email });
    if (res.type === "error") setError(res.error.message);
    setSubmitting(false);
  };

  return (
    <div className="space-y-10 scroll-y-auto min-h-0 grid">
      <div>
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-b-black">
          <div className="text-2xl font-bold text-title">Contact</div>
        </div>
        <Label htmlFor="email" className="mb-2 font-normal">
          Email
        </Label>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="bg-white md:text-base rounded py-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-b-black">
          <div className="text-2xl font-bold text-title">Delivery</div>
        </div>
        <ShippingAddressElement options={{ display: { name: "split" } }} />
      </div>

      <div>
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-b-black">
          <div className="text-2xl font-bold text-title">Payment</div>
        </div>
        <PaymentElement />
      </div>
      <Button onClick={handleSubmit} disabled={submitting} size={"lg"}>
        {submitting ? "Processing…" : "Pay Now"}
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default CheckoutForm;
