import { fileURLToPath, URL } from 'node:url';

import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwind()],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            examples01: fileURLToPath(
                new URL('./notes/rehearsal-01/examples', import.meta.url),
            ),
            examples02: fileURLToPath(
                new URL('./notes/rehearsal-02/examples', import.meta.url),
            ),
        },
    },

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            },
        },
    },
});
