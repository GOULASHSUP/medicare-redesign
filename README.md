# Medicare Website Redesign

A responsive frontend redesign concept for the Hungarian Medicare website, created as a development assignment.

The project focuses on clear navigation, accessible interfaces, and a consistent experience across desktop, tablet, and mobile devices. Website content is presented in Hungarian.

> **Note:** This is a demonstration project, not an official Medicare website.

## Tech Stack

- **React** and **TypeScript** — component-based frontend development
- **Vite** — development server and production builds
- **Tailwind CSS v4** — styling and responsive layouts
- **React Router** — client-side routing
- **Lucide React** and **React Icons** — interface and social icons
- **Vercel** — deployment

## Features

- Responsive header with desktop dropdown navigation and mobile accordions
- Hero section with quick links to major healthcare categories
- Featured healthcare service cards
- Interactive service search with Hungarian accent-insensitive matching
- Hospital showcase carousel with navigation controls
- News and offers section
- Newsletter subscription interface (frontend demonstration only)
- Responsive footer with contact details, useful links, and related websites
- Dedicated URLs for navigation items, services, and news articles
- Temporary Hungarian-language placeholder pages for unfinished routes
- Scroll-to-top behavior when navigating between routes
- Hungarian-language metadata and a custom favicon

## Project Structure

```text
medicare-redesign/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── home/
│   │   └── layout/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository (replace the placeholder with the repository's Git URL):

```bash
git clone <repository-url>
cd medicare-redesign
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

### Production Build

```bash
npm run build
```

This runs TypeScript checks and creates the production build in `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for Vercel. The `vercel.json` rewrite serves the application entry point for client-side routes, allowing direct visits and refreshes on routes handled by React Router.

## Project Status

The homepage and its primary interactive components are implemented. Other routes currently display development placeholders rather than finished pages. The newsletter interface is not connected to a subscription service.

## Disclaimer

This project was created for demonstration and evaluation purposes. Medicare names, trademarks, and brand elements belong to their respective owners. This project is not affiliated with or endorsed by Medicare.
