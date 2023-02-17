import React from "react";

function Product(props) {
    return <div className="product">
    <img src={props.imgURL} className="prod-img" alt={props.alt}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <button type="submit">Add to Cart</button>
    </div>
}

export default Product;