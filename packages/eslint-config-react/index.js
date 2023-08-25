module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '@cmkk/eslint-config-ts'],
  settings: {
    react: {
      version: '18.20.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
}
