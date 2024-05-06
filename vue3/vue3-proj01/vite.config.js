import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import zipPack from "vite-plugin-zip-pack"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        zipPack({
            inDir: './dist',
            outDir: '.',
            outFileName: `dist.zip`,
            pathPrefix: ''
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
