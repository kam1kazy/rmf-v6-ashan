import React, { useState } from 'react'
import * as classes from './App.module.scss'
import { Outlet, Link } from 'react-router-dom'

import MyImage from '../assets/image.png'

function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error()
}

export default function App() {
  const [count, setCount] = useState<number>(0)
  const foo = (a: string) => {
    return 'foo' + a
  }

  const increment = () => setCount((prev) => prev + 1)

  const err = () => TODO()

  return (
    <div>
      <h1>app page - {__PLATFORM__}</h1>
      <h1>mode - {__MODE__}</h1>

      {foo('asd')}

      <br />
      <br />

      <button onClick={increment}>count is: {count}</button>

      <br />
      <br />

      <button onClick={err}>error</button>

      <br />
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
