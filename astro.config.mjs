import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? "http://localhost:4321" : "https://luna-landing-rust.vercel.app/",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  output: "server",
  adapter: vercel()
});