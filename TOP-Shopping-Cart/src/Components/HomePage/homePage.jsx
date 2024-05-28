import NavBar from "../navBar/navBar.jsx"
import PageContainer from "./PageContainer/pageContainer.jsx"
import styles from "./homePage.module.css"
import ShoppingCart from "../ShoppingCart/shoppingCart.jsx"
import { useState } from "react"
import HomePageTopDisplay from "./HomePageItems/homePageTopDisplay.jsx"
import Footer from "../Footer/Footer.jsx"

export default function HomePage({currentCartItems}){

    const [ cartContents, setCartContents ] = useState(currentCartItems);

    return(
        <div className={styles.wholePage}>

            <NavBar />
            

            <div className={styles.pageContainer}>
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