import { useEffect, useState } from "react"
import styles from "./productItem.module.css"

export default function ProductItem( { productImage, productName, productPrice, productQuantity, addProductToCart})
{

    const [itemQuantity, setItemQuantity] = useState("0");

    useEffect(() =>
    {
        console.log({productName}, itemQuantity);

    }, [itemQuantity])

    function handleQuantityChange(e)
    {
        setItemQuantity(e.target.value);
        
    }
    function handleSubmitOrder()
    {
       
        if (itemQuantity > 0) {
            addProductToCart(itemQuantity);
        } else {
            alert("Please select a quantity greater than 0.");
        }

        setItemQuantity(0);

        
    }
    return(
        <div className={styles.productItem}>
           <div className={styles.leftArea}>
            <img className={styles.image} src={productImage}></img>
            
            </div>

            <div className={styles.rightArea}>
            <h3>{productName}</h3>
            <h3>${productPrice}</h3>
            <div className={styles.quantitySelect}>
                <div>Quantity:</div>
                <select value={itemQuantity} id="quantity" name="quantity"
                    onChange={handleQuantityChange}>
                    <option value={0} >0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>

                </select>
            </div>
            <button
                className={styles.addToCartButton} 
                onClick={handleSubmitOrder}>Add To Cart</button>
            </div>
        </div>
    )
}