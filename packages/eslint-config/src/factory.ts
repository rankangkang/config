import type { Linter } from 'eslint'
import type { Awaitable } from 'eslint-flat-config-utils'
import type { Config } from './types'
import { javascript } from './configs/javascript'
import { concat } from 'eslint-flat-config-utils'
import { react } from './configs/react'
import { jsx } from './configs/jsx'
import { typescript } from './configs/typescript'
import { prettier } from './configs/prettier'
import { node } from './configs/node'

export interface CreateEslintConfigOptions extends Linter.Config {
  javascript?: boolean
  jsx?: boolean
  react?: boolean
  typescript?: boolean
  prettier?: boolean
  node?: boolean
}

export function createEslintConfig(options: CreateEslintConfigOptions = {}) {
  const {
    javascript: enableJavascript = true,
    jsx: enableJsx,
    react: enableReact,
    typescript: enableTypescript,
    prettier: enablePrettier = true,
    node: enableNode,
    ...restConfig
  } = options
  const configs: Awaitable<Config>[] = []
  if (enableJavascript) {
    configs.push(...javascript())
  }
  if (enableJsx) {
    configs.push(...jsx())
  }
  if (enableReact) {
    configs.push(...react())
  }
  if (enableTypescript) {
    configs.push(...typescript())
  }
  if (enableNode) {
    configs.push(...node())
  }

  // prettier 最后
  if (enablePrettier) {
    configs.push(...prettier())
  }

  if (Object.keys(restConfig).length) {
    configs.push(restConfig)
  }

  return concat(...configs)
}
