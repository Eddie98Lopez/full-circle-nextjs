import { redirect } from "next/navigation";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import stripe from "@/lib/stripe";

export default async function Return({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const { status, customer_details } = await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: ["line_items", "payment_intent"],
    },
  );

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section
        id="success"
        className=" background-brick grid place-content-center place-items-center h-full min-h-screen"
      >
        <div className="flex flex-col gap-8 p-4 py-6 md:p-8 lg:p-16 ">
          <div className="aspect-square w-45 mx-auto">
            <Logo />
          </div>
          <h1 className="text-center text-title tracking-wider text-5xl">
            Order Confirmed
          </h1>
          <p className="lg:w-lg text-center text-2xl">
            We appreciate your business! A confirmation email will be sent to{" "}
            {customer_details?.email}.
          </p>
          <p className="text-center font-medium text-base">
            If you have any questions, please email:
            <Button variant={"link"} className="text-base text-foreground">
              orders@example.com
            </Button>
          </p>
          <Link href={"/"} className="mx-auto">
            <Button size={"lg"}> Go Back Home</Button>
          </Link>
        </div>
      </section>
    );
  }
}
