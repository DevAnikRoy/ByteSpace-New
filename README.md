# ByteSpace

Marketing site and authentication screens for ByteSpace, an online course platform where learners discover courses and creators publish them. Built with Next.js App Router, TypeScript and Tailwind CSS.

## Pages

| Route     | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `/`       | Landing page: hero with search, partners, featured courses, categories, features, CTA, testimonials |
| `/signup` | Account registration                                                                                |
| `/login`  | Sign in with email or a social provider                                                             |
| any other | Custom 404 page, served with a `404` status and `noindex`                                           |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org) in strict mode
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens defined in `globals.css`
- `next/font` for Poppins and the self-hosted Satoshi typeface
- `next/image` for responsive, optimised images

## Getting started

Requires Node.js 20.9 or later.

```bash
git clone https://github.com/DevAnikRoy/ByteSpace-New.git
cd ByteSpace-New
npm install
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
    auth/                 auth layout, card, form fields and social sign-in
    layout/               header, mobile menu, footer and navigation links
    sections/             landing page sections
  fonts/                  Satoshi font files
public/
  icons/                  logos and UI icons
  images/                 photos, illustrations and shapes
```

## Implementation notes

- **Server-first:** every component renders on the server by default. Only interactive pieces (the mobile menu, course category tabs and auth forms) are client components.
- **Responsive:** layouts are tuned for mobile, tablet, laptop and wide desktop screens, with no horizontal scrolling at any width.
- **Accessible:** semantic landmarks and headings, labelled form fields and icon buttons, and decorative imagery hidden from assistive technology.
- **Reusable UI:** shared building blocks such as the course card, auth card and text field are composed into pages rather than duplicated.

## Environment variables

No environment variables are needed to run the project. When backend services are added, put their keys in `.env.local`. All `.env*` files are ignored by git.

## Roadmap

- Email/password and social authentication with Firebase
- Course search, course details and creator profile pages
