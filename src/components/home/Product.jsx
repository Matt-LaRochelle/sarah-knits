import React, { useState } from "react";
import styles from "./Home.module.css";



function Product(props, {cartItems}) {
    const [cart, setCart] = useState(-1);

    function clickHandler(event) {
        setCart(cart * -1);
        var id = props.id
        cartItems.push({id, cart})
        console.log(cartItems)
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