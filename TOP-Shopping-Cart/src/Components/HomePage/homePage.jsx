import NavBar from "../navBar/navBar.jsx"
import PageContainer from "./PageContainer/pageContainer.jsx"
import styles from "./homePage.module.css"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import { useState } from "react"
import HomePageTopDisplay from "./HomePageItems/homePageTopDisplay.jsx"

export default function HomePage({currentCartItems}){

    const [ cartContents, setCartContents ] = useState(currentCartItems);

    return(
        <div className={styles.wholePage}>

            <NavBar />
            

            <div className={styles.pageContainer}>
                <div className={styles.mainArea}>
                    <HomePageTopDisplay />
                </div>

                <div className={styles.sideArea}>
                <ShoppingCart 
                itemToAdd={cartContents}/>
                </div>
            </div>
        </div>
    )
}