module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // This line tells ESLint to handle JSX without React import
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Add this line
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser', // Add this line
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Add this line for JSX support
    }
  },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    '@typescript-eslint', // Add this line
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Add TypeScript-specific rules here if needed
  },
};


