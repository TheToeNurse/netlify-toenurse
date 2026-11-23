 # Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). 

## Draft [2.1.0] - 2026-04-17

### Changed

- Migrate hosting from Netlify to Cloudflare Pages (`pnpm generate` → `.output/public`, `app/wrangler.toml`).
- Cloudflare Pages static build: `nitro.preset = static`, native SQLite for `@nuxt/content`, `build` → `nuxt generate`.
- Tailwind CSS v4 CSS-first setup (`main.css`, remove `tailwind.config.js`).
- `@nuxt/image` uses IPX for static build-time images; production CSP includes API Gateway `connect-src`.
- Nitro prerender for blog, service, and legal routes.

## [2.0.0] - 2026-03-01

### Changed

- Upgrade all application dependencies, but specifically Nuxt.js and Tailwind CSS to version 4.x