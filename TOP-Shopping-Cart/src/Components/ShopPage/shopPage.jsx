import NavBar from "../navBar/navBar";
import ProductItem from "./ProductItem/productItem.jsx";
import styles from "./shopPage.module.css"
import productsList from "./productList.json"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx";
import { useEffect, useState } from "react";

export default function ShopPage( { currentCartItems, onCartItemsChange } )
{
    const [ cartContents, setCartContents ] = useState(currentCartItems);

    useEffect(() =>
    {
        console.log("CONTENTS: ",cartContents);
        onCartItemsChange(cartContents);
    }, [cartContents, onCartItemsChange]);

    function handleAddProductToCart(itemQuantity, productName, productPrice, productImage)
    {
        console.log(productName);

        for (let i = 0; i < cartContents.length; i++)
        {
            if(cartContents[i][0] === productName)
            {

                const tempArray = cartContents;
                
                tempArray[i][1] = ((Number(tempArray[i][1]) + Number(itemQuantity)));
                
                setCartContents(tempArray);
                return;
            }
        }
        
        setCartContents(prevContents => [...prevContents,[productName, Number(itemQuantity), Number(productPrice), productImage]]);

        
    }

    function handleRemoveItem(item, key)
    {
        console.log(item);
        const newCartContents = cartContents.filter(cartItem => cartItem[0] !== item[0]);
        setCartContents(newCartContents);
    }

    return(
        <div className={styles.wholePage}>

            <NavBar />

            <div className={styles.pageContainer}>

                <div className={styles.mainArea}>
                {
                    productsList.products.map((product) =>
                        <ProductItem
                        
                            key={product.id}
                            productImage={product.image}
                            productName={product.name}
                            productPrice={product.price}
                            addProductToCart={(itemQuantity) => handleAddProductToCart(itemQuantity, product.name, product.price, product.image)}
                        />
                    )
                }
                </div>
                <div className={styles.sideArea}>

                <ShoppingCart 
                    itemToAdd={cartContents} 
                    onRemoveItem={(item) => handleRemoveItem(item)}
                />
         
                </div>              
            </div>

        </div>
    )
}