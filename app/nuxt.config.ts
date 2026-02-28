// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  colorMode: {
    fallback: 'dark',
    classSuffix: "",
  },

  css: ["~/assets/css/tailwind.css"],

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/content",
    "nuxt-swiper",
    "@nuxtjs/color-mode",
    "nuxt-security",
    "@nuxt/ui"
  ],

  // Allow Nuxt Content client-side SQLite WASM to compile under CSP (dev only).
  // See: Nuxt Content v3 WASM + CSP issues [[1]] [[2]]
  security: {
    headers: {
      // In dev, Nuxt/Vite uses inline scripts for dev tooling/HMR.
      // Disabling CSP locally avoids breaking the app mount.
      contentSecurityPolicy: process.env.NODE_ENV === 'development'
        ? false
        : {
            // Keep your existing policy here, but add WASM support for Nuxt Content if you need it.
            // Minimal example (adjust to your real production CSP requirements):
            'script-src': ["'self'", "'wasm-unsafe-eval'"],
          },
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  },

  image: {
    provider: 'netlify',
  },

  googleFonts: {
    families: {
      "Squada One": true
    },
    preload: true
  },
})
