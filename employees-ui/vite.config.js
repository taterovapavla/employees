import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    strictPort: true,
    host: true,
    proxy: {
      "/api": "http://localhost:3002",
    },
  },
});
