import React from 'react'
import './product.css'

const Product = (props) => {
    return (
        <div className="product-box">
            <img className="product-image" alt="item" src={props.url}></img>
            <h1>{props.title}</h1>
            <h1>{props.artist}</h1>
            <h1>{props.price}</h1>
            
        </div>
    )
}

export default Product