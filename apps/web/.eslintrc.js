/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: [require.resolve('@repo/eslint-config/next')],
    parserOptions: {
      project: `${__dirname}/tsconfig.json`,
    },
  };