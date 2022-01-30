module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --with-node-modules --ignore-path .prettierignore --write ${filenames.join(
      ' '
    )}`,
    `eslint --max-warnings=0 --fix ${filenames.join(' ')}`,
  ],
  '**/*.{json,md,mdx,css,html}': (filenames) =>
    `prettier --with-node-modules --ignore-path .prettierignore --write ${filenames.join(
      ' '
    )}`,
};
