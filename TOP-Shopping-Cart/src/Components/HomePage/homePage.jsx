import NavBar from "../navBar/navBar.jsx"
import PageContainer from "./PageContainer/pageContainer.jsx"
import styles from "./homePage.module.css"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import { useEffect, useState } from "react"
import HomePageTopDisplay from "./HomePageItems/homePageTopDisplay.jsx"
import Footer from "../Footer/Footer.jsx"
import ColumnList from "./ColumnList/columnList.jsx"
import productList from "../ShopPage/productList.json"

export default function HomePage({currentCartItems}){

    const [ cartContents, setCartContents ] = useState(currentCartItems);



    

    return(
        <div className={styles.wholePage}>

            <NavBar />
            

            <div className={styles.pageContainer}>

                <div className={styles.leftArea}>
                    
                    <div className={styles.columnList}>
                        <h3>Groceries:</h3>
                        <ColumnList 
                        inputList={productList.products.filter(product => product.group === "groceries")}/>
                    </div>

                    <div className={styles.columnList}>
                        <h3>Drinks:</h3>
                        <ColumnList 
                        inputList={productList.products.filter(product => product.group === "drinks")}/>
                    </div>
                </div>
                <div className={styles.mainArea}>
                    <HomePageTopDisplay
                    headerText={"Newest Products"} />

                    <HomePageTopDisplay
                    headerText={"Other Products"} />
                

                <HomePageTopDisplay
                    headerText={"More Products"} />
                </div>

                <div className={styles.sideArea}>

                    <div className={styles.shoppingCartDisplay}>
                <ShoppingCart 
                itemToAdd={cartContents}
                isHomePage={true}/>
                </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}