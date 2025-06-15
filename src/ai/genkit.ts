// genkit.config.ts
import { defineConfig } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';

export default defineConfig({
  plugins: [googleAI()],
  tracing: {
    provider: 'none', // disables OpenTelemetry to fix the Jaeger error
  },
});
