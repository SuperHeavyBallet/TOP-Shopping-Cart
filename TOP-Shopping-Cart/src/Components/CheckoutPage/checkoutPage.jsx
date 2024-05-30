import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import NavBar from "../navBar/navBar";
import CheckoutCart from "./CheckoutCart/checkoutCart";
import styles from "./checkoutPage.module.css"

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

    function handleAdjustItemQuantity(amount, item)
    {
        //window.alert("Adjust " + item + " by: " + amount); 
        for (let i = 0; i < cartContents.length; i++)
        {
            if(cartContents[i][0] === item[0])
            {

                    const tempArray = [...cartContents];
                    const originalQuantity = tempArray[i][1];
                    const newQuantity = Number(originalQuantity) + Number(amount);

                    if (newQuantity > 0)
                    {
                        tempArray[i][1] = newQuantity;
                    setCartContents(tempArray);
                    }
                    else
                    {
                        if (window.confirm("Remove Item?"))
                        {
                            handleRemoveItem(item);
                        }
                        
                    }
                    
           
               

                
            }
        }
    }

    return(
        <div className={styles.wholePage}>
            <NavBar/>
            <div className={styles.pageContainer}>
            <div className={styles.mainArea}>
             <CheckoutCart
             itemToAdd={cartContents}
             onRemoveItem={(item) => handleRemoveItem(item)} 
             onAdjustItemQuantity={(amount, item) => handleAdjustItemQuantity(amount, item)}/>
        </div>
        </div>
            <Footer />
        </div>
    )
}