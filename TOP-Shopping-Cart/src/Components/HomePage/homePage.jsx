import NavBar from "../navBar/navBar.jsx"
import PageContainer from "./PageContainer/pageContainer.jsx"
import styles from "./homePage.module.css"

export default function HomePage(){
    return(
        <div>

            <NavBar />
            

            <div className={styles.pageContainer}>
                Home Page
            </div>
        </div>
    )
}