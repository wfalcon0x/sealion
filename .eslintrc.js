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
    'prettier/prettier': 2,
    '@typescript-eslint/no-explicit-any': ['off'],
  },
  ignorePatterns: ['**/dist/**/*', '**/node_modules/*', 'node_modules/*', '**/jest.config.js'],
}
