import { defineConfig } from 'cypress';
import devConfig from './configs/dev.config.js';
import intConfig from './configs/int.config.js';

const targetEnv = process.env.TARGET_ENV === 'int' ? 'int' : 'dev';
const envConfig = targetEnv === 'int' ? intConfig : devConfig;

export default defineConfig({
  e2e: {
    baseUrl: envConfig.baseUrl,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config;
    }
  },
  env: {
    targetEnv,
    environmentName: envConfig.environmentName
  },
  video: false,
  screenshotOnRunFailure: true
});
