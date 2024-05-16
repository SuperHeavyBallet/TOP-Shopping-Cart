import { useEffect, useState } from "react"
import styles from "./productItem.module.css"

export default function ProductItem( { productName, productPrice, addProductToCart})
{

    const [itemQuantity, setItemQuantity] = useState("0");

    useEffect(() =>
    {
        console.log({productName}, itemQuantity);

    }, itemQuantity)

    function handleQuantityChange(e)
    {
        setItemQuantity(e.target.value);
        
    }
    function handleSubmitOrder()
    {

        addProductToCart(itemQuantity);
    }
    return(
        <div className={styles.productItem}>
            <h3>{productName}</h3>
            <h3>${productPrice}</h3>
            <div>Quantity:</div>
            <select id="quantity" name="quantity"
                onChange={handleQuantityChange}>
                <option value={0}>0</option>
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
            <button onClick={handleSubmitOrder}>Add To Cart</button>
        </div>
    )
}