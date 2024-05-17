import NavBar from "../navBar/navBar";
import ProductItem from "./ProductItem/productItem.jsx";
import styles from "./shopPage.module.css"
import productsList from "./productList.json"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx";
import { useEffect, useState } from "react";

export default function ShopPage()
{
    const [ cartContents, setCartContents ] = useState([]);
/*
    useEffect(() => 
    {
        const savedCart = localStorage.getItem('cartContents');
        if (savedCart)
        {
            //setCartContents(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() =>
    {
        localStorage.setItem("cartContents", JSON.stringify(cartContents));
        }, [cartContents]);
*/
    function handleAddProductToCart(itemQuantity, productName, productPrice)
    {
        
        setCartContents([productName, itemQuantity, productPrice]);

        
    }
    return(
        <div>

            <NavBar />

            <div className={styles.pageContainer}>

                {
                    productsList.products.map((product) =>
                        <ProductItem
                            key={product.id}
                            productName={product.name}
                            productPrice={product.price}
                            addProductToCart={(itemQuantity) => handleAddProductToCart(itemQuantity, product.name, product.price)}
                        />
                    )
                }

                Shop Page
            </div>

                    {cartContents.length > 0 && (
        <ShoppingCart itemToAdd={cartContents} />
    )}

            
                


       
        </div>
    )
}