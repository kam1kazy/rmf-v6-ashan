import { useState } from 'react'
import * as classes from './App.module.scss'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount((prev) => prev + 1)

  return (
    <div>
      <h1 className={classes.link}>app</h1>
      <p className={classes.button} onClick={increment}>
        go
      </p>
      <p>test %:?;№ - {count} </p>
      <Outlet />
      <Link to={'./calendar'}>calendar</Link> <br />
      <Link to={'./reports'}>reports</Link>
    </div>
  )
}
