# Medicare Website Redesign

A modern, responsive frontend redesign concept for the Hungarian Medicare healthcare website, developed as a technical assignment.

The project demonstrates a redesigned website experience with improved navigation, accessible interface patterns, interactive components, and consistent responsive layouts.

All website content is presented in Hungarian.

**Live Demo:** https://medicare-website-redesign.vercel.app/

> **Note:** This is an independent demonstration project, not an official Medicare website.

## Tech Stack

- **React** — component-based user interfaces
- **TypeScript** — type-safe frontend development
- **Vite** — development server and production builds
- **Tailwind CSS v4** — utility-first styling and responsive layouts
- **React Router** — client-side navigation and routing
- **Lucide React** — interface icons
- **React Icons** — additional icons, including social media icons
- **Vercel** — hosting and deployment

## Implemented Pages

### Homepage (`/`)

The redesigned homepage introduces Medicare's services and hospital facilities through a modern, responsive interface.

Features include:

- Hero section with prominent messaging and quick navigation cards
- Featured healthcare services
- Interactive healthcare service search
- Hospital showcase carousel
- News, articles, and promotional offers

### Surgeries (`/mutetek`)

A dedicated overview page introducing Medicare's surgical services.

Features include:

- Page hero with introductory information
- Promotional banner
- Surgical specialties presented as responsive cards
- Hospital stay and patient experience section

### Oncology Surgeries (`/mutetek/daganatsebeszeti-mutetek`)

A detailed subpage presenting oncology surgery services.

Features include:

- Overview of available surgical procedures
- Introduction to oncology surgery
- Interactive doctor carousel
- Frequently asked questions with expandable answers

### Additional Routes

Other navigation destinations use temporary Hungarian-language development placeholders.

These routes demonstrate the intended website navigation structure without implementing every page of the original Medicare website.

## Key Features

### Responsive Navigation

- Desktop navigation with dropdown menus
- Mobile navigation with expandable menu sections
- Contact information and quick-access links
- Sticky main navigation
- Responsive layouts for mobile, tablet, and desktop

### Interactive Service Search

- Searchable healthcare service data
- Hungarian accent-insensitive text matching
- Animated search suggestions and results
- Navigation to relevant service routes

The search operates on predefined demonstration data rather than a live healthcare database.

### Interactive Carousels

- Hospital showcase carousel on the homepage
- Doctor carousel on the oncology surgery page
- Previous and next navigation
- Slide indicators and counters

### FAQ Accordion

The oncology surgery page includes an interactive FAQ section with expandable answers.

### Newsletter Subscription

A responsive newsletter subscription interface featuring:

- Name and email fields
- Basic browser form validation
- Decorative envelope illustrations
- Demonstration feedback after submission

The newsletter is frontend-only and does not send or store subscriber information.

### Accessibility and Usability

The interface includes several accessibility-oriented features:

- Semantic HTML elements
- Descriptive image alternative text
- Accessible labels for interactive controls
- Keyboard-accessible navigation elements
- Visible focus states
- Appropriate ARIA attributes
- Reduced-motion support for selected animations
- Responsive typography and layouts
- Scroll-to-top behavior during route navigation

A floating accessibility button is also included as a visual demonstration. It is not connected to a complete accessibility settings interface.

### Visual Design

- Medicare-inspired brand colours
- Vector-based logo and interface icons
- Optimized image assets
- Consistent typography and component styling
- Responsive cards, grids, and content sections
- Shared vertical spacing utility

Standard content sections use consistent responsive padding:

| Screen size | Vertical padding |
| ----------- | ---------------- |
| Mobile      | 48px             |
| Tablet      | 64px             |
| Desktop     | 80px             |

Page heroes and structural layout elements retain their own spacing rules.

## Project Structure

```text
medicare-redesign/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── doctors/
│   │       ├── hospital/
│   │       ├── logos/
│   │       ├── news/
│   │       ├── services/
│   │       └── surgeries/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── layout/
│   │   └── surgeries/
│   │       └── oncology/
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

### Main Directories

- `components/home/` — homepage sections and interactive components
- `components/layout/` — shared header, footer, navigation, and newsletter components
- `components/common/` — reusable interface components
- `components/surgeries/` — surgical services page components
- `components/surgeries/oncology/` — oncology surgery page components
- `data/` — structured demonstration content
- `layouts/` — shared page layouts
- `pages/` — route-level page components
- `assets/images/` — website images and branding assets

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/GOULASHSUP/medicare-redesign.git
cd medicare-redesign
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build process runs TypeScript checks and generates production files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

This starts a local server for previewing the production build.

## Deployment

The project is deployed on Vercel.

**Live Website:** https://medicare-website-redesign.vercel.app/

The `vercel.json` configuration supports client-side routing by rewriting requests to the application entry point.

This allows users to visit or refresh individual routes without encountering server-side 404 errors.

## Project Scope and Limitations

This project was created as a frontend redesign demonstration rather than a complete production healthcare platform.

The following functionality is implemented:

- Responsive page layouts and navigation
- Interactive service search using demonstration data
- Hospital and doctor carousels
- FAQ accordion
- Client-side routing
- Responsive forms and interface components

The following features are demonstrations or placeholders:

- Newsletter subscriptions are not connected to a backend.
- The accessibility button does not open a functional settings interface.
- Some navigation destinations display development placeholder pages.
- Online appointment booking and other external healthcare services are not integrated.
- Healthcare service information is presented as demonstration content.

No patient information is collected or processed by the application.

## Disclaimer

This project was developed independently for demonstration and evaluation purposes.

Medicare names, trademarks, logos, and other brand elements belong to their respective owners.

The project is not affiliated with, sponsored by, or endorsed by Medicare.
