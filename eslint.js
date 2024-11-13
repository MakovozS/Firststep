import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
  "plugin: prettier / recommended",
];
