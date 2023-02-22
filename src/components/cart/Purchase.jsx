import React from "react";
import products from "../../products";
import styles from "./Cart.module.css";

function Purchase() {
    return (
        <div className={styles.purchase_container}>
            <hr></hr>
            <div className={styles.purchases}>
                <img className={styles.purchase_image} src={products[1].imgURL} alt={products[1].alt}></img>
                <h3 className={styles.purchase_description}>{products[1].title}: {products[1].description}</h3>
            </div>
        </div>
    )
}

export default Purchase;