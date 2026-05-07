import React from 'react';

export const config = {
  preparedBy: "Kaylee",
  date: "May 7th, 2026",
  email: "",
};

export type ConceptImage = {
  src: string;
  caption: string;
  alt: string;
  filename: string;
};

export type Concept = {
  id: string;
  eyebrow: string;
  name: string;
  tagline: string;
  rationale: React.ReactNode;
  pullQuote: string;
  images: ConceptImage[];
  colors: {
    bg: string;
    text: string;
    accent: string;
    secondaryAccent?: string;
    placeholderBg: string;
    placeholderText: string;
  };
};

export const concepts: Concept[] = [
  {
    id: "concept-a",
    eyebrow: "CONCEPT 01",
    name: "Velvet Hour",
    tagline: "Cinematic luxury. Quiet, considered, almost reverent.",
    rationale: <>Velvet Hour treats <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> the way a Patek Philippe ad treats a wristwatch — with restraint, deep shadow, and the assumption that the craft speaks for itself. The palette is matte black, deep oxblood, ivory, and brass. Photography is low-key and theatrical: steam, condensation, hands at work, never faces front-and-center. This direction is the best fit if you want the brand to feel timeless and grown-up.</>,
    pullQuote: "",
    colors: {
      bg: "bg-velvet-black",
      text: "text-velvet-ivory",
      accent: "text-velvet-brass",
      placeholderBg: "bg-velvet-oxblood",
      placeholderText: "text-velvet-brass"
    },
    images: [
      { filename: "home_velvet_hour.png", src: "/images/concept-a/home_velvet_hour.png", caption: "Home", alt: "Velvet Hour concept — Home" },
      { filename: "menu_velvet_hour.png", src: "/images/concept-a/menu_velvet_hour.png", caption: "Menu", alt: "Velvet Hour concept — Menu" },
      { filename: "beyond_coffee_velvet_hour.png", src: "/images/concept-a/beyond_coffee_velvet_hour.png", caption: "Beyond Coffee", alt: "Velvet Hour concept — Beyond Coffee" },
      { filename: "faq_velvet_hour.png", src: "/images/concept-a/faq_velvet_hour.png", caption: "FAQ", alt: "Velvet Hour concept — FAQ" },
      { filename: "jobs_velvet_hour.png", src: "/images/concept-a/jobs_velvet_hour.png", caption: "Jobs", alt: "Velvet Hour concept — Jobs" },
    ]
  },
  {
    id: "concept-b",
    eyebrow: "CONCEPT 02",
    name: "Field Notes",
    tagline: "Earthy craft. Documentary storytelling. Farm to McKinney.",
    rationale: <>Field Notes treats <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> like a longform magazine feature. The palette is raw oat, forest green, terracotta, and sage — natural, sun-warmed, never sterile. Typography pairs a humanist serif with monospace data — temperatures, altitudes, brew ratios — so the craft shows its work. The hero is a horizontal scroll following a single coffee bean. This direction makes <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> educational without being lecture-y. It's the strongest fit if you want customers to understand exactly why your coffee is different and to feel like they're learning something every time they visit. Best fit if you want the brand to feel grounded, intentional, and quietly expert.</>,
    pullQuote: "",
    colors: {
      bg: "bg-field-oat",
      text: "text-field-umber",
      accent: "text-field-forest",
      secondaryAccent: "text-field-terracotta",
      placeholderBg: "bg-field-forest",
      placeholderText: "text-field-terracotta"
    },
    images: [
      { filename: "home.png", src: "/images/concept-b/home.png", caption: "Home", alt: "Field Notes concept — Home" },
      { filename: "menu.png", src: "/images/concept-b/menu.png", caption: "Menu", alt: "Field Notes concept — Menu" },
      { filename: "beyondthecup.png", src: "/images/concept-b/beyondthecup.png", caption: "Beyond Coffee", alt: "Field Notes concept — Beyond Coffee" },
    ]
  },
  {
    id: "concept-c",
    eyebrow: "CONCEPT 03",
    name: "Sunday Bright",
    tagline: "Joyful, modern, made for daylight and Instagram.",
    rationale: <>Sunday Bright is the most extroverted of the three. The palette is warm off-white, soft peach, deep coral, sage mint, and butter yellow — pastel-forward, color-blocked, intentionally photogenic. The existing hand-drawn <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> logo becomes a recurring motif rather than something to grow out of. The hero is a drink carousel where signature drinks rotate through pastel-blocked frames, with the whole background shifting color as you scroll. This direction leans into the personality already in the brand and the playful drink names (Honey Bee Latte, Forest Latte, Charcoal Latte). Best fit if you want <img src="/images/ll.webp" alt="Coffee Nutz" className="h-[1em] w-auto inline-block align-middle -mt-[0.2em]" /> to feel like the most-photographed corner of McKinney and to read as warm, welcoming, and unmistakably modern.</>,
    pullQuote: "",
    colors: {
      bg: "bg-sunday-cream",
      text: "text-sunday-black",
      accent: "text-sunday-coral",
      placeholderBg: "bg-sunday-peach",
      placeholderText: "text-sunday-coral"
    },
    images: [
      { filename: "Home.png", src: "/images/concept-c/Home.png", caption: "Home", alt: "Sunday Bright concept — Home" },
      { filename: "Menu.png", src: "/images/concept-c/Menu.png", caption: "Menu", alt: "Sunday Bright concept — Menu" },
      { filename: "beyond_coffee.png", src: "/images/concept-c/beyond_coffee.png", caption: "Beyond Coffee", alt: "Sunday Bright concept — Beyond Coffee" },
      { filename: "FAQ.png", src: "/images/concept-c/FAQ.png", caption: "FAQ", alt: "Sunday Bright concept — FAQ" },
      { filename: "Jobs.png", src: "/images/concept-c/Jobs.png", caption: "Jobs", alt: "Sunday Bright concept — Jobs" },
    ]
  }
];
