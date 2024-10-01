import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "app/tests/integration/**/*.spec.ts",
    baseUrl: "http://localhost:5173",
  },
});
