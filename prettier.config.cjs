/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: false,
  tabWidth: 2,
  jsxSingleQuote: false,
  singleQuote: true,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
}
