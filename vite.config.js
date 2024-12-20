import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  server: { https: true }, // Not needed for Vite 5+
  plugins: [react(), mkcert()],
  publicDir: 'assets',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

