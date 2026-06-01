# Janmesh Joshi · Portfolio

Personal portfolio site for Janmesh Joshi, AI & ML Engineer based in Dublin, Ireland.

## Stack

- React 19 + Create React App
- Tailwind CSS 3
- Lucide React icons

## Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Output goes to `build/`. Serve locally with:

```bash
npx serve -s build
```

## Configuration

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `REACT_APP_FORMSPREE_URL` | Formspree endpoint for the contact form |
| `REACT_APP_SITE_URL` | Public site URL (defaults to `https://janmeshjoshi.dev`) |

Without Formspree, the contact form falls back to opening the user's email client.

## Resume

Place your PDF at `public/janmesh-joshi-resume.pdf`. If you have an older file named `Janmesh Resume.pdf`, rename it to match.

## Deploy

Works on Vercel, Netlify, GitHub Pages, or any static host. Set `REACT_APP_SITE_URL` to your production domain before building.

## Structure

```
src/
  components/   UI sections (Hero, Projects, Contact, …)
  data/         Content and site constants
  hooks/        Scroll, reveal, accessibility hooks
  utils/        Helpers
```

## License

Private · © Janmesh Joshi
