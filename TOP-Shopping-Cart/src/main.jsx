import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom"
import HomePage from './Components/HomePage/homePage'
import ShopPage from './Components/ShopPage/shopPage.jsx'
import ShoppingCart from './Components/ShoppingCart/shoppingCart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "shop",
    element: <ShopPage />
  }
])

import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
