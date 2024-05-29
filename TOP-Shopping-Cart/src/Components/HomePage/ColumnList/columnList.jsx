import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import styles from "./columnList.module.css"

export default function ColumnList({ inputTitle ,inputList})
{


    return(
        <div className={styles.columnList}>
            <h3>{inputTitle}</h3>
            <ul className={styles.list}>
            {
                inputList.map((product) => (
                    <li key={uuidv4()}
                        className={styles.listElement}>
                        {product.name}</li>
                ))
            }
            </ul>

            
        </div>
    )
}