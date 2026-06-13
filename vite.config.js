import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      // ignore the UI Launcher roaming folder that caused EBUSY
      ignored: [
        'C:/Users/Raga/AppData/Roaming/**',
        '**/node_modules/**'
      ]
    }
  }
});
