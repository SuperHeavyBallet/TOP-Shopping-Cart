import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

export default function NavBar()
{
    return(
        <div className={styles.navBar}>
            <Link to={"/"}
                className={styles.navBarLink}
            >
                <h3>HOME</h3></Link> 
            <Link to={"shop"}
                className={styles.navBarLink}
            >
            <h3>SHOP</h3></Link> 
        </div>
    )
}