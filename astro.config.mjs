import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://umerkniazi.github.io',
  base: '/',
  output: 'static',
  integrations: [icon(), sitemap()],
});