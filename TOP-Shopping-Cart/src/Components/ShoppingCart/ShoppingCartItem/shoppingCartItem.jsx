import { useEffect, useState } from "react";
import styles from "./shoppingCartItem.module.css"

export default function ShoppingCartItem( { itemImage, itemName, itemQuantity, itemPrice, onRemoveItem, onAdjustItemQuantity})
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
        if (window.confirm("Are you sure you want to remove this?"))
        {
            onRemoveItem();
        }
        
    }

    function handleIncreaseQuantity()
    {
        
        onAdjustItemQuantity("1");
    }

    function handleReduceQuantity()
    {
      
        onAdjustItemQuantity("-1");
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
                    <h3 onClick={() => handleReduceQuantity()}
                        className={styles.adjustQuantityButton}
                    >-</h3>
                    <div className={styles.quantityDisplay}>x {itemQuantity}</div>
                    <h3 onClick={() => handleIncreaseQuantity()}
                        className={styles.adjustQuantityButton}
                    >+</h3>
                    
                </div>
                <div 
                    onClick={handleRemoveItem}
                    className={styles.removeButton}
                    >Remove</div>
                <h4 className={styles.shoppingCartItemTotalPrice}>Total: ${totalItemPrice}</h4>
                
            </div>
        </div>
    )
}