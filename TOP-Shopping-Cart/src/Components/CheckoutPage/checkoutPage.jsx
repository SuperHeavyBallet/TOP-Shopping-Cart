import { useState } from "react";
import Footer from "../Footer/Footer";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import NavBar from "../navBar/navBar";

export default function CheckoutPage( {currentCartItems})
{

    const [cartContents, setCartContents] = useState({currentCartItems});

    return(
        <div>
            <NavBar/>

            Checkout Page
            <ShoppingCart 
             itemToAdd={currentCartItems}
             isHomePage={false}
             />

            <Footer />
        </div>
    )
}