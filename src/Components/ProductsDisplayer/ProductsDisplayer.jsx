import React, { Component } from 'react'
import './ProductsDisplayer.css'
export class ProductsDisplayer extends Component {
    render() {
        return (
            <div className="product_displayer_cont flex">
                <div className="product_displayer_box"></div>
                <div className="product_displayer_box"></div>
                <div className="product_displayer_box"></div>
                <div className="product_displayer_box"></div>
                <div className="product_displayer_box"></div>
                <div className="product_displayer_box"></div>
            </div>
        )
    }
}

export default ProductsDisplayer
