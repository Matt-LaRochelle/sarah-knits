import React from "react";
import Product from "./Product.jsx";
import products from "../products";

function createCard(product) {
    return <Product 
        title={product.title}
        imgURL={product.imgURL}
        alt={product.alt}
        description={product.description}
    />
}

function Home() {
    return (
        <div className="row">
        <h1 className="product-title">My Knitting Projects</h1>
            <div>
            {products.map(createCard)}
            </div>
        </div>
    );
};

export default Home;