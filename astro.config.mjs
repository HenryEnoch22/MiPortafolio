// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://HenryEnoch22.github.io',
  // base: '/MiPortafolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});