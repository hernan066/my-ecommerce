/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    include: ["apps/backend/test/**/*.test.ts"],
    environment: "node",
  },
  resolve: {
    alias: {
      "@domain": path.resolve(__dirname, "./domain/src"),
    },
  },
});
