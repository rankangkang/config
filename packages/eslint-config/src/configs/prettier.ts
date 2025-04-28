import type { Config } from '../types'
// import pluginPrettier from 'eslint-config-prettier'
import pluginPrettierConfig from 'eslint-plugin-prettier/recommended'

export function prettier(): Config[] {
  return [pluginPrettierConfig]
}
