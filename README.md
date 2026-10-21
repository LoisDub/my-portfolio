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
- `src/app/components/ProjectPreview.tsx`: CSS-based illustrative project previews.
- `src/app/globals.css`: visual styles and responsive layouts.

The personal portfolio entry links to this repository. The dashboard and storefront entries are explicitly labeled interface concepts, not shipped products or client work. Replace these entries and their preview artwork when adding real projects.

## Production

```sh
npm run build
npm start
```

The production build includes TypeScript validation. Typography uses system fonts and requires no remote font downloads. Navigation, filtering, and dialogs support keyboard use; reduced-motion preferences disable smooth scrolling and transitions.
