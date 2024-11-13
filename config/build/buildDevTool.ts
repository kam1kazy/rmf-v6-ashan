import { Configuration } from 'webpack'
import { IBuildOptions } from './types/types'

export function buildDevTool(options: IBuildOptions): Configuration['devtool'] {
  return 'inline-source-map'
}
