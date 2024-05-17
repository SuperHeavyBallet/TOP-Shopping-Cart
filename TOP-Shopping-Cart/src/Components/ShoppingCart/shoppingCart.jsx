import { useState, useEffect } from "react";
import styles from "./shoppingCart.module.css";

export default function ShoppingCart( {itemToAdd})
{
    const [ itemsInCart, setItemsInCart ] = useState([]);

    useEffect(() => {
        if (itemToAdd) {
            setItemsInCart(prevItems => [...prevItems, itemToAdd]);
            console.log(itemsInCart);
        }
    }, [itemToAdd]);




    return(
        <div className={styles.shoppingCart}>
            <h3>Shopping Cart</h3>
            {itemsInCart.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                    {item}
                </div>
            ))}
        </div>
    )
}