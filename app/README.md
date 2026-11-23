# The Toe Nurse (Nuxt 4)

Marketing site for The Toe Nurse, built with Nuxt 4, Tailwind CSS v4, and Nuxt Content. Deployed as a **static** site on Cloudflare Pages.

## Setup

Install dependencies (from this directory):

```bash
pnpm install
```

Copy environment variables:

```bash
cp .env.example .env
```

Set `API_URL` to your API Gateway base URL (no trailing slash), e.g. `https://xxxx.execute-api.us-east-1.amazonaws.com/production`.

## Development

```bash
pnpm dev
```

## Static production build

This project is **static only**. The default `build` script runs `nuxt generate`.

```bash
pnpm build
# or
pnpm generate
```

Output: `.output/public`

### Cloudflare Pages (dashboard)

| Setting | Value |
|---------|--------|
| Root directory | `app` |
| Build command | `pnpm install && pnpm build` (or `npm run build` if using npm) |
| Build output | `.output/public` (from `wrangler.toml` `pages_build_output_dir`) |
| `NODE_VERSION` | `26` |
| `PNPM_VERSION` | `10` (optional) |
| `API_URL` | API Gateway base URL (build-time; baked into static bundle) |

On Pages CI, `@nuxt/content` auto-detects `CF_PAGES` and would switch to D1 unless `nitro.preset` is `static` (configured in `nuxt.config.ts`). Content indexing uses Node’s built-in SQLite (`content.experimental.sqliteConnector: native`), not `better-sqlite3`.

## Local preview (Cloudflare Pages)

Uses `wrangler.toml` (`pages_build_output_dir = ".output/public"`):

```bash
pnpm preview
```

## Manual Pages deploy (optional)

After `wrangler login`, deploy the generated static output:

```bash
pnpm run deploy:pages
```

For Git-connected Projects, connect the repo with **root directory** `app`, **build command** `pnpm generate`, and let Wrangler pick up the output directory from `wrangler.toml`.

## Requirements

- Node.js `>=26.13.1`
- pnpm 9+