import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],

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

    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts'],
        css: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
        },
    },
});
