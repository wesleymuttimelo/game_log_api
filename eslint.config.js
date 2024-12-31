import jsdoc from "eslint-plugin-jsdoc";
import promise from "eslint-plugin-promise";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{js,ts}"], // Arquivos alvo (JavaScript e TypeScript)
    languageOptions: {
      ecmaVersion: 2021, // Suporte ao ES2021
      sourceType: "module", // Suporte a módulos ECMAScript
      parser: typescriptParser, // Parser para TypeScript
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      jsdoc,
      promise,
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
    ignores: [
      // Ignorar pastas e arquivos desnecessários
      "node_modules",
      "dist",
      "build",
    ],
  },
  prettierConfig, // Configuração para integrar Prettier com ESLint
];
