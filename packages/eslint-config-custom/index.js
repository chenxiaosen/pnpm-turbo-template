module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
  ],
  rules: {
    "no-console": import.meta.env.MODE === "production" ? "warn" : "off",
    "no-debugger": import.meta.env.MODE === "production" ? "warn" : "off",
    "vue/require-default-prop": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/html-self-closing": ["off"],
    "vue/singleline-html-element-content-newline": ["off"],
    "vue/html-closing-bracket-newline": ["off"],
    "vue/html-indent": "off",
    "@typescript-eslint/no-this-alias": "off",
  },
};
