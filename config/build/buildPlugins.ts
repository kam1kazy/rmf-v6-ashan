import webpack, { Configuration } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { IBuildOptions } from './types/types'

export function buildPlugins({
  mode: buildMode,
  analyzer,
  path,
}: IBuildOptions): Configuration['plugins'] {
  const mode = buildMode ?? 'development'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: path.html }),
  ]

  if (mode) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if (mode) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
      })
    )
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
