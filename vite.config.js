import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "framer-motion",
            "react-icons",
          ],
          // UI component chunks
          ui: ["react-icons/fa", "react-icons/ri", "react-icons/ai"],
          // Page chunks
          pages: [],
        },
      },
    },
  },
});
