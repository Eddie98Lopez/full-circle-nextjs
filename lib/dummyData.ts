// ============================================================================
// Collections — TypeScript models + dummy data
// ============================================================================

/** ISO 8601 timestamp, e.g. "2026-04-18T21:00:00Z". */
export type ISODateString = string;

// ----------------------------------------------------------------------------
// Team
// ----------------------------------------------------------------------------

export interface TeamMember {
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: string;
  id: string;
}

export const dummyTeam: TeamMember[] = [
  {
    firstName: "Eddie",
    lastName: "Lopez",
    jobTitle: "Web Developer",
    image: "/team/eddie-lopez.png",
    id: "t6",
  },
  {
    firstName: "Mark",
    lastName: "Evans",
    jobTitle: "Brewmaster",
    image: "/team/mark-evans.png",
    id: "t2",
  },
  {
    firstName: "Robert",
    lastName: "Garcia",
    jobTitle: "Taproom Manager",
    image: "/team/robert-garcia.jpg",
    id: "t1",
  },

  {
    firstName: "Alice",
    lastName: "Johnson",
    jobTitle: "Quality Control Specialist",
    image: "/team/alice-johnson.png",
    id: "t3",
  },
  {
    firstName: "Sophie",
    lastName: "Kim",
    jobTitle: "Packaging Manager",
    image: "/team/sophie-kim.png",
    id: "t4",
  },
  {
    firstName: "Liam",
    lastName: "Reynolds",
    jobTitle: "Sales Representative",
    image: "/team/liam-reynolds.png",
    id: "t5",
  },
];

// ----------------------------------------------------------------------------
// My Beers
// ----------------------------------------------------------------------------

export type BeerAvailability = "year_round" | "limited" | "seasonal";
export type BeerType = "IPA" | "Porter" | "Lager" | "Stout" | "Sour";

export interface Beer {
  title: string;
  shortDescription: string;
  /** Rich-text HTML as exported from Wix. */
  longDescription: string;
  image: string;
  imageAltText: string;
  color: string;
  artwork: string;
  availability: BeerAvailability;
  alcByVolPercentage: number;
  externalId: string;
  sku: string;
  onDraft: boolean;
  beerType: BeerType;
  isFeaturedBeer: boolean;
  /** Wix reference field — single item slug/path. */
  myBeersItem: string;
  /** Wix reference field — list path. */
  myBeersList: string;
  id: string;
  /** Related beer IDs. */
  relatedBeers: string[];
  /** Reverse-reference beer IDs. */
  myBeersRelatedBeers: string[];
  publishDate: ISODateString;
  unpublishDate: ISODateString | null;
  slug: string;
}

export const dummyMyBeers: Beer[] = [
  {
    title: "Hop Static",
    slug: "hop-static",
    shortDescription: "Bright, aromatic IPA with a restrained bitterness.",
    longDescription:
      '<p class="font_7">Hop Static leans into citrus and pine without overpowering the palate. A balanced malt base keeps the hops in check. It finishes dry and clean, making it surprisingly drinkable for the style.</p>',
    image: "/images/beer-can.png",
    imageAltText: "Hop Static",
    color: "",
    artwork: "",
    availability: "year_round",
    alcByVolPercentage: 6.5,
    externalId: "",
    sku: "",
    onDraft: true,
    beerType: "IPA",
    isFeaturedBeer: true,
    myBeersItem: "/my-beers/hop-static",
    myBeersList: "/my-beers/",
    id: "b1",
    relatedBeers: ["b5", "b2"],
    myBeersRelatedBeers: ["b2", "b5", "b4"],
    publishDate: "2026-01-07T03:54:46Z",
    unpublishDate: null,
  },
  {
    title: "Midnight Run",
    slug: "midnight-run",
    shortDescription: "Bold imperial porter brewed for late nights.",
    longDescription:
      '<p class="font_7">Midnight Run is rich and layered with notes of cocoa and toasted malt. A warming alcohol presence adds depth without burning. This beer is intentionally bold and meant to be savored.</p>',
    image: "/images/beer-can.png",
    imageAltText: "",
    color: "",
    artwork: "",
    availability: "limited",
    alcByVolPercentage: 8.2,
    externalId: "",
    sku: "",
    onDraft: false,
    beerType: "Porter",
    isFeaturedBeer: false,
    myBeersItem: "/my-beers/midnight-run",
    myBeersList: "/my-beers/",
    id: "b2",
    relatedBeers: ["b4", "b1", "b2"],
    myBeersRelatedBeers: ["b2", "b1"],
    publishDate: "2026-01-07T03:54:46Z",
    unpublishDate: null,
  },
  {
    title: "Valley Gold",
    slug: "valley-gold",
    shortDescription: "A crisp, easy-drinking lager built for long afternoons.",
    longDescription:
      '<p class="font_7">Valley Gold is clean and straightforward with a soft malt backbone. Light bitterness keeps it refreshing without feeling thin. This is the kind of beer you can drink more than one of without thinking about it.</p>',
    image: "/images/beer-can.png",
    imageAltText: "Valley Gold",
    color: "",
    artwork: "",
    availability: "year_round",
    alcByVolPercentage: 4.8,
    externalId: "",
    sku: "",
    onDraft: true,
    beerType: "Lager",
    isFeaturedBeer: true,
    myBeersItem: "/my-beers/valley-gold",
    myBeersList: "/my-beers/",
    id: "b3",
    relatedBeers: ["b3", "b5"],
    myBeersRelatedBeers: ["b5", "b4", "b3"],
    publishDate: "2025-12-28T20:23:17Z",
    unpublishDate: null,
  },
  {
    title: "Back Alley Stout",
    slug: "black-alley-stout",
    shortDescription: "Smooth stout with roasted depth and subtle sweetness.",
    longDescription:
      '<p class="font_7">Back Alley Stout opens with notes of coffee and dark chocolate. The body is full but not heavy, with a soft, rounded finish. It\u2019s built for slow sipping but still approachable.</p>',
    image: "/images/beer-can.png",
    imageAltText: "Black Alley Stout",
    color: "",
    artwork: "",
    availability: "seasonal",
    alcByVolPercentage: 5.9,
    externalId: "",
    sku: "",
    onDraft: false,
    beerType: "Stout",
    isFeaturedBeer: true,
    myBeersItem: "/my-beers/back-alley-stout",
    myBeersList: "/my-beers/",
    id: "b4",
    relatedBeers: ["b3", "b1"],
    myBeersRelatedBeers: ["b2"],
    publishDate: "2026-01-07T03:54:46Z",
    unpublishDate: null,
  },
  {
    title: "Citrus Press",
    slug: "citrus-press",
    shortDescription: "Tart, refreshing sour with real citrus character.",
    longDescription:
      '<p class="font_7">Citrus Press delivers bright acidity without being harsh. Fresh citrus notes lead, followed by a clean, dry finish. It\u2019s light, refreshing, and designed for warm weather.</p>',
    image: "/images/beer-can.png",
    imageAltText: "Citrus Press",
    color: "",
    artwork: "",
    availability: "seasonal",
    alcByVolPercentage: 4.5,
    externalId: "",
    sku: "",
    onDraft: true,
    beerType: "Sour",
    isFeaturedBeer: false,
    myBeersItem: "/my-beers/citrus-press",
    myBeersList: "/my-beers/",
    id: "b5",
    relatedBeers: ["b1", "b3"],
    myBeersRelatedBeers: ["b1", "b3"],
    publishDate: "2026-01-07T03:54:46Z",
    unpublishDate: null,
  },
];

// ----------------------------------------------------------------------------
// Events (dummy — no CSV source)
// ----------------------------------------------------------------------------

export interface BreweryEvent {
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAltText: string;
  location: string;
  startDate: ISODateString;
  endDate: ISODateString;
  ticketPrice: number;
  ticketUrl: string;
  isFeaturedEvent: boolean;
  slug: string;
  id: string;
}

export const dummyEvents: BreweryEvent[] = [
  {
    title: "Spring Tap Takeover",
    shortDescription: "A full lineup of seasonal pours and live music.",
    longDescription:
      '<p class="font_7">Join us as we tap our spring seasonals for the first time. Local food trucks, a live band, and limited-run pours all afternoon.</p>',
    image: "/images/tap.jpg",
    imageAltText: "Spring Tap Takeover",
    location: "Main Taproom",
    startDate: "2026-04-18T21:00:00Z",
    endDate: "2026-04-19T02:00:00Z",
    ticketPrice: 0,
    ticketUrl: "/events/spring-tap-takeover",
    isFeaturedEvent: true,
    slug: "/events/spring-tap-takeover",
    id: "e1",
  },
  {
    title: "Brewmaster's Dinner",
    shortDescription: "A five-course meal paired with our flagship beers.",
    longDescription:
      '<p class="font_7">An intimate evening pairing each course with a hand-selected beer, hosted by our brewmaster. Seating is limited.</p>',
    image: "/images/dinner.jpg",
    imageAltText: "Brewmaster's Dinner",
    location: "Barrel Room",
    startDate: "2026-05-09T01:30:00Z",
    endDate: "2026-05-09T04:00:00Z",
    ticketPrice: 85,
    ticketUrl: "/events/brewmasters-dinner",
    isFeaturedEvent: true,
    slug: "/events/brewmasters-dinner",
    id: "e2",
  },
  {
    title: "Summer Sour Fest",
    shortDescription: "Celebrating our tart and refreshing sour releases.",
    longDescription:
      '<p class="font_7">A day dedicated to sours, featuring Citrus Press and three brand-new fruited releases. Outdoor patio, lawn games, and cornhole.</p>',
    image: "/images/fest.jpg",
    imageAltText: "Summer Sour Fest",
    location: "Beer Garden",
    startDate: "2026-06-20T19:00:00Z",
    endDate: "2026-06-21T01:00:00Z",
    ticketPrice: 15,
    ticketUrl: "/events/summer-sour-fest",
    isFeaturedEvent: false,
    slug: "/events/summer-sour-fest",
    id: "e3",
  },
];

// ----------------------------------------------------------------------------
// Products (dummy — no CSV source)
// ----------------------------------------------------------------------------

export interface ProductBadge {
  label: string;
  color?: string;
}
export interface Product {
  name: string;
  productType: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAltText: string;
  price: number;
  sku: string;
  inStock: boolean;
  isFeaturedProduct: boolean;
  slug: string;
  id: string;
  badges?: ProductBadge[];
}

export const dummyProducts: Product[] = [
  {
    name: "Logo Can Coozie",
    productType: "coozie",
    shortDescription: "Neoprene coozie that keeps your can cold.",
    longDescription:
      '<p class="font_7">A snug neoprene coozie printed with our logo. Fits standard 12oz cans and folds flat when you\u2019re done.</p>',
    image: "",
    imageAltText: "Logo Can Coozie",
    price: 6,
    sku: "MERCH-COOZIE-001",
    inStock: true,
    isFeaturedProduct: false,
    slug: "/shop/logo-can-coozie",
    id: "p1",
    badges: [{ label: "new", color: "primary" }],
  },
  {
    name: "Cork-Back Coaster",
    productType: "coaster",
    shortDescription: "Absorbent cork-back coaster with our crest.",
    longDescription:
      '<p class="font_7">A durable cork-back coaster that protects your table and soaks up condensation. Sold individually.</p>',
    image: "/images/coaster.png",
    imageAltText: "Cork-Back Coaster",
    price: 4,
    sku: "MERCH-COASTER-001",
    inStock: true,
    isFeaturedProduct: false,
    slug: "/shop/cork-back-coaster",
    id: "p2",
    badges: [{ label: "Sale", color: `red` }, { label: "Limited time" }],
  },
  {
    name: "Insulated Tumbler",
    productType: "tumbler",
    shortDescription: "20oz stainless tumbler, double-walled.",
    longDescription:
      '<p class="font_7">A double-walled stainless steel tumbler that keeps drinks cold for hours. Laser-etched logo and a spill-resistant lid.</p>',
    image: "/images/yeti-tumbler-30oz.png",
    imageAltText: "Insulated Tumbler",
    price: 24,
    sku: "MERCH-TUMBLER-001",
    inStock: true,
    isFeaturedProduct: true,
    slug: "/shop/insulated-tumbler",
    id: "p3",
    badges: [{ label: "Sale", color: `red` }, { label: "Limited time" }],
  },
  {
    name: "Classic Logo T-Shirt",
    productType: "t-shirt",
    shortDescription: "Soft cotton tee with the flagship logo.",
    longDescription:
      '<p class="font_7">A comfortable ring-spun cotton tee featuring our flagship logo across the chest. Available in a full run of sizes.</p>',
    image: "",
    imageAltText: "Classic Logo T-Shirt",
    price: 28,
    sku: "MERCH-TSHIRT-001",
    inStock: true,
    isFeaturedProduct: true,
    slug: "/shop/classic-logo-t-shirt",
    id: "p4",
  },
  {
    name: "Branded Pint Glass",
    productType: "pint-glass",
    shortDescription: "16oz shaker pint glass with etched logo.",
    longDescription:
      '<p class="font_7">A classic 16oz shaker pint glass with a permanently etched logo. Dishwasher safe and built to last.</p>',
    image: "",
    imageAltText: "Branded Pint Glass",
    price: 9,
    sku: "MERCH-PINT-001",
    inStock: false,
    isFeaturedProduct: false,
    slug: "/shop/branded-pint-glass",
    id: "p5",
  },
  {
    name: "Key Chain",
    productType: "merch",
    shortDescription: "16oz shaker pint glass with etched logo.",
    longDescription:
      '<p class="font_7">A classic 16oz shaker pint glass with a permanently etched logo. Dishwasher safe and built to last.</p>',
    image: "/images/keychain-bottle-opener.png",
    imageAltText: "Branded Pint Glass",
    price: 9,
    sku: "MERCH-PINT-001",
    inStock: true,
    isFeaturedProduct: false,
    slug: "/shop/branded-pint-glass",
    id: "p6",
  },
];
// ----------------------------------------------------------------------------
// Blog Posts (dummy — no CSV source)
// ----------------------------------------------------------------------------

export interface BlogPost {
  title: string;
  image: string;
  id: string;
}

export const dummyBlogPosts: BlogPost[] = [
  {
    title:
      "Pour It Online: Why Solid Web Infrastructure Powers Growing Businesses",
    image: "/images/blog-web-infra.jpg",
    id: "post5",
  },
  {
    title: "From Label to Loyalty: Building a Brewery Brand People Remember",
    image: "/images/blog-brand-loyalty.jpg",
    id: "post4",
  },
  {
    title: "Can Design That Sells: Branding Your Beer on the Shelf",
    image: "/images/blog-can-design.jpg",
    id: "post3",
  },
  {
    title: "Small-Batch Brewing: Why Fresh Always Wins",
    image: "/images/blog-small-batch.jpg",
    id: "post1",
  },
  {
    title: "Hops 101: A Beginner's Guide to Bitterness and Aroma",
    image: "/images/blog-hops-101.jpg",
    id: "post2",
  },
];
