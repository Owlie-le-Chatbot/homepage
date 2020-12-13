module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: [
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': [1, {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '(^debug$|^_)',
    }],
    'comma-dangle': [1, 'always-multiline'],
    quotes: [1, 'single'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
  },
};
