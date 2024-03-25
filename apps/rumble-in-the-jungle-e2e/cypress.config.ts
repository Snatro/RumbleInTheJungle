import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run rumble-in-the-jungle:serve:development',
        production: 'nx run rumble-in-the-jungle:serve:production',
      },
      ciWebServerCommand: 'nx run rumble-in-the-jungle:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
