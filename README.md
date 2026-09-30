# ByteSpace

Marketing site and authentication screens for ByteSpace, an online course platform where learners discover courses and creators publish them. Built with Next.js App Router, TypeScript and Tailwind CSS.

## Pages

| Route     | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `/`       | Landing page: hero with search, partners, featured courses, categories, features, CTA, testimonials |
| `/signup` | Account registration with Firebase email/password                                                   |
| `/login`  | Sign in with Firebase email/password                                                                |
| any other | Custom 404 page, served with a `404` status and `noindex`                                           |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org) in strict mode
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens defined in `globals.css`
- `next/font` for Poppins and the self-hosted Satoshi typeface
- `next/image` for responsive, optimised images
- [Firebase Authentication](https://firebase.google.com/docs/auth) for email/password accounts
- [GSAP](https://gsap.com) with ScrollTrigger for page-load and scroll animations

## Getting started

Requires Node.js 20.9 or later.

```bash
git clone https://github.com/DevAnikRoy/ByteSpace-New.git
cd ByteSpace-New
npm install
cp .env.example .env.local   # then fill in your Firebase web app config
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Lint the project with ESLint |

## Project structure

```
src/
  app/
    page.tsx              landing page
    login/                sign-in route
    signup/               registration route
    not-found.tsx         404 page
    layout.tsx            root layout, fonts and metadata
    globals.css           theme tokens and shared styles
  components/
    auth/                 auth layout, card, forms, social sign-in and auth state provider
    layout/               header, account menu, mobile menu, footer and navigation links
    motion/               GSAP page animations
    sections/             landing page sections
  lib/
    firebase.ts           Firebase app, auth helpers and error messages
  fonts/                  Satoshi font files
public/
  icons/                  logos and UI icons
  images/                 photos, illustrations and shapes
```

## Implementation notes

- **Server-first:** every component renders on the server by default. Only interactive pieces (the mobile menu, course category tabs, auth forms and account menu) are client components. The Firebase SDK is loaded on demand, so it stays out of the initial bundle on pages that don't need it.
- **Responsive:** layouts are tuned for mobile, tablet, laptop and wide desktop screens, with no horizontal scrolling at any width.
- **Accessible:** semantic landmarks and headings, labelled form fields and icon buttons, and decorative imagery hidden from assistive technology.
- **Reusable UI:** shared building blocks such as the course card, auth card and text field are composed into pages rather than duplicated.

## Environment variables

Authentication needs a Firebase project with the Email/Password sign-in provider enabled. Copy `.env.example` to `.env.local` and fill in the values from your Firebase web app settings:

| Variable                           | Description             |
| ---------------------------------- | ----------------------- |
| `NEXT_PUBLIC_FIREBASE_API_KEY`     | Web API key             |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth domain             |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID`  | Firebase project ID     |
| `NEXT_PUBLIC_FIREBASE_APP_ID`      | Firebase web app ID     |

`.env.local` is ignored by git. When deploying, add the same variables to your hosting provider and add the deployed domain to **Authentication → Settings → Authorized domains** in the Firebase console.

## Roadmap

- Google and Facebook sign-in
- Course search, course details and creator profile pages
