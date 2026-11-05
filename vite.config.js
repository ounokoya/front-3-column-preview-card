import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base : le site est servi par GitHub Pages sous /front-3-column-preview-card/
export default defineConfig({ base: '/front-3-column-preview-card/', plugins: [tailwindcss()] })
