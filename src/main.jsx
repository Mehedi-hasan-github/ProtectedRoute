import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Components/Shop/Shop.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/User/Login.jsx'
import Register from './Components/User/Register.jsx'
import Root from './Components/Root/Root.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      <RouterProvider router={router}>
      </RouterProvider>

    </AuthProvider>

  </React.StrictMode>,
)
