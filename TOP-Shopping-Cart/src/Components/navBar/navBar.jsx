import { Link } from "react-router-dom";

export default function NavBar()
{
    return(
        <div>
            <Link to={"/"}>
                <h3>HOME</h3></Link> 
            <Link to={"shop"}>
            <h3>SHOP</h3></Link> 
        </div>
    )
}