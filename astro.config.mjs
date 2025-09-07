// @ts-check
import { defineConfig } from 'astro/config'
import { webcore } from 'webcoreui/integration'
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [webcore()],
      vite: {
    plugins: [tailwindcss()],
  },
})