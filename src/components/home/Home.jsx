import React from "react";
import Product from "./Product";
import products from "../../products";
import styles from "./Home.module.css";

function createCard(product) {
    return <Product 
        key={product.key}
        id={product.id}
        title={product.title}
        imgURL={product.imgURL}
        alt={product.alt}
        description={product.description}
        cart={product.cart}
    />
}

function Home() {
    return (
        <div className={styles.full}>
        <h1 className={styles.title}>My Knitting Projects</h1>
            <div>
                <div className={styles.container}>
                {products.map(createCard)}
                </div>
            </div>
        </div>
    );
};

export default Home;