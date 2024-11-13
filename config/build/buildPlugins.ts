// Libraries
import webpack, { Configuration, DefinePlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

// Types
import { IBuildOptions } from './types/types'

export function buildPlugins(options: IBuildOptions): Configuration['plugins'] {
  const { mode, analyzer, path, platform } = options

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: path.html }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __MODE__: JSON.stringify(mode),
    }),
  ]

  if (mode === 'development') {
    plugins.push(new webpack.ProgressPlugin()),
      plugins.push(new ForkTsCheckerWebpackPlugin())
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
