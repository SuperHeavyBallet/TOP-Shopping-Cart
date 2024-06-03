import NavBar from "../navBar/navBar";
import ProductItem from "./ProductItem/productItem.jsx";
import styles from "./shopPage.module.css"
import productsList from "../ShopPage/productList.json"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer.jsx";
import ColumnList from "../HomePage/ColumnList/columnList.jsx";
import ProductGroup from "./productGroup/productGroup.jsx";
import { useLocation } from "react-router-dom";


export default function ShopPage( { currentCartItems, onCartItemsChange } )
{
    const [ cartContents, setCartContents ] = useState(currentCartItems);
    const location = useLocation();
    const [currentItemsToDisplay, setCurrentItemsToDisplay] = useState(location.state?.displayGroup || ["groceries", "Groceries"]);
    console.log("Incoming: ",currentItemsToDisplay);

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

    function handleSwitchDisplay(displayGroup)
    {
        setCurrentItemsToDisplay(displayGroup);
        
    }

    return(
        <div className={styles.wholePage}>

            <NavBar />

            <div className={styles.goToTop}>
                <a href="#top">Go To Top</a></div>
            
            <div className={styles.pageContainer}>

          
                
            <div className={styles.leftArea}>
                    
            
            <div className={styles.columnList}
            onClick={() => handleSwitchDisplay(["groceries", "Groceries"])}>
                        <ColumnList 
                        inputTitle={"Groceries"}
                        inputList={filterByGroup("groceries")}
                        
                        
                        
                        />
                        
                    </div>

                    <div className={styles.columnList}
                    onClick={() => handleSwitchDisplay(["drinks", "Drinks"])}>
                        
                        <ColumnList 
                        inputTitle={"Drinks"}
                        inputList={filterByGroup("drinks")}
                        
                        
                        />
                    </div>

                    <div className={styles.columnList}
                    onClick={() => handleSwitchDisplay(["meat", "Meat"])}>
                        
                        <ColumnList 
                        inputTitle={"Meat"}
                        inputList={filterByGroup("meat")}
                        />
                    </div>

                    <div className={styles.columnList}
                    onClick={() => handleSwitchDisplay(["vegetables", "Vegetables & Salads"])}>
                        
                        <ColumnList 
                        inputTitle={"Vegetables & Salad"}
                        inputList={filterByGroup("vegetables")}
                        />
                    </div>
                </div>
            
                <div className={styles.mainArea}>

                    <h3 id="top" className={styles.shopHeadText}>Welcome To The Shop!</h3>
                    
                    <div className={styles.productCategory}>

                    <div className={styles.productDisplay}>

                        
                        <div id="groceries">
                        <ProductGroup 
                            headerText={currentItemsToDisplay[1]}
                            inputArray={filterByGroup(currentItemsToDisplay[0])}
                            addProductToCart={(itemQuantity, productName, productPrice, productImage) => handleAddProductToCart(itemQuantity, productName, productPrice, productImage)}
                            
                        />
                        </div>
        
                     

                        

                      
                        
              
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