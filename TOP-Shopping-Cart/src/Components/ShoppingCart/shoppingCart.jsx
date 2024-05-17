import { useState, useEffect } from "react";
import styles from "./shoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem/shoppingCartItem";

export default function ShoppingCart( {itemToAdd, })
{
    const [ itemsInCart, setItemsInCart ] = useState([]);

    useEffect(() => {
        if (itemToAdd) {
            setItemsInCart(prevItems => [...prevItems, itemToAdd]);
            console.log(itemsInCart);
        }
    }, [itemToAdd]);

    function handleRemoveItem(itemName)
    {
        window.alert("Clicked Remove Item: ", itemName);
    }

    /*

    */



    return(
        <div className={styles.shoppingCart}>
            <h3>Shopping Cart</h3>
            {itemsInCart.map((item, index) => (
                <ShoppingCartItem 
                key={index}
                className={styles.cartItem}
                itemName={item[0]}
                itemQuantity={item[1]}
                itemPrice={item[2]}
                onRemoveItem={() => handleRemoveItem(index)}
                />
                

            ))}
        </div>
    )
}