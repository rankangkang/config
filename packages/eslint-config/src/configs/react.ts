import pluginReact from 'eslint-plugin-react'
import type { Config } from '../types'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export function react(): Config[] {
  return [
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    pluginReactHooks.configs['recommended-latest'],
    {
      rules: {
        // customize rules here
        // rules 👇🏻
        // https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
        // https://react.dev/reference/rules
        'jsx-quotes': ['error', 'prefer-double'],
      },
    },
  ]
}
