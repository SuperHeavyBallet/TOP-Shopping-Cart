import { useState, useEffect } from "react";
import styles from "./shoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem/shoppingCartItem";
import { v4 as uuidv4 } from 'uuid'
import { key } from "localforage";

export default function ShoppingCart( {itemToAdd, onRemoveItem })
{
    const [ itemsInCart, setItemsInCart ] = useState([]);

    useEffect(() => {
        if (itemToAdd) {
            setItemsInCart(itemToAdd);
        }
    }, [itemToAdd]);

    function handleRemoveItem(item)
    {
        onRemoveItem(item);
    }



    return(
        <div className={styles.shoppingCart}>
            <h3>Shopping Cart</h3>
            {itemsInCart.map((item, index) => (
                <ShoppingCartItem 
                key={uuidv4()}
                className={styles.cartItem}
                itemName={item[0]}
                itemQuantity={item[1]}
                itemPrice={item[2]}
                onRemoveItem={() => handleRemoveItem(item)}
                />
                

            ))}
        </div>
    )
}