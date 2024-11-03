module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  ignorePatterns: [
    '**/constants/libs/*.js',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': ['error', 'never'],
    'no-param-reassign': 0,
    'vue/no-v-for-template-key': 0,
    'no-plusplus': 1,
    'no-console': 1,
    'consistent-return': 0,
    'max-classes-per-file': 0,
    'prefer-destructuring': 0,
    'import/no-unresolved': 0,
  },
};
