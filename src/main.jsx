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
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import AuthProvider, { AuthContext } from './provider/AuthProvider'
import Manage from './components/Manage/Manage'
import PrivateRoute from './route/PrivateRoute'

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
      },
      {
        path: 'chackOut',
        element: <PrivateRoute><ChackOut></ChackOut></PrivateRoute>
      },
      {
        path: 'manage',
        element: <PrivateRoute><Manage></Manage></PrivateRoute>
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
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>,
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
