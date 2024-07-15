import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "ali-razmjooei",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "ali-razmjooei",
    project: "apple_website"
  }), sentryVitePlugin({
    org: "ali-razmjooei",
    project: "apple_website"
  }), sentryVitePlugin({
    org: "ali-razmjooei",
    project: "apple_website"
  })],

  build: {
    sourcemap: true
  }
})