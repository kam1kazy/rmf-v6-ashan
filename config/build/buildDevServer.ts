import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { IBuildOptions } from './types/types'

export function buildDevServer({
  port,
}: IBuildOptions): DevServerConfiguration {
  return {
    port: port,
    open: true,
    historyApiFallback: true,
  }
}
