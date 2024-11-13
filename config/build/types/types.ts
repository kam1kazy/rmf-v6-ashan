export interface IBuildPaths {
  entry: string
  html: string
  output: string
  public: string
  src: string
}

export type BuildMode = 'development' | 'production'
export type BuildPlatform = 'desktop' | 'mobile'

export interface IBuildOptions {
  port: number
  paths: IBuildPaths
  mode: BuildMode
  platform: BuildPlatform
  analyzer?: boolean
}
