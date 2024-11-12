import webpack from 'webpack'
import path from 'path'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, IBuildPaths } from './config/build/types/types'

export interface IEnvVariables {
  port: number
  mode: BuildMode
  analyzer?: boolean
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port,
    mode: env.mode,
    path: paths,
    analyzer: env.analyzer,
  })

  return config
}
