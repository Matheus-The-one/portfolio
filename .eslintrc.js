module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    "prettier/prettier": ["warn", { semi: true }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off", // Disable anchor href validation
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off", // Disable the rule for no explicit any
    "no-console": "off", // Disable console.log warning
  },
};
