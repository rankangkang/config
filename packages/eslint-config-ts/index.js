module.exports = {
  env: {
    node: true,
    es2022: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'prefer-const': 0,
    'space-before-function-paren': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    'comma-dangle': [
      'error',
      'always-multiline'
      // {
      //   arrays: 'only-multiline',
      //   objects: 'only-multiline'
      // }
    ]
    // 'array-element-newline': [
    //   'error',
    //   {
    //     minItems: 3,
    //     multiline: true
    //   }
    // ],
  }
}
