import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const getBasePath = (): string => {
  if (!process.env.GITHUB_ACTIONS) {
    return "/";
  }

  const repoFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const repoName = repoFromEnv ?? "portfolio-site";
  return `/${repoName}/`;
};

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    css: true
  }
});
