module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', './.eslintrc'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
}
