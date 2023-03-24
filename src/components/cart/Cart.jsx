import React from "react";
import styles from "./Cart.module.css";
import Purchase from "./Purchase";

function Cart(props) {

    const cart = props.cartItems;

    return (
        <div className={styles.full}>
            <h1 className={styles.title}>Cart</h1>
            {/* {cartItems.length === 0 && <div>No items are added.</div>} */}
            <h3>{cart}</h3>
            {cart.map(item => {
                return <Purchase 
                    id={item - 1}
                />
            })}
            <div className={styles.checkout}>
                <h2 className={styles.total}>Total: $10.00</h2>
                <button className={styles.btn} type="submit">Purchase</button>
            </div>
        </div>
    );
}

export default Cart;