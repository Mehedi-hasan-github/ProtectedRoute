import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Components/Shop/Shop.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/User/Login.jsx'
import Register from './Components/User/Register.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [

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
    <RouterProvider router={router}>

    </RouterProvider>

  </React.StrictMode>,
)
