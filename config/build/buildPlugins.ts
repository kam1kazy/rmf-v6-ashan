// Libraries
import webpack, { Configuration, DefinePlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import path from 'path'

// Types
import { IBuildOptions } from './types/types'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins(options: IBuildOptions): Configuration['plugins'] {
  const { mode, analyzer, paths, platform } = options

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'images/icons/favicon.ico'),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __MODE__: JSON.stringify(mode),
    }),
  ]

  if (mode === 'development') {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
    )
  }

  if (mode === 'production') {
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
