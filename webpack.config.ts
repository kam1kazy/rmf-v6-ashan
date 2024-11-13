import webpack from 'webpack'
import path from 'path'
import { buildWebpack } from './config/build/buildWebpack'
import {
  BuildMode,
  IBuildPaths,
  BuildPlatform,
} from './config/build/types/types'

export interface IEnvVariables {
  port?: number
  mode?: BuildMode
  platform?: BuildPlatform
  analyzer?: boolean
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    platform: env.platform ?? 'desktop',
    analyzer: env.analyzer,
    paths: paths,
  })

  return config
}
