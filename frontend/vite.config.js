import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/astronaut-journal-app/',
  plugins: [react()],
  server: {
    open: true, // Tells Vite to open the browser automatically
  },
})
