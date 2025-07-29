import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Prettier 규칙을 ESLint 룰로 적용
      "prettier/prettier": "error",
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
    env: {
      node: true,
      es2021: true,
    },
  },
];
