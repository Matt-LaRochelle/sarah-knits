import React from "react";
import styles from "./Cart.module.css";

function Cart() {
    return (
        <div>
            <h1 className={styles.title}>Cart</h1>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Pay here?</p>
        </div>
    );
}

export default Cart;