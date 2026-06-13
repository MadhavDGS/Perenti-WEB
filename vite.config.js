import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'EVAL') return;
        warn(warning);
      }
    },
    rolldownOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'EVAL') return;
        warn(warning);
      }
    }
  }
})
