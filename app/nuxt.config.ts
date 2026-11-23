export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // Avoid duplicate `useAppConfig` Nitro auto-imports (nitropack vs @nuxt/nitro-server).
  // Re-enable when fixed upstream: https://github.com/nuxt/nuxt/issues/34812
  experimental: {
    serverAppConfig: false,
  },
  future: {
    compatibilityVersion: 4,
  },

  css: [
      "~/assets/css/main.css"
  ],

  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "nuxt-swiper",
    "nuxt-security",
    "@nuxt/ui"
  ],

  // Static site only (Cloudflare Pages). Prevents @nuxt/content from treating the
  // build as a Cloudflare Worker deploy and requiring D1 / better-sqlite3 at runtime.
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  content: {
    experimental: {
      // Node 22+ built-in SQLite — no native better-sqlite3 compile on CI (e.g. CF Pages).
      sqliteConnector: 'native',
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/service/**': { prerender: true },
    '/legal/**': { prerender: true },
  },

  // Production CSP mirrors former Netlify headers (contact form → API Gateway).
  security: {
    headers: {
      contentSecurityPolicy: process.env.NODE_ENV === 'development'
        ? false
        : {
            'default-src': ["'self'"],
            'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
            'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
            'img-src': ["'self'", 'data:', '*'],
            'script-src': ["'self'", "'wasm-unsafe-eval'"],
            'connect-src': [
              "'self'",
              'https://*.execute-api.us-east-1.amazonaws.com',
            ],
          },
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  },

  // Static SSG: optimize images at build time via IPX (no Cloudflare Images binding).
  image: {
    provider: 'ipx',
  },

  vite: {
    optimizeDeps: {
      include: [
        "remark-gfm",
        "remark-emoji",
        "remark-mdc",
        "remark-rehype",
        "rehype-raw",
        "parse5",
        "unist-util-visit",
        "unified",
        "debug",
        "extend"
      ]
    }
  }

})
