// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  css: ["@/assets/css/app.css"],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});