export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  creator: string;
  contact: {
    // Replace with the artisan's verified contact details when provided
    email: string;
    phone: string;
    displayPhone: string;
    whatsappNumber: string; // e.g. "919876543210" without symbols for wa.me links
    whatsappPromptMessage: string;
    location: {
      workshop: string;
      address: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      coordinates: string;
      googleMapsUrl: string;
      embedMapUrl: string;
      consultationNotice: string;
    };
  };
  craftSpecializations: string[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Bespoke Woodcraft & Architectural Carving",
  shortName: "Artisan Woodcraft",
  tagline: "Contemporary Indian Craftsmanship & Architectural Woodwork",
  description:
    "Portfolio of handcrafted bespoke woodwork, traditional temple mandapam architecture, sacred deity relief carvings, and custom commissioned timber structures.",
  url: "https://woodcraft-portfolio.local", // Replace with production domain
  ogImage: "/images/architectural-mandapam-installed-front.jpeg",
  creator: "Independent Woodcraft Designer & Artisan",
  contact: {
    email: "enquiries@artisanwoodcraft.com", // Replace with verified business email
    phone: "+91 99418 03845",
    displayPhone: "+91 99418 03845",
    whatsappNumber: "919941803845", // Verified WhatsApp business digits for wa.me
    whatsappPromptMessage:
      "Hello, I am interested in visiting your workshop to discuss a custom woodwork commission.",
    location: {
      workshop: "Artisan Woodcraft Atelier & Workshop",
      address: "Jyothi Nagar, Annanur, Ambattur",
      city: "Chennai",
      state: "Tamil Nadu",
      postalCode: "600109",
      country: "India",
      coordinates: "13°06'46.1\"N 80°07'33.7\"E",
      googleMapsUrl:
        "https://www.google.com/maps/place/13%C2%B006'46.1%22N+80%C2%B007'33.7%22E/@13.1127912,80.1234622,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.1127912!4d80.1260371?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D",
      embedMapUrl:
        "https://maps.google.com/maps?q=13.1127912,80.1260371&hl=en&z=16&output=embed",
      consultationNotice:
        "Direct visits welcome. Clients, architects, and patrons are invited to visit the workshop to view live wood carving, examine timber grains, and discuss custom dimensions in person.",
    },
  },
  craftSpecializations: [
    "Architectural Mandapam Woodwork",
    "Traditional Indian Relief Carving",
    "Temple-Scale Wooden Architecture",
    "Sacred & Cultural Sculptures",
    "Bespoke Wooden Furniture & Swings",
    "Ornamental Architectural Elements",
    "Miniature Architectural Shrines",
    "Commissioned Handcrafted Décor",
  ],
  // Real social URLs only; kept empty until verified links are provided
  socialLinks: {},
};
