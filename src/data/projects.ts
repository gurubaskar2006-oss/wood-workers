export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  details: {
    material: string;
    technique: string;
    context: string;
  };
  coverImage: string;
  images: string[];
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: "mandapam-interior-architecture",
    title: "Temple Mandapam Interior Installation",
    category: "architectural-woodwork",
    categoryLabel: "Architectural Woodwork",
    tagline: "Full-scale carved wooden mandapam integrated into modern residential architecture",
    description:
      "A complete architectural wooden structure designed and installed in a contemporary home. Features hand-carved square-to-octagonal fluted pillars, floral rosette capitals, ornamental bracket arches, suspended traditional brass lamps, and a multi-tiered carved wooden shikhara dome rising above the marble plinth.",
    details: {
      material: "Seasoned Teakwood & Natural Timber",
      technique: "Mortise & Tenon Joinery, Hand-Chiseled Relief, Multi-Tiered Shikhara Construction",
      context: "Private Residential Sanctum / Architecture Integration",
    },
    coverImage: "/images/architectural-mandapam-installed-front.jpeg",
    images: [
      "/images/architectural-mandapam-installed-front.jpeg",
      "/images/architectural-mandapam-installed-angle.jpeg",
      "/images/architectural-mandapam-crown-canopy.jpeg",
    ],
    featured: true,
    order: 1,
  },
  {
    id: "ganesha-temple-pavilion",
    title: "High-Relief Ganesha in Temple Pavilion",
    category: "traditional-carving",
    categoryLabel: "Traditional Carving",
    tagline: "Intricate deep-relief deity sculpture carved with architectural vimana canopy",
    description:
      "Sculpted from selected seasoned timber, this masterwork portrays Ganesha seated in classical padmasana upon an ornate double-lotus pedestal. Framed by a carved temple pavilion with fluted pillars and tiered kalasha roof, the sculpture showcases fine anatomical nuance, ceremonial attributes (parashu, pasha, modaka), and intricate textile drapery.",
    details: {
      material: "Solid Teakwood",
      technique: "High-Relief Hand Carving, Fine Chisel Detailing, Natural Wax Finish",
      context: "Sacred Iconography / Shrine Centerpiece",
    },
    coverImage: "/images/ganesha-temple-pavilion-relief.jpeg",
    images: [
      "/images/ganesha-temple-pavilion-relief.jpeg",
      "/images/ganesha-carved-wall-relief.jpeg",
    ],
    featured: true,
    order: 2,
  },
  {
    id: "balaji-padmavathi-carved-frieze",
    title: "Lord Venkateswara & Padmavathi Frieze",
    category: "traditional-carving",
    categoryLabel: "Traditional Carving",
    tagline: "Deeply chiseled relief panel of Tirupati Balaji & Padmavathi under sacred arches",
    description:
      "Handcrafted relief carving in solid seasoned teak portraying Lord Venkateswara and Goddess Padmavathi. Framed beneath carved makara torana archways with kirtimukha crests, sacred garlands, and ceremonial temple pillars.",
    details: {
      material: "Monolithic Seasoned Teak Block",
      technique: "Subtractive Deep Relief, Chiseled Torana Arches, Natural Timber Luster",
      context: "Temple Wall Frieze & Mandir Centerpiece",
    },
    coverImage: "/images/balaji-padmavathi-carved-frieze.jpeg",
    images: [
      "/images/balaji-padmavathi-carved-frieze.jpeg",
      "/images/artisan-chisel-bench-relief-process.jpeg",
    ],
    featured: true,
    order: 3,
  },
  {
    id: "temple-miniature-stepped-pavilion",
    title: "Stepped Pavilion Temple Miniature",
    category: "custom-creations",
    categoryLabel: "Custom Creations",
    tagline: "Scale architectural wooden temple with ceremonial bridge entrance and balustrades",
    description:
      "A scale architectural model capturing the classical geometry of South Indian mandapam architecture. Constructed with an ascending flight of steps, carved balusters, sculpted lion-paw feet, four fluted columns with corbel capitals, and an intricately layered stepped vimana roof crowned with a turned kalasha.",
    details: {
      material: "Hand-Selected Hardwood",
      technique: "Architectural Scale Joinery, Lathe-Turned Balusters, Relief Cornice Carving",
      context: "Custom Commission / Architectural Miniature",
    },
    coverImage: "/images/temple-miniature-stepped-pavilion.jpeg",
    images: [
      "/images/temple-miniature-stepped-pavilion.jpeg",
      "/images/temple-miniature-sanctum-shrine.jpeg",
    ],
    featured: true,
    order: 4,
  },
  {
    id: "handcrafted-wooden-swing",
    title: "Traditional Teakwood Swing (Jhula)",
    category: "bespoke-furniture",
    categoryLabel: "Bespoke Furniture",
    tagline: "Heirloom indoor swing with ornamental side brackets and brass hardware",
    description:
      "Custom indoor swing handcrafted with solid timber framing, contoured seat plank, and elegant arched crossbar with a carved spire crest. Suspended via genuine brass links, engineered for enduring structural integrity and serene kinetic balance.",
    details: {
      material: "A-Grade Teakwood & Solid Brass Chains",
      technique: "Traditional Frame Joinery, Contoured Shaping, Hand-Rubbed Oil Polish",
      context: "Bespoke Living Space Installation",
    },
    coverImage: "/images/handcrafted-wooden-swing-perspective.jpeg",
    images: [
      "/images/handcrafted-wooden-swing-perspective.jpeg",
      "/images/handcrafted-wooden-swing-front.jpeg",
    ],
    featured: true,
    order: 5,
  },
  {
    id: "gita-upadesha-chariot",
    title: "Gita Upadesha Ceremonial Chariot",
    category: "custom-creations",
    categoryLabel: "Custom Creations",
    tagline: "Hand-sculpted Mahabharata chariot with Parthasarathy Krishna, Arjuna & four steeds",
    description:
      "A magnificent ceremonial wooden sculpture recreating the battlefield chariot of the Bhagavad Gita. Features a gold-leafed tiered temple pavilion canopy, turned spoke wheels, carved chariot steps, and sculpted figures of Lord Krishna holding the reins alongside Arjuna.",
    details: {
      material: "Seasoned Teakwood & Polychrome Highlights",
      technique: "Multi-Figure Sculpting, Chariot Joinery, Ornamental Gilded Canopy",
      context: "Heirloom Devotional Commission / Table Centerpiece",
    },
    coverImage: "/images/gita-upadesha-chariot-sculpture.jpeg",
    images: [
      "/images/gita-upadesha-chariot-sculpture.jpeg",
      "/images/temple-ratha-chariot-shrine.jpeg",
    ],
    featured: true,
    order: 6,
  },
  {
    id: "shiva-parvathi-kailash-lintel",
    title: "Kailash Shiva-Parvathi Temple Lintel",
    category: "architectural-woodwork",
    categoryLabel: "Architectural Woodwork",
    tagline: "Carved architectural pediment with sacred deities, hanging deepams & turned kalashas",
    description:
      "A monumental temple entrance pediment architrave sculpted with Lord Shiva and Goddess Parvathi seated upon Mount Kailash. Flanked by suspended carved oil lamps (deepams), floral medallions, Nandi, and an upper cornice crowned with turned timber kalasha finials.",
    details: {
      material: "Solid Teakwood Timber",
      technique: "Architectural Entablature Carving, Suspended Link Motifs, Multi-Tiered Dentils",
      context: "Mandir Entrance Pediment / Architectural Door Header",
    },
    coverImage: "/images/shiva-parvathi-kailash-lintel.jpeg",
    images: [
      "/images/shiva-parvathi-kailash-lintel.jpeg",
    ],
    featured: false,
    order: 7,
  },
  {
    id: "gaja-lakshmi-lotus-medallion",
    title: "Gaja Lakshmi Carved Lotus Medallion",
    category: "traditional-carving",
    categoryLabel: "Traditional Carving",
    tagline: "Circular relief medallion of Goddess Lakshmi flanked by ceremonial elephants",
    description:
      "A circular hand-carved medallion celebrating Goddess Gaja Lakshmi seated in padmasana upon an unfurling lotus blossom. Flanked by twin caparisoned elephants performing abhishekam with raised trunks, enclosed within dual circular borders of carved lotus petals.",
    details: {
      material: "Seasoned Hardwood",
      technique: "Bas-Relief Circular Medallion Sculpting, Layered Petal Borders, Warm Matte Polish",
      context: "Devotional Wall Installation / Auspicious Entrance Accent",
    },
    coverImage: "/images/gaja-lakshmi-carved-medallion.jpeg",
    images: [
      "/images/gaja-lakshmi-carved-medallion.jpeg",
      "/images/ganesha-prabhavali-medallion.jpeg",
    ],
    featured: false,
    order: 8,
  },
  {
    id: "ornamental-gilded-entrance-door",
    title: "Bespoke Gilded Architectural Door",
    category: "architectural-woodwork",
    categoryLabel: "Architectural Woodwork",
    tagline: "Solid teakwood entrance door with classical gold-leaf relief carvings and floral medallion",
    description:
      "A grand residential entrance door carved from selected teakwood. Features recessed panels filled with ornate Baroque and Dravidian fusion acanthus scrollwork highlighted in lustrous gold leaf, centered around an eight-point carved floral sun medallion.",
    details: {
      material: "Prime Burma Teak & 24K Leaf Detailing",
      technique: "Mortise-and-Tenon Door Assembly, Relief Carving, Gilding & Weatherproof Poly Polish",
      context: "Luxury Residential Entrance Architecture",
    },
    coverImage: "/images/ornamental-gilded-entrance-door.jpeg",
    images: [
      "/images/ornamental-gilded-entrance-door.jpeg",
    ],
    featured: false,
    order: 9,
  },
  {
    id: "temple-gopuram-cornice-ensemble",
    title: "Temple Gopuram Cornice & Sacred Frieze",
    category: "architectural-woodwork",
    categoryLabel: "Architectural Woodwork",
    tagline: "Architectural entablature with five turned kalashas and carved sacred emblems",
    description:
      "A monumental temple architectural cornice sculpted in the workshop. Features multiple tiers of carved lotus petals, five turned timber kalashas along the upper parapet, and five carved sacred figures along the central frieze including Garuda, Sudarshana Chakra, the Sacred Namam, Shankha, and Hanuman.",
    details: {
      material: "Seasoned Teakwood",
      technique: "Multi-Tiered Frieze Carving, Hand-Turned Kalashas, Iconographic Relief",
      context: "Temple Sanctum Superstructure",
    },
    coverImage: "/images/temple-gopuram-cornice-shikhara.jpeg",
    images: [
      "/images/temple-gopuram-cornice-shikhara.jpeg",
    ],
    featured: false,
    order: 10,
  },
  {
    id: "sacred-meditative-guru",
    title: "Meditative Guru Sculpture",
    category: "traditional-carving",
    categoryLabel: "Traditional Carving",
    tagline: "Full-figure contemplative portraiture carved with traditional iconography",
    description:
      "Hand-carved wooden sculpture of a revered Saint/Guru seated in serene contemplation. The piece exhibits masterful anatomical rendering, natural hair and beard texturing, sacred prayer rosaries, an incised halo, and undulating angavastram textile folds.",
    details: {
      material: "Dense Seasoned Hardwood",
      technique: "Subtractive Monolithic Carving, Fine Gouge Modeling, Organic Polish",
      context: "Private Devotional Installation",
    },
    coverImage: "/images/sacred-sculpture-guru-meditation.jpeg",
    images: [
      "/images/sacred-sculpture-guru-meditation.jpeg",
    ],
    featured: false,
    order: 11,
  },
  {
    id: "sacred-church-shrine-tabernacle",
    title: "Sacred Church Tabernacle Shrine",
    category: "custom-creations",
    categoryLabel: "Custom Creations",
    tagline: "Architectural ecclesiastical wooden shrine with carved cross finial and corner pilasters",
    description:
      "A tall, free-standing church tabernacle shrine hand-sculpted in teakwood. Features arched glass display apertures, acanthus scroll corner pillars, an ornate stepped entablature with corner pinnacles, and a commanding carved cross finial.",
    details: {
      material: "Seasoned Solid Teakwood & Clear Glazing",
      technique: "Architectural Tabernacle Joinery, Pierced Archwork, Natural Honey Varnish",
      context: "Church Altar Sanctuary & Devotional Shrine",
    },
    coverImage: "/images/sacred-church-shrine-tabernacle.jpeg",
    images: [
      "/images/sacred-church-shrine-tabernacle.jpeg",
    ],
    featured: false,
    order: 12,
  },
  {
    id: "sacred-heart-jesus-relief",
    title: "Sacred Heart of Jesus Carved Relief",
    category: "traditional-carving",
    categoryLabel: "Traditional Carving",
    tagline: "Framed high-relief wood carving depicting Christ with blessing hand gesture and radiant heart",
    description:
      "Sculpted with exceptional emotional depth and textile flow from solid seasoned timber. Depicts Christ with the Sacred Heart in deep bas-relief, crowned with flowing locks, a blessing hand gesture, and layered robe folds encased in a clean solid wood border.",
    details: {
      material: "Fine-Grained Hardwood",
      technique: "High-Relief Drapery Modeling, Anatomical Chisel Work, Natural Matte Sealer",
      context: "Ecclesiastical & Home Chapel Wall Icon",
    },
    coverImage: "/images/sacred-heart-jesus-carved-relief.jpeg",
    images: [
      "/images/sacred-heart-jesus-carved-relief.jpeg",
      "/images/sacred-carved-cross-altar.jpeg",
    ],
    featured: false,
    order: 13,
  },
  {
    id: "architectural-niche-mandapams",
    title: "Bespoke Niche Mandapams",
    category: "architectural-woodwork",
    categoryLabel: "Architectural Woodwork",
    tagline: "Handcrafted miniature shrines dimensioned for contemporary wall shelving",
    description:
      "Demonstrating how traditional timber craftsmanship integrates into contemporary residential architecture. Two distinct temple mandapams with tiered vimana roofs and multi-segmented fluted columns, custom-dimensioned to fit within minimalist interior wall niches.",
    details: {
      material: "A-Grade Teakwood",
      technique: "Custom Dimensioning, Precision Joinery, Traditional Lotus Detailing",
      context: "Modern Interior Architecture Integration",
    },
    coverImage: "/images/architectural-niche-mandapam-pair.jpeg",
    images: [
      "/images/architectural-niche-mandapam-pair.jpeg",
      "/images/temple-miniature-four-pillar-shikhara.jpeg",
    ],
    featured: false,
    order: 14,
  },
  {
    id: "decorative-kolam-keepsake-boxes",
    title: "Traditional Kolam Keepsake Boxes",
    category: "decorative-craft",
    categoryLabel: "Decorative Craft",
    tagline: "Handcrafted wooden storage boxes adorned with traditional ritual geometric art",
    description:
      "Artisanal wooden keepsake and jewelry boxes handcrafted with solid timber joinery. The lids are painted by hand with classical South Indian white rice-flour kolam geometric patterns and festive floral motifs on rich walnut and rosewood stain backgrounds.",
    details: {
      material: "Seasoned Hardwood & Natural Pigments",
      technique: "Box Finger Joinery, Hand-Drawn Ritual Kolam Art, Protective Clear Seal",
      context: "Heirloom Décor & Ceremonial Gifting",
    },
    coverImage: "/images/decorative-kolam-keepsake-box.jpeg",
    images: [
      "/images/decorative-kolam-keepsake-box.jpeg",
      "/images/decorative-floral-lacquer-box.jpeg",
    ],
    featured: false,
    order: 15,
  },
  {
    id: "carved-pooja-asana-pedestals",
    title: "Carved Pooja Asana & Throne Pedestals",
    category: "bespoke-furniture",
    categoryLabel: "Bespoke Furniture",
    tagline: "Traditional ceremonial pedestals, prayer asanas & prabhavali thrones with umbrella canopy",
    description:
      "A series of handcrafted ceremonial wooden pedestals (peetas), prayer seating asanas, and miniature deity thrones. Each unit features a sculpted temple arch backrest, lotus mouldings, stepped bases, and carved swastika and floral motifs.",
    details: {
      material: "Solid Timber & Teakwood",
      technique: "Profile Shaping, Pierced Arch Carving, Satin Wood Stain",
      context: "Home Mandir & Ritual Seating",
    },
    coverImage: "/images/ornamental-pooja-asana-pedestal.jpeg",
    images: [
      "/images/ornamental-pooja-asana-pedestal.jpeg",
      "/images/bespoke-joinery-peeta-assemblage.jpeg",
      "/images/ornamental-pooja-throne-prabhavali.jpeg",
    ],
    featured: false,
    order: 16,
  },
  {
    id: "sacred-shiva-lingam-sculpture",
    title: "Carved Teakwood Shiva Lingam",
    category: "traditional-carving",
    categoryLabel: "Traditional Carving",
    tagline: "Solid teakwood Shiva Lingam with carved tiered lotus yoni peedam",
    description:
      "Hand-sculpted sacred Shiva Lingam in solid teakwood. Exhibits flowing vertical wood grain along the cylindrical lingam shaft with incised tripundra markings, supported by a dual-tier stepped lotus yoni base with sculpted spout for ritual abhishekam.",
    details: {
      material: "Selected Teak Grain",
      technique: "Multi-Axis Carving, Chiseled Lotus Base, Organic Oil Polishing",
      context: "Personal Devotional Altar",
    },
    coverImage: "/images/sacred-shiva-lingam-yoni-carving.jpeg",
    images: ["/images/sacred-shiva-lingam-yoni-carving.jpeg"],
    featured: false,
    order: 17,
  },
];
