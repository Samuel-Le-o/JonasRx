import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Ensure this modern plugin import is present!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})