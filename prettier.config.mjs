/**
 * @type {import("prettier").Config}
 * Need to restart IDE when changing configuration
 * Open the command palette (Ctrl + Shift + P) and execute the command > Reload Window.
 */
const config = {
  trailingComma: 'es5',
  endOfLine: 'auto',
  plugins: [
    'prettier-plugin-tailwindcss',
  ],
};

export default config;
