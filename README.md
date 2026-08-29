# [Brewery Name] — Craft Brewery Website (Concept)

A fully custom-branded storefront and marketing site for a craft brewery. The design, branding, and build are all my own — this is a portfolio concept piece where I set out to solve a small business's real goals, not just ship a good-looking page.

**🔗 Live demo:** [http://www.craftbrewerywebsite.com] &nbsp;·&nbsp; **📄 Case study:** [https://www.lopezed.com/projects/48]

> ⚠️ **Concept / portfolio piece.** All content — beers, events, team, blog posts, and products — is hardcoded placeholder data. Checkout runs on Stripe test mode; no real orders or charges happen. There's no real privacy policy behind the email captures.

---

## Overview

The brand is my own elevated interpretation of a real craft brewery — my answer to "what would it look like if this place lived properly on the web?" I used the existing brewery as a jumping-off point for tone, then built the visual identity, the product mockups, and every screen from there.

I approached it with three business goals in priority order, and those goals drove the layout, hierarchy, and interactions across the whole site:

1. **Get people into the brewery** (physical visits)
2. **Capture emails**
3. **Drive online merch sales and conversions**

## Tech stack

- **Next.js** — server-side rendering
- **Tailwind CSS** — styling
- **shadcn/ui** — component primitives
- **motion.dev (Motion)** — entrance animations, stagger reveals, exit animations
- **Stripe Elements** — custom checkout flow

## Features

- **Store, Beers, and Events pages**, plus a blog — all driven by structured placeholder data.
- **Full custom checkout** built on Stripe Elements (not the pre-built embedded form), including a from-scratch cart provider and checkout flow.
- **Add to cart from anywhere** — product cards let you add without visiting the product page.
- **Quick view** for products with variants, so you don't have to leave the grid.
- **Sidecart** with a "You might like" section of product cards to add more before checkout, and a checkout button pinned at the bottom (within thumb's reach on mobile).
- **Conversion + visit + email hooks** placed with intent: a sticky "Visit us — open today, [hours], get directions" banner; a "join the club" email capture for early access to limited releases and tap-room perks; event-calendar subscribe; blog newsletter signup; and a footer subscribe.

## Notable implementation notes

- **Beer card hover state on mobile.** Hover doesn't exist on touch, so at mobile breakpoints the beer card's hover state triggers when the card scrolls into view instead. Same personality, no dead interaction.
- **Motion vs. shadcn.** shadcn/ui ships `transition-all` on a lot of components, which fights Motion's animations. I turn it off where the two collide. Componentized the entrance/stagger patterns so they're reusable.
- **Motion patterns used:** variants, `initial`/`animate`, `AnimatePresence` for exit animations, and staggered reveals.
- **shadcn carousel**, pushed past its defaults.

## Design & branding

I'm a graphic designer as much as a developer, and this project was as much about branding as code — specifically how a physical brand's identity translates to a web platform.

- **Textures with a reason.** The brick background is drawn from a painted brick wall in the tap room; the crumpled-paper texture references the gig posters from the brewery's live music nights. Both lean into an alternative, slightly grungy aesthetic that fits the brand.
- **Product mockups made from scratch.** The product imagery is my own. My favorite is the keychain: a vector silhouette built in Illustrator, brought into Photoshop, and finished with layer effects and adjustment masks until it reads as a real product photo.

## Running locally

```bash
git clone [add-repo-url]
cd [repo-folder]
npm install
npm run dev
```

Add a `.env.local` for Stripe test keys:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
```

> Adjust the commands/env names to match your actual setup.

## A note — and an open invitation

I'm calling this one done **for now** — not because it's perfect, but because I've gotten what I wanted out of it and I want to let it sit for a bit.

That said: if you're a developer, art director, or senior dev poking through this, I'd love to hear how you'd have approached any of it. Tell me what you'd do differently, what you've run into shipping this kind of thing in the field, or just grab a coffee and get nerdy with me about it. Very much open to critique.

📬 [mailto:info@lopezed.com]
