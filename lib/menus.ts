export type NavLink = { label: string; slug: string };
export type SocialLink = {
  platform: string;
  href: string;
};

export const header_menu = [
  { label: "Home", slug: "" },
  { label: "Our Story", slug: "our-story" },
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
];

export const dummySocialLinks: SocialLink[] = [
  { platform: "facebook", href: "https://facebook.com/yourpage" },
  { platform: "instagram", href: "https://instagram.com/yourhandle" },
  { platform: "tiktok", href: "https://tiktok.com/@yourhandle" },
  { platform: "twitter", href: "https://twitter.com/yourhandle" },
  { platform: "youtube", href: "https://youtube.com/@yourchannel" },
];
