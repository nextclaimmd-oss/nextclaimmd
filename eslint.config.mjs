// eslint.config.mjs
import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  // Use the Next.js core web vitals config directly
  next({
    extends: ["next/core-web-vitals"],
  }),
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
]);
