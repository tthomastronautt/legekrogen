import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base:"legekrogen",
    resolve: {
        alias: {
            "@": "/src",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@layouts": "/src/layouts",
            "@pages": "/src/pages",
            "@routes": "/src/routes",
            "@utils": "/src/utils",
            "@variables": "/src/variables",
            "@hooks": "/src/hooks",
            "@context": "/src/context",
        },
    },
    plugins: [react()],
});
