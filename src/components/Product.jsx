import React from "react";

function Product() {
    return <div className="product">
    <img src="../../public/cat.png" className="prodimg" alt="img of cat with yarn"/>
    <h3>Title of Project</h3>
    <p>Brief Description</p>
    <button type="submit">Add to Cart</button>
    </div>
}

export default Product;