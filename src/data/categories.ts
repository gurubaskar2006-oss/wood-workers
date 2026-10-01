export interface CraftCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  aspect: string;
}

export const craftCategories: CraftCategory[] = [
  {
    id: "architectural-woodwork",
    name: "Architectural Woodwork",
    tagline: "Columns, Mandapams & Structural Interiors",
    description:
      "Full-scale wooden installations designed for residential sanctums, private shrines, and architectural environments. Incorporating carved fluted pillars, ornamental capitals, and multi-tiered vimanas.",
    image: "/images/architectural-mandapam-installed-front.jpeg",
    aspect: "landscape",
  },
  {
    id: "traditional-carving",
    name: "Traditional Carving",
    tagline: "Sacred Iconography & Relief Sculpture",
    description:
      "Precision hand-carved relief figures, temple friezes, and sacred deity panels sculpted from seasoned teakwood following classical proportion canons and tactile depth.",
    image: "/images/ganesha-temple-pavilion-relief.jpeg",
    aspect: "portrait",
  },
  {
    id: "bespoke-furniture",
    name: "Bespoke Furniture",
    tagline: "Handcrafted Swings, Peetas & Seating",
    description:
      "Commissioned heirloom pieces including traditional suspended wooden swings (jhula) with brass fixtures, carved altar asanas, and customized joinery furniture.",
    image: "/images/handcrafted-wooden-swing-perspective.jpeg",
    aspect: "portrait",
  },
  {
    id: "decorative-craft",
    name: "Decorative Craft",
    tagline: "Ornamental Keepsakes & Altar Pieces",
    description:
      "Refined wooden storage cases, hand-painted kolam ceremonial boxes, carved altar pedestals, and intricate ritual accents displaying regional surface ornamentation.",
    image: "/images/decorative-kolam-keepsake-box.jpeg",
    aspect: "square",
  },
  {
    id: "custom-creations",
    name: "Custom Creations",
    tagline: "Architectural Miniatures & Special Commissions",
    description:
      "Scale architectural models of classical temple sanctums, bridge pavilions, tiered gopurams, and custom sacred symbols sculpted to individual client specifications.",
    image: "/images/temple-miniature-stepped-pavilion.jpeg",
    aspect: "portrait",
  },
];
