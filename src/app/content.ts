// Profile details retained from this repository's existing identity.
export const profile = {
  name: "LoisDub",
  email: "loischilesc05@gmail.com",
  github: "https://github.com/LoisDub",
};

export type ProjectMedia = {
  type: "video" | "image";
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: "Web development" | "Desktop applications";
  label: string;
  description: string;
  tags: string[];
  media: ProjectMedia[];
  overview: string;
  details: { title: string; description: string }[];
  repo: string;
};

export const projects: Project[] = [
  {
    id: "music-converter",
    number: "01",
    title: "Music Converter",
    category: "Web development",
    label: "MEDIA MANAGEMENT WEB APP",
    description:
      "A PHP-based music converter web application featuring user authentication, file upload and organization, and dashboard functionality for managing media content.",
    tags: ["PHP", "Authentication", "File uploads", "Dashboard"],
    media: [
      {
        type: "video",
        src: "/projects/Music_Converter/Recording%202026-10-22%20104414.mp4",
        alt: "Music Converter application walkthrough",
      },
    ],
    overview:
      "A PHP-based music converter web application featuring user authentication, file upload and organization, and dashboard functionality for managing media content.",
    details: [
      {
        title: "Media management",
        description:
          "Upload and organize files, then manage media content from a dedicated dashboard.",
      },
      {
        title: "User accounts",
        description:
          "User authentication supports an account-based experience for accessing the application and its media management tools.",
      },
    ],
    repo: "https://github.com/LoisDub/FinalProjectWithEarl",
  },
  {
    id: "pakamew",
    number: "02",
    title: "Pakamew / Stray Feeder",
    category: "Web development",
    label: "SHELTER SUPPORT PLATFORM",
    description:
      "Full-stack shelter support platform with a React + TanStack Router web app, Node.js + Hono backend, typed APIs, Better Auth security, Prisma/PostgreSQL persistence, observability tooling, and livestream device integration.",
    tags: ["React", "TanStack Router", "Node.js", "Hono", "Prisma", "PostgreSQL"],
    media: [
      {
        type: "image",
        src: "/projects/Pakamew/pakamew-demo-third-pov-320px-12fps.gif",
        alt: "Pakamew stray feeder demo from a third-person view",
      },
      {
        type: "image",
        src: "/projects/Pakamew/pakamew-demo-first-pov-320px-12fps.gif",
        alt: "Pakamew stray feeder demo from a first-person view",
      },
    ],
    overview:
      "Full-stack shelter support platform with a React + TanStack Router web app, Node.js + Hono backend, typed APIs, Better Auth security, Prisma/PostgreSQL persistence, observability tooling, and livestream device integration.",
    details: [
      {
        title: "Connected application",
        description:
          "A React interface with TanStack Router connects to a Node.js and Hono backend through typed APIs. Better Auth handles authentication, while Prisma and PostgreSQL provide persistence.",
      },
      {
        title: "Device integration",
        description:
          "Livestream device integration connects the platform to the stray feeder, with observability tooling supporting visibility into the system.",
      },
    ],
    repo: "https://github.com/mmsu-pawpatrol/pakamew",
  },
  {
    id: "weather-app",
    number: "03",
    title: "Weather App",
    category: "Desktop applications",
    label: "DESKTOP WEATHER APP",
    description:
      "A Java desktop weather app that shows current conditions and a 5-day forecast using live API data, with a clean UI, interactive map markers, and reusable component-based architecture.",
    tags: ["Java", "Live API data", "Interactive maps", "Desktop"],
    media: [
      {
        type: "image",
        src: "/projects/weather_app/weatherforecast-animation.gif",
        alt: "Weather App demo showing weather conditions and forecasts",
      },
    ],
    overview:
      "A Java desktop weather app that shows current conditions and a 5-day forecast using live API data, with a clean UI, interactive map markers, and reusable component-based architecture.",
    details: [
      {
        title: "Weather at a glance",
        description:
          "Live API data powers current conditions and a five-day forecast, with interactive map markers for exploring locations.",
      },
      {
        title: "Reusable architecture",
        description:
          "A component-based Java desktop interface keeps the weather presentation organized and its UI components reusable.",
      },
    ],
    repo: "https://github.com/daawaan4x/weather-app",
  },
  {
    id: "pokemon-almanac",
    number: "04",
    title: "Pokémon Almanac",
    category: "Web development",
    label: "POKÉMON EXPLORER",
    description:
      "A simple Pokémon almanac built with HTML, CSS, and JavaScript where users can search by type and explore Pokémon details quickly.",
    tags: ["HTML", "CSS", "JavaScript"],
    media: [
      {
        type: "image",
        src: "/projects/pokemon_almanac/giphy.gif",
        alt: "Pokémon Almanac demo showing Pokémon browsing and details",
      },
    ],
    overview:
      "A simple Pokémon almanac built with HTML, CSS, and JavaScript where users can search by type and explore Pokémon details quickly.",
    details: [
      {
        title: "Explore by type",
        description:
          "Search Pokémon by type and quickly explore their details through a straightforward browsing interface.",
      },
      {
        title: "Built for the browser",
        description:
          "HTML, CSS, and JavaScript provide the structure, styling, and interactions for the almanac.",
      },
    ],
    repo: "https://github.com/LoisDub/Pokemon_almanac",
  },
];
