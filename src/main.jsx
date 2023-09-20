import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UltimatePage from './components/UltimatePage/UltimatePage.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
     {
      path:'/',
      element:<UltimatePage></UltimatePage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
