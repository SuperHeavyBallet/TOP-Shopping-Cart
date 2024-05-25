import { useEffect, useState } from "react";
import productsList from "../../ShopPage/productList.json"

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
        let numberThree = 3;

        let chosenImages = [
            inputArray[numberOne], 
            inputArray[numberTwo], 
            inputArray[numberThree]];

        return chosenImages;
    }



    return(
        <div>
            {finalImages.map(product => (
                <div key={product.id}
                className="">
                    <img src={product.image}></img>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>

                </div>
            ))}
        </div>
    )
}