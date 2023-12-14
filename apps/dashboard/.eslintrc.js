/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve("@turbocell/eslint-config/next")],
  ignorePatterns: ["monaco-editor.d.ts"],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
