// Profile details retained from this repository's existing identity.
export const profile = {
  name: "LoisDub",
  email: "loischilesc05@gmail.com",
  github: "https://github.com/LoisDub",
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: "Web development" | "Interface concepts";
  label: string;
  description: string;
  tags: string[];
  preview: "portfolio" | "workspace" | "commerce";
  overview: string;
  details: { title: string; description: string }[];
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    number: "01",
    title: "A space for my work",
    category: "Web development",
    label: "PERSONAL WEBSITE",
    description:
      "A considered portfolio bringing code, craft, and a little personality together.",
    tags: ["Next.js", "TypeScript", "CSS"],
    preview: "portfolio",
    overview:
      "The website you’re exploring: a responsive portfolio built to make my engineering focus, work, and contact information easy to find.",
    details: [
      {
        title: "The approach",
        description:
          "An editorial layout, warm neutrals, and a focused green palette give the content room to breathe. Reusable components keep the presentation consistent.",
      },
      {
        title: "The implementation",
        description:
          "Built with Next.js and TypeScript, with responsive CSS, native project dialogs, keyboard-friendly navigation, and reduced-motion support.",
      },
    ],
    repo: "https://github.com/LoisDub/my-portfolio",
  },
  {
    id: "workspace",
    number: "02",
    title: "Room to focus",
    category: "Interface concepts",
    label: "DASHBOARD CONCEPT",
    description:
      "An exploration of a calmer, more organized home for everyday project work.",
    tags: ["Interface design", "Dashboard", "Concept"],
    preview: "workspace",
    overview:
      "An illustrative interface concept for a project workspace. This is a design exploration, rather than a shipped product or a client engagement.",
    details: [
      {
        title: "The idea",
        description:
          "Bring tasks, project progress, and daily priorities into one quiet interface. A clear hierarchy helps separate what needs attention from supporting information.",
      },
      {
        title: "Design direction",
        description:
          "A compact sidebar, soft lilac accents, and small progress indicators explore how a useful dashboard can feel approachable without losing density.",
      },
    ],
  },
  {
    id: "commerce",
    number: "03",
    title: "Everyday, considered",
    category: "Interface concepts",
    label: "STOREFRONT CONCEPT",
    description:
      "A minimal storefront study that puts the product and its story first.",
    tags: ["Interface design", "E-commerce", "Concept"],
    preview: "commerce",
    overview:
      "An illustrative storefront direction for thoughtfully designed everyday objects. This is a visual study, rather than an operational shop or a client project.",
    details: [
      {
        title: "The idea",
        description:
          "Create an unhurried shopping experience with generous whitespace, a strong product silhouette, and clear editorial typography.",
      },
      {
        title: "Design direction",
        description:
          "A warm clay palette and a simple lamp illustration establish the visual language. The preview explores composition and presentation; it does not provide checkout functionality.",
      },
    ],
  },
];
