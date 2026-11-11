import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages and Vercel support
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/Feedback-/' : '/',
})