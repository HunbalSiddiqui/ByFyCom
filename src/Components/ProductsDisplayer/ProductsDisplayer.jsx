import React, { Component } from 'react'
import './ProductsDisplayer.css'
import { firebaseStorage, firestore } from '../../Firebase/Firebase';
export class ProductsDisplayer extends Component {

    componentDidMount() {
        this.displayShoes()   
    }
    myFunction=()=> {
        console.log("object")
    }
    displayShoes = async() =>{
        
        //fetch div
        var product_displayer_cont = document.querySelector('.product_displayer_cont');
        //fetch images and products info
        try {
            var check = await firebaseStorage.ref('shoes/').listAll();
            //get image through download url
            check.items.forEach( element => {
                var name = element.name.split('.')[0];
                element.getDownloadURL().then(async(url)=>{
                    //fetch price
                    var productObj = await firestore.collection('shoes').doc(name).get();
                    //display products
                    product_displayer_cont.insertAdjacentHTML('beforeend',
                    `<div class="product_displayer_box pointer" id="${name}"  >
                        <div class="product_image">
                            <img class="product_image_setting" src=${url} alt="p"/>
                        </div>
                        <div class="product_price flex-col">
                            <h1 class="para2">${name}</h1>
                            <h1 class="para2 lighter">${productObj.data().price}$</h1>
                        </div>
                    </div>`)
                    document.querySelector("#"+name).addEventListener('click',()=>{
                        console.log(name)
                    })
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
