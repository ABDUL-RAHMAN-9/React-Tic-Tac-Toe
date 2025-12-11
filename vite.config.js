import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/React-Tic-Tac-Toe/",

    // CLEANER BUILD CONFIG
    build: {
        sourcemap: false,
    },
});
