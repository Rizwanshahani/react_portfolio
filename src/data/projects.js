const projects = [
  {
    number: "01",
    title: "React Personal Portfolio",
    category: "Frontend · Live",
    description:
      "A personal website presenting my profile and project work, built with reusable React components and responsive layouts.",
    image: "/projects/portfolio-home.png",
    alt: "Screenshot of the live Rizwan Shahani portfolio website",
    href: "https://rizwanshahani.vercel.app",
    status: "Visit live site",
  },
  {
    number: "02",
    title: "GlobalPath Visa Website",
    category: "Consultancy · Live",
    description:
      "A visa consultancy website organized around services, packages, and clear assessment calls to action.",
    image: "/projects/globalpath-home.png",
    alt: "Screenshot of the live GlobalPath Visa website",
    href: "https://globalpathvisa.co.uk",
    status: "Visit live site",
  },
  {
    number: "03",
    title: "AURA E-Commerce Storefront",
    category: "Technology · MERN e-commerce",
    description:
      "A premium technology and electronics storefront with product-focused presentation and a shopping-oriented layout.",
    preview: {
      kind: "electronics",
      brand: "AURA",
      label: "Electronics storefront",
      eyebrow: "TECHNOLOGY, CONSIDERED",
      title: "Find your next essential.",
      description: "A focused shopping experience for modern tech.",
      items: ["Phones", "Audio", "Accessories"],
      caption: "Store preview · live deployment unavailable",
      alt: "Illustrative storefront preview for the AURA electronics project, not a site screenshot",
    },
    href: "https://github.com/auraecommerce15-cpu/aura-Ecommerce.",
    status: "View source repository",
    actionLabel: "View source",
  },
  {
    number: "04",
    title: "Raj Meena Fashion Store",
    category: "Fashion · Storefront",
    description:
      "A brand-led storefront for luxury pret and casual wear, designed for a women's clothing label.",
    preview: {
      kind: "fashion",
      brand: "RAJ MEENA",
      label: "Pret & casual",
      eyebrow: "THE NEW EDIT",
      title: "A considered wardrobe.",
      description: "A refined storefront for the season's collection.",
      items: ["Luxury pret", "Casual", "New season"],
      caption: "Store preview · live deployment unavailable",
      alt: "Illustrative fashion storefront preview for the Raj Meena project, not a site screenshot",
    },
    status: "Live deployment unavailable",
  },
  {
    number: "05",
    title: "Al Haiwan Genetics",
    category: "ERPNext / Frappe · Practical work",
    description:
      "Worked through company setup, master-data imports, chart-of-accounts structure, validation issues, and implementation notes.",
    preview: {
      kind: "erp",
      brand: "AL HAIWAN",
      label: "ERPNext / Frappe",
      eyebrow: "IMPLEMENTATION CASE STUDY",
      title: "Company operations.",
      description: "Setup, records, and finance workflows.",
      items: ["Company setup", "Master data", "Chart of accounts"],
      caption: "Illustrative case-study preview",
      alt: "Illustrative ERPNext case-study preview for Al Haiwan Genetics",
    },
    status: "Implementation experience",
  },
  {
    number: "06",
    title: "Full-Stack Development Learning Project",
    category: "React / Next.js · In progress",
    description:
      "Exploring a React or Next.js frontend with a Node.js/Express API and MongoDB, with current study focused on authentication, validation, and CRUD.",
    preview: {
      kind: "stack",
      brand: "DEVELOPMENT NOTES",
      label: "In progress",
      eyebrow: "LEARNING PROJECT",
      title: "Frontend to data.",
      description: "Exploring a full-stack application architecture.",
      items: ["React / Next.js", "Node / Express", "MongoDB"],
      caption: "Illustrative learning-project preview",
      alt: "Illustrative application architecture preview for the in-progress development project",
    },
    status: "In progress",
  },
];

export default projects;
