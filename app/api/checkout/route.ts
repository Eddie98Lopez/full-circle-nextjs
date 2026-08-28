// app/api/checkout/route.ts
import { type CartItem } from "@/components/commerce/cart-provider";
import { dummyProducts } from "@/lib/dummyData";
import Stripe from "stripe";
import { headers } from "next/headers";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY");
const stripe = new Stripe(secretKey);

export async function POST(req: Request) {
  const origin = (await headers()).get("origin");
  const { items } = await req.json();

  // items = [{ id: 'prod_123', quantity: 2 }, ...] — IDs + qty only

  // look up real prices server-side (replace with your DB call)
  const products = dummyProducts;

  const line_items = items.map((item: CartItem) => {
    const product = products.find((p) => p.id === item.product.id);
    if (!product) throw new Error(`Unknown product: ${item.product.id}`);

    return {
      price_data: {
        currency: "usd",
        product_data: { name: product.name },
        unit_amount: product.price * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    ui_mode: "elements", // was "embedded_page"
    mode: "payment",
    line_items,
    shipping_address_collection: { allowed_countries: ["US", "CA"] },
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return Response.json({ clientSecret: session.client_secret });
}
