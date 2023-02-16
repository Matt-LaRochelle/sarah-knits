import React from "react";
import Product from "./Product.jsx";
import products from "../products";

function Home() {
    return (
        <div className="row">
            <div className="column">
            <Product
                title={products[0].title}
                imgURL={products[0].imgURL}
                description={products[0].description}
            />
            </div>
            <div className="column">
            <Product 
                title={products[1].title}
                imgURL={products[1].imgURL}
                description={products[1].description}
            />
            </div>
            <div className="column">
            <Product 
                title={products[2].title}
                imgURL={products[2].imgURL}
                description={products[2].description}
            />
            </div>
            <div className="column">
            <Product 
                title={products[3].title}
                imgURL={products[3].imgURL}
                description={products[3].description}
            />
            </div>
        </div>
    );
};

export default Home;