# LoisDub — Portfolio

A responsive engineering portfolio built with Next.js, React, TypeScript, and CSS. The design uses warm neutral backgrounds, forest-green accents, and editorial typography, with a project gallery, native project dialogs, technical skills, and direct contact links.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. In Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

## Update the content

- `src/app/content.ts`: profile name, email, GitHub URL, and project descriptions, tags, and repository links.
- `src/app/page.tsx`: about text and contact section.
- `src/app/components/skills.tsx`: technical toolkit.
- `src/app/components/ProjectPreview.tsx`: MP4 and animated GIF project previews.
- `src/app/globals.css`: visual styles and responsive layouts.

The project gallery features Music Converter, Pakamew / Stray Feeder, Weather App, and Pokémon Almanac, with demos from `public/projects` and links to their GitHub repositories. Project details include video controls for MP4 demos and both camera views for Pakamew. Add or update demos through each project's `media` array in `src/app/content.ts`.

## Production

```sh
npm run build
npm start
```

The production build includes TypeScript validation. Typography uses system fonts and requires no remote font downloads. Navigation, filtering, and dialogs support keyboard use; reduced-motion preferences disable smooth scrolling and transitions.
