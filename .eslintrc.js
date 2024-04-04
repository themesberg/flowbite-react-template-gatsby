/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
    },
  ],
  ignorePatterns: ["public"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["twMerge", "createTheme"],
      classRegex: "^(class(Name)|theme)?$",
    },
  },
  plugins: ["react"],
  rules: {},
};
