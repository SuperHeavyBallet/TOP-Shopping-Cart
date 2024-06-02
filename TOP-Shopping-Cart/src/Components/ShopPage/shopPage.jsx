import NavBar from "../navBar/navBar";
import ProductItem from "./ProductItem/productItem.jsx";
import styles from "./shopPage.module.css"
import productsList from "../ShopPage/productList.json"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer.jsx";
import ColumnList from "../HomePage/ColumnList/columnList.jsx";
import ProductGroup from "./productGroup/productGroup.jsx";


export default function ShopPage( { currentCartItems, onCartItemsChange } )
{
    const [ cartContents, setCartContents ] = useState(currentCartItems);

    useEffect(() =>
    {
        onCartItemsChange(cartContents);
    }, [cartContents, onCartItemsChange]);

    const filterByGroup = (group) => {
        return productsList.products.filter(product => product.groups.includes(group));
    };

    function handleAddProductToCart(itemQuantity, productName, productPrice, productImage)
    {

        // Check if item to add is already in the cart
        for (let i = 0; i < cartContents.length; i++)
        {
            if(cartContents[i][0] === productName)
            {
                console.log("Already in Cart");

                // Make copy of current cart contents to edit and then set
                const tempArray = [...cartContents];

                const originalQuantity = tempArray[i][1];
                const newQuantity = Number(originalQuantity) + Number(itemQuantity);

                tempArray[i][1] = newQuantity;

                setCartContents(tempArray);
                return;
     
            }
        }
        
        //If not, just add the new item to the array
        setCartContents(prevContents => [...prevContents,[productName, Number(itemQuantity), Number(productPrice), productImage]]);

        
    }

    function handleRemoveItem(item, key)
    {
        console.log(item);
        const newCartContents = cartContents.filter(cartItem => cartItem[0] !== item[0]);
        setCartContents(newCartContents);
    }

    function handleAdjustItemQuantity(amount, item)
    {
        //window.alert("Adjust " + item + " by: " + amount); 
        for (let i = 0; i < cartContents.length; i++)
        {
            if(cartContents[i][0] === item[0])
            {

                    const tempArray = [...cartContents];
                    const originalQuantity = tempArray[i][1];
                    const newQuantity = Number(originalQuantity) + Number(amount);

                    if (newQuantity > 0)
                    {
                        tempArray[i][1] = newQuantity;
                    setCartContents(tempArray);
                    }
                    else
                    {
                        if (window.confirm("Remove Item?"))
                        {
                            handleRemoveItem(item);
                        }
                        
                    }
                    
           
               

                
            }
        }
    }

    return(
        <div className={styles.wholePage}>

            <NavBar />
            
            <div className={styles.pageContainer}>

            <div className={styles.leftArea}>
                    

            <div className={styles.columnList}>
                        <ColumnList 
                        inputTitle={"Groceries"}
                        inputList={filterByGroup("groceries")}
                        linkTo="#groceries"
                        />
                        
                    </div>

                    <div className={styles.columnList}>
                        
                        <ColumnList 
                        inputTitle={"Drinks"}
                        inputList={filterByGroup("drinks")}
                        linkTo="#drinks"
                        />
                    </div>

                    <div className={styles.columnList}>
                        
                        <ColumnList 
                        inputTitle={"Meat"}
                        inputList={filterByGroup("meat")}
                        linkTo="#meat"/>
                    </div>

                    <div className={styles.columnList}>
                        
                        <ColumnList 
                        inputTitle={"Vegetables & Salad"}
                        inputList={filterByGroup("vegetables")}
                        linkTo="#veg"/>
                    </div>
                </div>
            
                <div className={styles.mainArea}>

                    <h3 className={styles.shopHeadText}>Welcome To The Shop!</h3>
                    
                    <div className={styles.productCategory}>

                    <div className={styles.productDisplay}>

                        <div id="groceries">
                        <ProductGroup 
                            headerText={"Groceries"}
                            inputArray={filterByGroup("groceries")}
                            addProductToCart={(itemQuantity, productName, productPrice, productImage) => handleAddProductToCart(itemQuantity, productName, productPrice, productImage)}
                            id="groceries"
                        />
                        </div>

                        <div id="drinks">
                        <ProductGroup 
                            headerText={"Drinks"}
                            inputArray={filterByGroup("drinks")}
                            addProductToCart={(itemQuantity, productName, productPrice, productImage) => handleAddProductToCart(itemQuantity, productName, productPrice, productImage)}
                            id="drinks"
                        />
                        </div>

                        <div id="meat">
                        <ProductGroup 
                            headerText={"Meat"}
                            inputArray={filterByGroup("meat")}
                            addProductToCart={(itemQuantity, productName, productPrice, productImage) => handleAddProductToCart(itemQuantity, productName, productPrice, productImage)}
                            
                        />
                        </div>

                        <div id="veg">
                        <ProductGroup 
                            headerText={"Vegetables & Salads"}
                            inputArray={filterByGroup("vegetables")}
                            addProductToCart={(itemQuantity, productName, productPrice, productImage) => handleAddProductToCart(itemQuantity, productName, productPrice, productImage)}
                            id="veg"
                        />
                        </div>
                        
                {/*
                    productsList.products.map((product) =>
                        <ProductItem
                        
                            key={product.id}
                            productImage={product.image}
                            productName={product.name}
                            productPrice={product.price}
                            
                            addProductToCart={(itemQuantity) => handleAddProductToCart(itemQuantity, product.name, product.price, product.image)}
                        />
                    )*/
                }
                </div>
                </div>
                </div>
                <div className={styles.sideArea}>

                <div className={styles.shoppingCartDisplay}>
                <ShoppingCart 
                    itemToAdd={cartContents} 
                    onRemoveItem={(item) => handleRemoveItem(item)}
                    onAdjustItemQuantity={(amount, item) => handleAdjustItemQuantity(amount, item)}
                    
                />
            </div>
                </div>              
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}