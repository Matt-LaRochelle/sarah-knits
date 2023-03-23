import React from "react";
import Product from "./Product";
import products from "../../products";
import styles from "./Home.module.css";

function Home(props) {
    return (
        <div className={styles.full}>
        <h1 className={styles.title}>My Knitting Projects</h1>
            <div>
                <div className={styles.container}>
                {products.map((product) => {
                    return <Product 
                        key={product.key}
                        id={product.id}
                        title={product.title}
                        imgURL={product.imgURL}
                        alt={product.alt}
                        description={product.description}
                        onAdd={props.handleAddProduct}
                    />
                })}
                </div>
            </div>
        </div>
    );
};

export default Home;