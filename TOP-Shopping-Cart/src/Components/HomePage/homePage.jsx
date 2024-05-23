import NavBar from "../navBar/navBar.jsx"
import PageContainer from "./PageContainer/pageContainer.jsx"
import styles from "./homePage.module.css"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import { useState } from "react"

export default function HomePage({currentCartItems}){

    const [ cartContents, setCartContents ] = useState(currentCartItems);

    return(
        <div>

            <NavBar />
            

            <div className={styles.pageContainer}>
                Home Page

                <ShoppingCart 
                itemToAdd={cartContents}/>
            </div>
        </div>
    )
}