import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import fs from 'fs';

// Cargamos el archivo .env
const env = dotenv.parse(fs.readFileSync('.env'));

// Obtenemos la dirección IP
const ip = env.MI_IP || 'localhost'; // Si MI_IP no está definido, usamos 'localhost' como valor predeterminado

export default defineConfig({
  server: {
    hmr: {
        host: ip,
    },
  },
  plugins: [
    laravel({
      input: [
        'resources/js/app.jsx',
        'resources/js/app.css'
      ],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      'bootstrap': 'bootstrap/dist/css/bootstrap.min.css',
    },
  },
});
