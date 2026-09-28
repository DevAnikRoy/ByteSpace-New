# ByteSpace

Course site for ByteSpace. Next.js, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment

Local secrets go in `.env.local`. That file is gitignored.

Do not commit `.env` files, private keys, or a Firebase service account JSON. The Firebase web config used in the browser is public by design, but it still belongs in `.env.local`, not in source.

## Structure

- `src/app` — routes and global styles
- `src/fonts` — Satoshi
- `public/images` — photos
- `public/icons` — icons
# ByteSpace-New
