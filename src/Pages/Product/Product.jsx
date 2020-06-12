import React, { Component } from 'react'
import './Product.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import ProductsDisplayer from '../../Components/ProductsDisplayer/ProductsDisplayer'
export class Product extends Component {
    render() {
        return (
            <div className="product_container">
                <div className="product_wrapper">
                    <div className="product_nav_area">
                        <HomeNav/>
                    </div>
                    <div className="products_area">
                        <ProductsDisplayer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
