import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make the server accessible externally
    port: process.env.PORT || 5173,  // Use the port provided by Render, default to 5173 if not set
  },
})
