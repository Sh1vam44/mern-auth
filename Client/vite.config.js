import { defineConfig, loadEnv, sortUserPlugins } from "vite";
import react from "@vitejs/plugin-react-swc";
import { plugin } from "mongoose";

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
