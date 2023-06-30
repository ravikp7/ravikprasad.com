import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind({
    config: {
      applyBaseStyles: true
    }
  }), preact({
    compat: true
  })],
  markdown: {
    syntaxHighlight: 'prism'
  },
  output: "server",
  adapter: netlify()
});