import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./", import.meta.url)) } },
  test: {
    environment: "node",
    env: { NEXT_PUBLIC_API_BASE_URL: "http://api.test/" },
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", ".next/**"],
  },
});
