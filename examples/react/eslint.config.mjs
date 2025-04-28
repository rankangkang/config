import cmkk from '@cmkk/eslint-config'

export default cmkk({
  react: true,
  typescript: true,
  jsx: true,
  javascript: true,
  ignores: ['node_modules', 'dist', 'build'],
})
