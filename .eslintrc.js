module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-console': 1,
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|node' }],
  },
  ignorePatterns: ['**/dist/**/*', '**/node_modules/*', 'node_modules/*', '**/jest.config.js'],
}
