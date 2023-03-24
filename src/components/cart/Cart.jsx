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
            {cart.map(item => {
                return <Purchase 
                    id={item}
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