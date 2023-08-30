module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: ['standard', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 开启 prettier 规则
    'prefer-const': 0,
    'space-before-function-paren': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
      },
    ],
  },
}
