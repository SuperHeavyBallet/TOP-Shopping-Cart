import NavBar from "../navBar/navBar.jsx"
import PageContainer from "./PageContainer/pageContainer.jsx"
import styles from "./homePage.module.css"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import { useEffect, useState } from "react"
import HomePageTopDisplay from "./HomePageItems/homePageTopDisplay.jsx"
import Footer from "../Footer/Footer.jsx"
import ColumnList from "./ColumnList/columnList.jsx"
import productList from "../ShopPage/productList.json"
import HomePageDisplay from "./HomePageItems/homePageDisplay.jsx"
import { Link } from "react-router-dom";

export default function HomePage({currentCartItems, onCartItemsChange}){

    const [ cartContents, setCartContents ] = useState(currentCartItems);

    useEffect(() =>
    {
        onCartItemsChange(cartContents);
    }, [cartContents, onCartItemsChange]);

    const filterByGroup = (group) => {
        return productList.products.filter(product => product.groups.includes(group));
    };


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

            <div className={styles.goToTop}>
                <a href="#top">Go To Top</a></div>
            

            <div className={styles.pageContainer}>

                <div className={styles.leftArea}>
                    

                    <div className={styles.columnList}>
                    <Link to={{ pathname: "/shop", state: { displayGroup: ["groceries", "Groceries"] } }}>
                        <ColumnList 
                        inputTitle={"Groceries"}
                        inputList={filterByGroup("groceries")}
                        linkTo="#groceries"
                        />
                        </Link>
                    </div>
                    

                    <div className={styles.columnList}>
                    <Link to={{ pathname: "/shop", state: { displayGroup: ["drinks", "Drinks"] } }}>
                        <ColumnList 
                        inputTitle={"Drinks"}
                        inputList={filterByGroup("drinks")}
                        linkTo="#drinks"
                        />
                        </Link>
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
                    <HomePageTopDisplay
                    headerText={"Newest Products"} />

                <div id="groceries">
                    <HomePageDisplay 
                    headerText={"Groceries"}
                    inputArray={filterByGroup("groceries")}
                    maxNumberDisplay={6}
                    />
                </div>
                <div id="drinks">
                    <HomePageDisplay 
                    headerText={"Drinks"}
                    inputArray={filterByGroup("drinks")}
                    maxNumberDisplay={6}
                    />
                </div>

                <div id="meat">
                    <HomePageDisplay 
                    headerText={"Meat"}
                    inputArray={filterByGroup("meat")}
                    maxNumberDisplay={6}
                    />
                </div>
                <div id="veg">
                    <HomePageDisplay 
                    headerText={"Vegetables"}
                    inputArray={filterByGroup("vegetables")}
                    maxNumberDisplay={6}
                    />
                </div>
                </div>


              

                <div className={styles.sideArea}>

                    <div className={styles.shoppingCartDisplay}>
                <ShoppingCart 
                itemToAdd={cartContents}
                isHomePage={true}
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