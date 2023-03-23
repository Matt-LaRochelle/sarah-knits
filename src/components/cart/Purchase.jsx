import React from "react";
import products from "../../products";
import styles from "./Cart.module.css";

function Purchase(props) {

    const n = props.id;

    return (
        <div className={styles.purchase_container}>
            <hr></hr>
            <div className={styles.purchases}>
                <img className={styles.purchase_image} src={products[n].imgURL} alt={products[n].alt}></img>
                <h3 className={styles.purchase_description}>{products[n].title}: ${products[n].description.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default Purchase;