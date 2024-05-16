import { useState } from "react";

export default function ShoppingCart( {itemToAdd})
{
    const [ itemsInCart, setItemsInCart ] = useState([]);


    return(
        <div>
            <h3>Shopping Cart</h3>
            <div>
                {itemToAdd}
            </div>
            </div>
    )
}