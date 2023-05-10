import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@components':path.resolve(__dirname, './src/components'),
      '@containers':path.resolve(__dirname, './src/containers'),
      '@routes':path.resolve(__dirname, './src/routes'),
      '@styles':path.resolve(__dirname, './src/styles'),
    }
  }

})
