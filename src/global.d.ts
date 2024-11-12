declare module '*.module.scss' {
  interface IClassNames {
    [classNames: string]: string
  }

  const classNames: IClassNames
  export = classNames
}
