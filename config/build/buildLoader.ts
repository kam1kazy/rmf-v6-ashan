import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/types'

export function buildLoader({ mode }: IBuildOptions): ModuleOptions['rules'] {
  const devMod = mode === 'development'
  const prodMod = mode === 'production'

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: devMod ? '[path][name]__[local]' : '[hash:base64:5]',
      },
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      devMod ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader',
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [scssLoader, tsLoader]
}
