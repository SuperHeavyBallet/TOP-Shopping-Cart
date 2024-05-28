import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import NavBar from "../navBar/navBar";
import CheckoutCart from "./CheckoutCart/checkoutCart";

export default function CheckoutPage( {currentCartItems, onCartItemsChange})
{

    const [cartContents, setCartContents] = useState(currentCartItems);
    useEffect(() =>
    {
        onCartItemsChange(cartContents);
    }, [cartContents, onCartItemsChange]);

    function handleRemoveItem(item)
    {
        console.log(item);
        const newCartContents = cartContents.filter(cartItem => cartItem[0] !== item[0]);
        setCartContents(newCartContents);

    }

    return(
        <div>
            <NavBar/>

             <CheckoutCart
             itemToAdd={cartContents}
             onRemoveItem={(item) => handleRemoveItem(item)} />

            <Footer />
        </div>
    )
}