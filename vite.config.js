import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  root: path.resolve(__dirname, "demo"),
  plugins: [react()],
  resolve: {
    alias: {
      "@jitendra/ui": path.resolve(__dirname, "index.js"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist-demo"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
