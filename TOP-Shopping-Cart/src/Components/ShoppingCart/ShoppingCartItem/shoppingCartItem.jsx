import { useEffect, useState } from "react";
import styles from "./shoppingCartItem.module.css"

export default function ShoppingCartItem( { itemImage, itemName, itemQuantity, itemPrice, onRemoveItem, itemTotal})
{

    useEffect(() =>
    {
        calculateTotalItemPrice();

    }, [itemQuantity]);

   

    const [ totalItemPrice, setTotalItemPrice ] = useState(0);

    function calculateTotalItemPrice()
    {
        setTotalItemPrice((itemPrice * itemQuantity).toFixed(2));
        
    }

    function handleRemoveItem()
    {
        onRemoveItem();
    }


    return(
        <div className={styles.shoppingCartItem}>
            <div className={styles.leftSide}>
                <div className={styles.shoppingCartImage}>
                    <img src={itemImage}></img>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.shoppingCartItemName}>
                    <h4>{itemName} </h4>
                    <h4> ${itemPrice}</h4>
                </div>
                <div className={styles.shoppingCartItemQuantityPrice}>
                    <div>x {itemQuantity}</div>
                </div>
                <div className={styles.shoppingCartItemTotalPrice}>Total: {totalItemPrice}</div>
                <div 
                    onClick={handleRemoveItem}
                    className={styles.removeButton}
                    >Remove Item</div>
            </div>
        </div>
    )
}