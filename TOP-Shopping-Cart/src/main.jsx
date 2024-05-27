import React, {useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import HomePage from './Components/HomePage/homePage'
import ShopPage from './Components/ShopPage/shopPage.jsx'
import ShoppingCart from './Components/ShoppingCart/shoppingCart.jsx'
import CheckoutPage from './Components/CheckoutPage/checkoutPage.jsx'

function Main()
{
const [currentCartContents, setCurrentCartContents] = useState([]);

function handleCartItemsChange(newCartItems)
{
  setCurrentCartContents(newCartItems);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage 
    currentCartItems={currentCartContents}
    />
  },
  {
    path: "shop",
    element: <ShopPage 
      currentCartItems={currentCartContents} onCartItemsChange={handleCartItemsChange}
      />
  },
  {
    path: "checkout",
    element: <CheckoutPage
    currentCartItems={currentCartContents} onCartItemsChange={handleCartItemsChange}
    />
  }
])

return (
  <RouterProvider router={router} />
);

}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />

  </React.StrictMode>,
)
