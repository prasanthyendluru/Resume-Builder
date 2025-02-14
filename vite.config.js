import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Treat .js files as JSX
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx", // Ensure .js files are treated as JSX
      },
    },
  },
});