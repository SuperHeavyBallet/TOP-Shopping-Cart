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

    return(
        <div className={styles.wholePage}>

            <NavBar />
            

            <div className={styles.pageContainer}>

                <div className={styles.leftArea}>
                    

                    <div className={styles.columnList}>
                        <ColumnList 
                        inputTitle={"Groceries"}
                        inputList={filterByGroup("groceries")}/>
                    </div>

                    <div className={styles.columnList}>
                        
                        <ColumnList 
                        inputTitle={"Drinks"}
                        inputList={filterByGroup("drinks")}/>
                    </div>

                    <div className={styles.columnList}>
                        
                        <ColumnList 
                        inputTitle={"Meat"}
                        inputList={filterByGroup("meat")}/>
                    </div>

                    <div className={styles.columnList}>
                        
                        <ColumnList 
                        inputTitle={"Vegetables & Salad"}
                        inputList={filterByGroup("vegetables")}/>
                    </div>
                </div>
                <div className={styles.mainArea}>
                    <HomePageTopDisplay
                    headerText={"Newest Products"} />

                    <HomePageDisplay 
                    headerText={"Groceries"}
                    inputArray={filterByGroup("groceries")}
                    maxNumberDisplay={6}
                    />

                    <HomePageDisplay 
                    headerText={"Drinks"}
                    inputArray={filterByGroup("drinks")}
                    maxNumberDisplay={6}
                    />

                    <HomePageDisplay 
                    headerText={"Meat"}
                    inputArray={filterByGroup("meat")}
                    maxNumberDisplay={6}
                    />
                </div>

              

                <div className={styles.sideArea}>

                    <div className={styles.shoppingCartDisplay}>
                <ShoppingCart 
                itemToAdd={cartContents}
                isHomePage={true}
                onRemoveItem={(item) => handleRemoveItem(item)}/>
                
                </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}