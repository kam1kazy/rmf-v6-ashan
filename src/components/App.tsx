import React, { useState } from 'react'
import * as classes from './App.module.scss'
import { Outlet, Link } from 'react-router-dom'

import MyImage from '../assets/image.png'

export default function App() {
  const foo = (a: string) => {
    return 'foo' + a
  }

  return (
    <div>
      <h1>app page - {__PLATFORM__}</h1>
      <h1>mode - {__MODE__}</h1>
      <br />
      {foo('asd')}
      <br />
      <img src={MyImage} alt='' width={50} />
      <br />
      <Link className={classes.link} to={'./calendar'}>
        calendar
      </Link>
      <br />
      <Link className={classes.link} to={'./reports'}>
        reports
      </Link>
      <br />
      <br />
      <Outlet />
    </div>
  )
}
