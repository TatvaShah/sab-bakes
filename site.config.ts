import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sab Bakes",
  tagline: "Custom cakes, bakes and treats, made to order.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Oakville, ON",
  siteUrl: "https://sab-bakes-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#3a7a68" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Custom cakes and treats",
    headline: "Cakes for birthdays, ameens and celebrations",
    subhead: "Themed, floral, vintage heart and doll cakes, made to order in Oakville. Send a message on Instagram or Facebook to order.",
    images: [
      { src: "/images/post-3.jpg", alt: "A floral birthday cake from Sab Bakes", width: 1080, height: 1440 },
      { src: "/images/post-1.jpg", alt: "An elegant ribbon birthday cake from Sab Bakes", width: 1080, height: 1245 },
      { src: "/images/post-6.jpg", alt: "A doll cake from Sab Bakes", width: 1080, height: 1439 },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/sab.bakes" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom birthday and celebration cakes",
    "Best selling strawberry shortcake with creme filling",
    "Chocolate, tiramisu, pineapple and red velvet flavours",
    "Made to order in Oakville",
  ],

  about: {
    title: "Welcome to Sab Bakes",
    body: [
      "Sab Bakes is a custom cake studio in Oakville, making themed, floral, vintage heart and doll cakes, along with other bakes and treats.",
      "Posted flavours include a best selling strawberry shortcake with creme filling, moist chocolate cake with fudge or coffee filling, pineapple fresh cream, tiramisu, and red velvet with cream cheese filling. Send a message on Instagram or Facebook to order.",
    ],
    image: { src: "/images/post-3.jpg", alt: "A floral birthday cake from Sab Bakes", width: 1080, height: 1440 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message for a quote on your date, flavour and design.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom birthday and themed cakes" },
          { name: "Floral cakes" },
          { name: "Vintage heart cakes" },
          { name: "Doll cakes" },
        ],
      },
      {
        title: "Flavours from recent orders",
        items: [
          { name: "Strawberry shortcake with creme filling", description: "Described as the best selling flavour." },
          { name: "Moist chocolate cake with fudge filling" },
          { name: "Moist chocolate cake with coffee filling" },
          { name: "Pineapple fresh cream cake" },
          { name: "Tiramisu" },
          { name: "Red velvet with cream cheese filling" },
          { name: "Rainbow cake" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "A floral birthday cake from Sab Bakes", caption: "Floral strawberry shortcake", href: "https://www.instagram.com/p/DexXf77lB7e/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1245, alt: "An elegant ribbon birthday cake from Sab Bakes", caption: "Chocolate cake with coffee filling", href: "https://www.instagram.com/p/DfNkpXFFPPt/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "A vintage heart cake from Sab Bakes", caption: "Vintage heart cake", href: "https://www.instagram.com/p/DeP1GIplPaL/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1439, alt: "A doll cake from Sab Bakes", caption: "Doll cake", href: "https://www.instagram.com/p/DeGAj7xFEsX/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1313, alt: "A black and silver BMW themed cake from Sab Bakes", caption: "BMW themed cake", href: "https://www.instagram.com/p/De5OOEjlHXC/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "A 70th birthday cake with a car topper from Sab Bakes", caption: "A 70th birthday cake", href: "https://www.instagram.com/p/DepCsvPlGWC/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1450, alt: "A floral ameen cake from Sab Bakes", caption: "An ameen cake", href: "https://www.instagram.com/p/DdhnaInlHYg/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1112, alt: "A dholki cake from Sab Bakes", caption: "A dholki cake", href: "https://www.instagram.com/p/Dc6cBIflMBY/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1237, alt: "A heart shaped birthday cake from Sab Bakes", caption: "A heart shaped cake", href: "https://www.instagram.com/p/Dc1qLiNlOEj/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sab.bakes",
    embeds: ["https://www.instagram.com/p/DexXf77lB7e/", "https://www.instagram.com/p/DfNkpXFFPPt/", "https://www.instagram.com/p/DeP1GIplPaL/"],
  },

  order: {
    label: "How to order",
    title: "Order in a DM or on Facebook",
    intro: "Send a message on Instagram or Facebook with your date, design and flavour.",
    dmMessage: "Hi Sab Bakes! I would like to order.\nDate needed:\nDesign idea:\nFlavour:\nServing size:",
    headerCtaLabel: "DM to order",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/sab.bakes" },
      { label: "Facebook", href: "https://www.facebook.com/sabbakes1/" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram or on the Sab Bakes Facebook page with your date, design and flavour." },
    { q: "Where are you based?", a: "Sab Bakes is based in Oakville, Ontario." },
    { q: "What flavours do you offer?", a: "Posted flavours include strawberry shortcake with creme filling, moist chocolate cake with fudge or coffee filling, pineapple fresh cream, tiramisu, red velvet with cream cheese filling, and rainbow cake." },
  ],

  contact: {
    title: "Contact",
    area: "Oakville, Ontario",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/sab.bakes/" },
      { label: "Facebook", href: "https://www.facebook.com/sabbakes1/" },
    ],
  },

  seo: {
    title: "Sab Bakes | Custom cakes in Oakville",
    description: "Custom cakes and treats in Oakville, including strawberry shortcake, chocolate, tiramisu and red velvet flavours. Order by Instagram DM or on Facebook.",
    keywords: ["custom cakes Oakville", "strawberry shortcake cake", "Sab Bakes"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
