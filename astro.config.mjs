import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://umerkniazi.github.io',
  integrations: [react()],
  build: {
    inlineStylesheets: 'always'
  }
});