import { Configuration } from 'webpack'
import { IBuildOptions } from './types/types'

export function buildDevTool({
  mode,
}: IBuildOptions): Configuration['devtool'] {
  return mode ? 'eval-source-map' : 'source-map'
}
