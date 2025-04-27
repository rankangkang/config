import { GLOB_JSX, GLOB_TSX } from '../glob'
import type { Config } from '../types'

export function jsx(): Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
