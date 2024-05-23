import { useState, useEffect } from "react";
import styles from "./shoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem/shoppingCartItem";
import { v4 as uuidv4 } from 'uuid'
import { key } from "localforage";

export default function ShoppingCart( {itemToAdd, onRemoveItem })
{
    const [ itemsInCart, setItemsInCart ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        if (itemToAdd) {
            setItemsInCart(itemToAdd);
            calculateTotal(itemToAdd)
            console.log("Recieved Item:", itemToAdd);
        }
    }, [itemToAdd]);

    function handleRemoveItem(item)
    {
        onRemoveItem(item);
        const newItemsInCart = itemsInCart.filter(cartItem => cartItem[0] !== item[0]);
        setItemsInCart(newItemsInCart);
        calculateTotal(newItemsInCart);
    }

    function calculateTotal(items)
    {

        const newTotal = items.reduce((acc, item) => acc + (Number(item[1]) * Number(item[2])), 0);

        setTotal(newTotal);
        

        
        



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
                itemImage={item[3]}
                onRemoveItem={() => handleRemoveItem(item)}
                
                />
                

            ))}
            
                <h3>Total: ${total}</h3>
            
        </div>
    )
}