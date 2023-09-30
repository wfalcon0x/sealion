module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console': 1,
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|node' }],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': ['error', { 'after': true }],
  },
  ignorePatterns: ['**/dist/**/*', '**/node_modules/*', 'node_modules/*', '**/jest.config.js'],
}
