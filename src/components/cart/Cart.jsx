import React from "react";
import styles from "./Cart.module.css";

function Cart() {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Cart</h1>
            <p className={styles.content}>Item 1</p>
            <p className={styles.content}>Item 2</p>
            <p className={styles.content}>Pay here?</p>
        </div>
    );
}

export default Cart;