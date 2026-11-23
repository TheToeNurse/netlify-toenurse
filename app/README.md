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

Cloudflare Pages uses:

```bash
pnpm generate
```

Output: `.output/public`

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

- Node.js `>=22.22.0`
- pnpm 9+