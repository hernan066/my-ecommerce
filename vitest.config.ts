/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["apps/backend/test/**/*.test.ts", "domain/test/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@domain": path.resolve(__dirname, "domain/src"),
      "@backend": path.resolve(__dirname, "apps/backend/src"),
      "@test": path.resolve(__dirname, "apps/backend/test"),
    },
  },
});
