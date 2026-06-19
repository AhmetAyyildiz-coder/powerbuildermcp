import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://powerbuildermcp.com',
  // GitHub Pages: uncomment next line if using project pages before custom domain
  // base: '/powerbuildermcp',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
