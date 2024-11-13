import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/types'

export function buildLoader({ mode }: IBuildOptions): ModuleOptions['rules'] {
  const devMod = mode === 'development'
  const prodMod = mode === 'production'

  const assetsLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,

    type: 'asset/resource',
  }

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          plugins: [
            {
              name: 'convertColor',
              params: {
                currentColor: true,
              },
            },
          ],
        },
      },
    ],
  }

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
    exclude: /node_modules/,

    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  }

  return [assetsLoader, scssLoader, tsLoader, svgrLoader]
}
