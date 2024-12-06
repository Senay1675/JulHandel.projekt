import { defineConfig } from 'vite'
import "@testing-library/jest-dom";

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
