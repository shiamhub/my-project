import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order'
import loadAddOrder from './loader/loadAddOrder'
import ChackOut from './components/ChackOut/ChackOut'
import ReviewItem from './components/ReviewItem/ReviewItem'
import Analyses from './components/Analyses/Analyses'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: loadAddOrder,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: loadAddOrder,
      },
      {
        path: 'chackOut',
        element: <ChackOut></ChackOut>
      },
      {
        path: 'reviewItem',
        element: <ReviewItem></ReviewItem>,
        loader: loadAddOrder,
      },
      {
        path: 'analyses',
        element: <Analyses></Analyses>,
        loader: loadAddOrder,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
