import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';

dotenv.config();

console.log('REACT_APP_AUTH0_DOMAIN:', process.env.REACT_APP_AUTH0_DOMAIN);
console.log('REACT_APP_AUTH0_CLIENT_ID:', process.env.REACT_APP_AUTH0_CLIENT_ID);

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      replace({
        // Pass the environment variables to the client-side code
        __REACT_APP_AUTH0_DOMAIN__: JSON.stringify(process.env.REACT_APP_AUTH0_DOMAIN),
        __REACT_APP_AUTH0_CLIENT_ID__: JSON.stringify(process.env.REACT_APP_AUTH0_CLIENT_ID),
      }),
    ],
    optimizeDeps: {
      include: ['react-router-dom'],
    },
  };
});
