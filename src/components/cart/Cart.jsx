import React from "react";
import styles from "./Cart.module.css";
import Purchase from "./Purchase";

function Cart({cartItems}) {
    return (
        <div className={styles.full}>
            <h1 className={styles.title}>Cart</h1>
            {cartItems.length === 0 && <div>No items are added.</div>}
            <div>
                {cartItems.map((item) =>(
                    <div key={item.id} className="cart-items-list">
                    <img 
                        className="cart-items-image" 
                        src={item.image} 
                        alt={item.name}/>
                    </div>
                ))}
            </div>
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