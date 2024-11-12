export interface IBuildPaths {
  entry: string
  html: string
  output: string
  src: string
}

export type BuildMode = 'development' | 'production'

export interface IBuildOptions {
  port: number
  path: IBuildPaths
  mode: BuildMode
  analyzer?: boolean
}
