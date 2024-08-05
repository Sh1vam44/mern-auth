import { defineConfig, loadEnv, sortUserPlugins } from "vite";
import react from "@vitejs/plugin-react-swc";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});

// Load environment variables from .env file
