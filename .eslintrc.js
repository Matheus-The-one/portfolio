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
    "prettier/prettier": ["warn", { semi: true }], // Change to "warn" to avoid build failure on formatting issues
    "react/react-in-jsx-scope": "off", 
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": ["warn"], // Keep as "warn" to allow usage of "any" type without build failure
    "no-console": "warn", // Optionally add this rule to warn about console usage without failing the build
  },
};
