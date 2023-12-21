import { defineConfig } from 'vite';
import VitePluginSass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginSass(), // Adicione o plugin Sass aqui
  ],
});
