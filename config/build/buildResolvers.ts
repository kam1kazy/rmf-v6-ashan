import { Configuration } from 'webpack'
import { IBuildOptions } from './types/types'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export function buildResolvers(
  options: IBuildOptions
): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.path.src,
    },
  }
}
