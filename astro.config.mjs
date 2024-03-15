import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['oslo']
    }
  },
  integrations: [db(), tailwind()],
  output: "server",
  adapter: vercel()
});