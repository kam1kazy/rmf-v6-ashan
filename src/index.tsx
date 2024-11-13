// Libraries
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components
import App from '@/components/App'
import { LazyCalendar } from '@/pages/calendar/Calendar.lazy'
import { LazyReports } from '@/pages/reports/Reports.lazy'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const container = createRoot(root)

const navList = [
  { url: '', component: 'Home' },
  { url: 'calendar', component: <LazyCalendar /> },
  { url: 'regulars', component: 'Регулярное промо' },
  { url: 'seasons', component: 'Сезонные операции' },
  { url: 'reports', component: <LazyReports /> },
  { url: 'prices', component: 'Ценообразование' },
  { url: 'services', component: 'Услуги' },
  { url: 'administration', component: 'Администрирование' },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: navList.map((item) => ({
      path: `/${item.url}`,
      element: (
        <Suspense fallback={<div>Loading...</div>}>{item.component}</Suspense>
      ),
    })),
  },
])

container.render(<RouterProvider router={router} />)
