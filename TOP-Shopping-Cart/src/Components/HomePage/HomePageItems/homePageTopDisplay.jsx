import { useEffect, useState } from "react";
import productsList from "../../ShopPage/productList.json"
import styles from "./homepageTopDisplay.module.css"

export default function HomePageTopDisplay()
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

        let numberOne = 0;
        let numberTwo = 1;
        let numberThree = 2;
        let numberFour = 3;

        let chosenImages = [
            inputArray[inputArray.length - 1], 
            inputArray[inputArray.length - 2], 
            inputArray[inputArray.length - 3],
            inputArray[inputArray.length - 4]
        ];

        return chosenImages;
    }



    return(
        <div className={styles.wholeContainer}>

            <div className={styles.homeHeader}>
                <h3>Newest Products</h3>
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