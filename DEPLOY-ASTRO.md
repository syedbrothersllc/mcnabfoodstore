# Running & Deploying the Astro Site

Your Worker API, Google Sheet, and Google Form are all untouched — this only
replaces the frontend (`index.html`) with a proper component-based project.

## 1. Local setup

```bash
cd mcnab-astro
npm install
npm run dev
```

Opens at `http://localhost:4321`. Edit any `.astro` file and it hot-reloads.

## 2. Everything store-specific lives in one file

Open **`src/config.ts`** — name, address, hours, phone, and the two backend
URLs (Worker API + Google Form) are all there. Add your phone number here to
enable the click-to-call button in the Inquiry section — it's hidden until
you do.

## 3. Build

```bash
npm run build
```

Outputs static files to `dist/` — that's what you deploy.

## 4. Deploy to Cloudflare Pages

Since your domain and Pages project already exist, easiest path:

- **Option A — keep using "Upload assets":** run `npm run build`, then upload
  the contents of `dist/` the same way you uploaded `index.html` before.
- **Option B — connect Git (recommended going forward):** push this folder to
  a GitHub repo, then in Cloudflare Pages choose **Connect to Git** instead.
  Set build command `npm run build`, output directory `dist`. Every push
  auto-deploys — no more manual uploads.

Your custom domain (`mcnabfoodstore.com`) stays attached to the Pages project
either way — nothing to reconfigure there.

## 5. What's new vs. the old single-file site

- **SEO**: proper meta tags, Open Graph tags, canonical URL, sitemap
  (auto-generated at `/sitemap-index.xml`), and `ConvenienceStore` structured
  data so Google can understand your hours/address/name directly.
- **Live "Open now / Closed" badge** in the header, computed from your hours
  in `config.ts`.
- **Sort control** (Name A–Z/Z–A, Price low–high/high–low) next to search.
- **Skeleton loading cards** instead of a plain "Loading…" message.
- **Map + directions link** in the inquiry section, generated from your
  address automatically — no API key needed.
- **Out-of-stock items** now visually recede (dimmed) instead of looking
  identical to in-stock ones.
- **Custom 404 page** in the same brand style.
- **UPC search** — already wired in from the last update, carried over here.

## 6. Component map, if you want to keep customizing

- `src/components/Header.astro` — top banner, hours badge, CTA
- `src/components/Catalog.astro` — category nav, search/sort, item grid, pagination (all the interactive logic)
- `src/components/Inquiry.astro` — form embed, map, message-type guide
- `src/components/Footer.astro` — footer
- `src/layouts/Layout.astro` — SEO/meta wrapper every page uses
- `src/styles/global.css` — brand colors/fonts as design tokens
