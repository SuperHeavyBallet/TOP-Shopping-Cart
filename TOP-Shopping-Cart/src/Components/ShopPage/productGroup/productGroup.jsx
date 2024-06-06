import { useEffect, useState } from "react";
import styles from "./productGroup.module.css"
import ProductItem from "../ProductItem/productItem.jsx";

export default function ProductGroup({headerText, inputArray, maxNumberDisplay, addProductToCart})
{


    let arrayOfProducts = [];
    if (maxNumberDisplay)
    {
        arrayOfProducts = inputArray.slice(0, maxNumberDisplay);
    }
    else
    {
        arrayOfProducts = inputArray;
    }
    
    function handleAddProductToCart(itemQuantity, name, price, image)
    {
        addProductToCart(itemQuantity, name, price, image)
    }



    return(
        <div className={styles.wholeContainer}>

            <div className={styles.homeHeader}>
                <h3>{headerText}</h3>
            </div>
        <div className={styles.imagesContainer}>

            {arrayOfProducts.map(product => (
                <ProductItem
                    key={product.id}
                    productImage={product.image}
                    productName={product.name}
                    productPrice={product.price}
                    addProductToCart={(itemQuantity) => handleAddProductToCart(itemQuantity, product.name, product.price, product.image)}
                   
                />
            ))}
        </div>
        </div>
    )
}