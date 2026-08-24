export type NavLink = { label: string; slug: string };
export type SocialLink = {
  platform: string;
  href: string;
};

export const header_menu = [
  { label: "Home", slug: "" },
  { label: "Our Story", slug: "our-story" },
  { label: "Store", slug: "shop" },
  { label: "Beers", slug: "beers" },
  { label: "Events", slug: "events" },
  { label: "Blog", slug: "blog" },
];

export const footer_menu = [
  { label: "Home", slug: "" },
  { label: "Our Story", slug: "our-story" },
  { label: "Beers", slug: "beers" },
  { label: "Events", slug: "events" },
  { label: "Blog", slug: "blog" },
  { label: "Shop", slug: "shop" },
];

export const dummySocialLinks: SocialLink[] = [
  { platform: "facebook", href: "https://facebook.com/" },
  { platform: "instagram", href: "https://instagram.com/" },
  { platform: "tiktok", href: "https://tiktok.com/" },
  { platform: "twitter", href: "https://twitter.com/" },
  { platform: "youtube", href: "https://youtube.com/" },
];
