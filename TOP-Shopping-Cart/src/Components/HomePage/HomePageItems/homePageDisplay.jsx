import { useEffect, useState } from "react";
import styles from "./homePageDisplay.module.css"

export default function HomePageDisplay({headerText, inputArray, maxNumberDisplay})
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
    




    return(
        <div className={styles.wholeContainer}>

            <div className={styles.homeHeader}>
                <h3>{headerText}</h3>
            </div>
        <div className={styles.imagesContainer}>

            {arrayOfProducts.map(product => (
                <div key={product.id}
                className={styles.displayProduct}>
                    <img src={product.image}></img>
                    <h3>{product.name}</h3>

                </div>
            ))}
        </div>
        </div>
    )
}