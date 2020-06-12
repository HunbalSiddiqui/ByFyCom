import React, { Component } from 'react'
import './ProductsDisplayer.css'
import { firebaseStorage } from '../../Firebase/Firebase';
export class ProductsDisplayer extends Component {

    componentDidMount() {
        this.displayShoes()   
    }

    displayShoes = async() =>{
        //fetch div
        var product_displayer_cont = document.querySelector('.product_displayer_cont');
        //fetch images and products info
        try {
            var check = await firebaseStorage.ref('shoes/').listAll();
            //get image through download url
            check.items.forEach(element => {
                element.getDownloadURL().then((url)=>{
                    
                    //display products
                    product_displayer_cont.insertAdjacentHTML('beforeend',
                    `<div class="product_displayer_box">
                        <div class="product_image">
                            <img class="product_image_setting" src=${url} alt="p"/>
                        </div>
                    </div>`)
                })
            });
        } catch (error) {
            
        }
    }
    

    render() {
        return (
            <div className="product_displayer_cont flex">
                {/* <div className="product_displayer_box">
                </div>
                <div className="product_displayer_box">
                </div>
                <div className="product_displayer_box">
                </div>
                <div className="product_displayer_box">
                </div>
                <div className="product_displayer_box">
                </div>
                <div className="product_displayer_box">
                </div> */}
            </div>
        )
    }
}

export default ProductsDisplayer
