import React from "react";
import Product from "./Product.jsx";

function Home() {
    return (
        <div className="row">
            <div className="column">
            <Product />
            </div>
            <div className="column">
            <Product />
            </div>
            <div className="column">
            <Product />
            </div>
            <div className="column">
            <Product />
            </div>
        </div>
    );
};

export default Home;