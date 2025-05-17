// eslint.config.mjs
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  // 1) ignore non-source files
  {
    ignores: [
      "test/**",
      "**/*.md",
      "**/*.json",
      "**/*.html",
      "**/.gitignore",
      "**/.eslintignore",
      "**/.editorconfig",
      "**/.results.json",
      "**/.learn",
    ],
  },

  // 2) lint your JS files
  {
    files: ["**/*.{js,mjs,jsx}"],
    languageOptions: {
      parserOptions: { ecmaVersion: 2021, sourceType: "module" },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": ["error", { args: "none", varsIgnorePattern: "^_" }],
    },
  },
]);