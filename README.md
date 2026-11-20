Medicare Website Redesign

A modern, responsive redesign concept for the Medicare Hungary website, developed as a frontend development assignment.

The project focuses on improving the website’s visual presentation, navigation, usability, and responsiveness while maintaining the original Hungarian-language content and service categories.

Built with React, TypeScript, Vite, and Tailwind CSS.

Tech Stack

- React — Component-based user interface
- TypeScript — Type-safe frontend development
- Vite — Development server and production build tooling
- Tailwind CSS v4 — Utility-first styling and responsive layouts
- React Router — Client-side navigation and routing
- Lucide React — Interface icons
- React Icons — Social media icons
- Vercel — Hosting and deployment

Features

Responsive Design

The website is designed for desktop, tablet, and mobile devices, with responsive layouts throughout.

Navigation

- Responsive header and navigation bar
- Desktop dropdown menus
- Mobile navigation with expandable categories
- Dedicated routes for navigation items and services
- Automatic scroll-to-top behaviour when navigating between pages

Homepage

The redesigned homepage includes:

- Hero section with service navigation cards
- Featured healthcare services
- Interactive service search with Hungarian accent-insensitive matching
- Hospital showcase carousel
- News, events, and offers section
- Newsletter subscription interface
- Responsive footer with contact information and useful links

Service Search

The interactive search component allows users to find healthcare services and website sections.

Features include:

- Real-time filtering
- Accent-insensitive Hungarian text matching
- Navigation to relevant pages
- Responsive search results

Routing and Development Pages

React Router handles internal navigation without full page reloads.

Individual navigation items, services, and news articles have dedicated URLs.

Pages that have not yet been implemented display a temporary Hungarian-language development placeholder with a link back to the homepage.

SEO and Accessibility

The project includes:

- Hungarian-language page metadata
- Custom favicon
- Semantic HTML structure
- Descriptive image alternative text
- Accessible navigation controls and labels
- Keyboard-accessible interactive elements

Project Structure

medicare-redesign/
├── public/
│ └── favicon.svg
├── src/
│ ├── assets/
│ │ └── images/
│ ├── components/
│ │ ├── home/
│ │ └── layout/
│ ├── data/
│ ├── layouts/
│ ├── pages/
│ ├── App.tsx
│ ├── index.css
│ └── main.tsx
├── index.html
├── package.json
├── vercel.json
└── README.md

Getting Started

Prerequisites

- Node.js
- npm

Installation

Clone the repository:

git clone <repository-url>
cd medicare-redesign

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL displayed in the terminal.

Production Build

To create a production build:

npm run build

This runs TypeScript compilation and generates an optimized production bundle in the dist/ directory.

To preview the production build locally:

npm run preview

Deployment

The project is configured for deployment on Vercel.

The vercel.json file provides a fallback to index.html, allowing React Router to handle client-side routes when users directly visit or refresh a page.

Changes pushed to the connected GitHub repository can trigger automatic Vercel deployments.

Project Status

This project is a frontend redesign concept and is not an official Medicare production website.

The homepage and its primary interactive components have been implemented.

Additional pages currently display development placeholders. Features such as newsletter subscriptions are interface demonstrations and are not connected to production backend services.

Disclaimer

This project was created for demonstration and evaluation purposes.

Medicare names, trademarks, and related brand elements belong to their respective owners.

This project is not affiliated with or endorsed by Medicare.
