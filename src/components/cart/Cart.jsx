import React, { useState } from "react";
import styles from "./Cart.module.css";
import Purchase from "./Purchase";
import products from '../../products';

function Cart(props) {

    const cart = props.cartItems;

    // const [total, setTotal] = useState(0);

    // setTotal(() => {
    //     for (let i = 0; i < cart.length; i++) {
    //         const id = cart[i];
    //         total + products[id].description;
    //     }});

    // This needs to be moved to the App, when you click add - it will increase the amount. 



    return (
        <div className={styles.full}>
            <h1 className={styles.title}>Cart</h1>
            {/* {cartItems.length === 0 && <div>No items are added.</div>} */}
            <h3>{cart}</h3>
            {cart.map(item => {
                return <Purchase 
                    id={item}
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