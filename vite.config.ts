import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "@assets": path.resolve(__dirname, './src/assets'),
        "@components":path.resolve(__dirname, './src/Components'),
        "@constants":path.resolve(__dirname, './src/constants'),
    },
},
  
})
