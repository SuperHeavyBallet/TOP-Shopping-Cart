import { useEffect, useState } from "react";
import productsList from "../../ShopPage/productList.json"
import styles from "./homepageTopDisplay.module.css"

export default function HomePageTopDisplay({headerText})
{

    const arrayOfProducts = productsList.products;
    const [finalImages, setFinalImages] = useState([]);

    useEffect(() =>
    {
        setFinalImages(GenerateRandomImages(arrayOfProducts));
    },[]);

    function GenerateRandomImages(inputArray)
    {
        setFinalImages([]);


        let chosenImages = [
            inputArray[inputArray.length - 1], 
            inputArray[inputArray.length - 2], 
            inputArray[inputArray.length - 3],
        ];

        return chosenImages;
    }



    return(
        <div className={styles.wholeContainer}>

            <div className={styles.homeHeader}>
                <h3>{headerText}</h3>
            </div>
        <div className={styles.imagesContainer}>

            {finalImages.map(product => (
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