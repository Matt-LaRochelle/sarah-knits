import React from "react";
import styles from "./Home.module.css";

function Product(props) {
    function clickHandler(event) {
        console.log(props.id, props.cart)
    }

    return (
        <div className={styles.card}>
            <img src={props.imgURL} className={styles.image} alt={props.alt}/>
            <h3 className={styles.product_title}>{props.title}</h3>
            <p>{props.description}</p>
            <button className={styles.button} onClick={clickHandler} type="submit">Add to Cart</button>
        </div>
    );
}

export default Product;