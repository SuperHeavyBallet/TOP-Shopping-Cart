import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./navBar.module.css";

export default function NavBar()
{
    const location = useLocation();
    const navigate = useNavigate();

    function handleHomeClick(e)
    {
        if (location.pathname === "/")
        {
            e.preventDefaul();
        }
        else
        {
            navigate("/");
        }
    }

    function handleShopClick(e)
    {
        if (location.pathname === "/shop")
        {
            e.preventDefaul();
        }
        else
        {
            navigate("/shop");
        }
    }

    return(
        <nav className={styles.navBar}>
            {

                <div onClick={handleHomeClick}
                className={`${styles.navBarLink} 
                    ${location.pathname === "/" 
                        ? styles.current : ""}`}
                >
                <h3>HOME </h3></div>
            }
            


            <div onClick={handleShopClick}
                className={`${styles.navBarLink}
                    ${location.pathname === "/shop"
                        ? styles.current : ""}
                `}
            >
            <h3>SHOP</h3></div> 
        </nav>
    )
}