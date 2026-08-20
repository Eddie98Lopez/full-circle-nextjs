"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailOptIn() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // native validation already passed at this point
    console.log("Subscribed:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row w-full md:justify-start gap-2"
    >
      <Input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 flex-grow w-full"
      />
      <Button type="submit" className="h-12 md:flex-none">
        Subscribe
      </Button>
      {submitted && <p className="text-sm text-green-600">Thanks!</p>}
    </form>
  );
}
