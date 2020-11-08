import { Button } from 'antd'
import React from 'react'
import "./Product.less"

const Product = ({ title, image, price, rating, index }) => {
    return (
        <div className="product">
            <div className="product-info">
                <p>The lean startup</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product-rating">
                    <p style={{ marginLeft: "5px" }}>{'⭐'}</p>
                    <p>{'⭐'}</p>
                </div>
            </div>
            <img src={`https://source.unsplash.com/random/600x80${index}`} alt="" />
            <Button type="primary">Add to Basket</Button>
        </div >
    )
}

export default Product
