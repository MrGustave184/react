import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: "src", //only if index.html is not at the root of the project
})