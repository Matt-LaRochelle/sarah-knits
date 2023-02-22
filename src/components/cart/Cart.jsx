import React from "react";
import styles from "./Cart.module.css";
import Purchase from "./Purchase";

function Cart() {
    return (
        <div className={styles.full}>
            <h1 className={styles.title}>Cart</h1>
            <Purchase />
            <Purchase />
            <div className={styles.checkout}>
                <h2 className={styles.total}>Total: $10.00</h2>
                <button className={styles.btn} type="submit">Purchase</button>
            </div>
        </div>
    );
}

export default Cart;