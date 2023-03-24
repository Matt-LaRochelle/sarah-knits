import React from "react";
import styles from "./Cart.module.css";
import Purchase from "./Purchase";


function Cart(props) {

    const cart = props.cartItems;

    return (
        <div className={styles.full}>
            <h1 className={styles.title}>Cart</h1>
            {props.cartItems.length === 0 && <div className={styles.empty}>No items are added.</div>}
            {cart.map(item => {
                return <Purchase 
                    id={item}
                    handleDeleteProduct={props.handleDeleteProduct}
                />
            })}
            <div className={styles.checkout}>
                <h2 className={styles.total}>Total: ${props.total.toFixed(2)}</h2>
                <button className={styles.btn} type="submit">Purchase</button>
            </div>
        </div>
    );
}

export default Cart;