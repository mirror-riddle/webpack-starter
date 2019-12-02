module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // Uses the recommended rules from @eslint-config-airbnb
    'airbnb',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Disables ESLint rules that might conflict with prettier
    'prettier',
    // Uses eslint-config-prettier to disable ESLint rules from eslint-plugin-react that would conflict with prettier
    'prettier/react',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict
    // with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last
    // configuration in the extends array. The advantage of having prettier setup as an ESLint rule using
    // eslint-plugin-prettier is that code can automatically be fixed using ESLint's --fix option.
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: 'module',
  },
  plugins: [],
  ignorePatterns: ['dist/', 'build/', 'demo/', 'node_modules/'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['warn', { packageDir: './' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
      },
    },
  ],
};
