"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  PaymentElement,
  ShippingAddressElement,
  useCheckoutElements,
} from "@stripe/react-stripe-js/checkout";

function CheckoutForm() {
  const result = useCheckoutElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    console.log("clicked");
    if (result.type !== "success" || !result.checkout.canConfirm) return;
    setSubmitting(true);
    setError(null);
    const res = await result.checkout.confirm();
    if (res.type === "error") setError(res.error.message);
    setSubmitting(false);
  };

  return (
    <div className="space-y-4 scroll-y-auto min-h-0 grid">
      <ShippingAddressElement />
      <PaymentElement />
      <Button onClick={handleSubmit} disabled={submitting} size={"lg"}>
        {submitting ? "Processing…" : "Pay Now"}
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default CheckoutForm;
