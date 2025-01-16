import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Certifique-se de que está ativado o modo de escopo local
    },
  },
});
