  import { defineConfig } from "vite";
  import svgr from 'vite-plugin-svgr'
  import dns from 'dns'
  import react from "@vitejs/plugin-react";

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react(), svgr()],
    server: {
      host: 'localhost',
      port: 3000
    }
  });
