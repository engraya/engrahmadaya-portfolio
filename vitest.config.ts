import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const root = fileURLToPath(new URL(".", import.meta.url));

// tsconfig maps "@*" -> "./*", so both `@/lib/x` and `@lib/x` resolve from root.
// Unlike tsconfig paths, Vite aliases don't fall back to node_modules, so the
// bare form must enumerate project dirs to avoid capturing scoped packages
// like @testing-library/*.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@\/(.*)$/, replacement: `${root}$1` },
      {
        find: /^@(actions|components|context|email|hooks|lib|public|src|themes|utils)(\/.*|$)/,
        replacement: `${root}$1$2`,
      },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["{lib,components,app,src}/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["lib/**", "components/**"],
    },
  },
});
