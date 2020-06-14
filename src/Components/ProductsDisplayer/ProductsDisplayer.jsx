import React, { Component } from 'react'
import './ProductsDisplayer.css'
import { firebaseStorage, firestore } from '../../Firebase/Firebase';
import {withRouter} from 'react-router-dom'
export class ProductsDisplayer extends Component {

    state = {
        stateName : null
    }

    componentDidMount() {
        var {uid} = this.props.match.params;
        switch (uid) {
            case 'shoes':
                this.displayShoes()  
                break;
            case 'mentshirts':
                this.displaytShirtsMen()
                break;    
            case 'womentshirts':
                this.displaytShirtsWomen()
                break;              
            default:
                this.props.history.push('/');
        }   
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
                this.setState((prevState)=>({
                    stateName : name  
                }))
                element.getDownloadURL().then(async(url)=>{
                    //fetch price
                    var productObj = await firestore.collection('shoes').doc(name).get();
                    //display products
                    product_displayer_cont.insertAdjacentHTML('beforeend',
                    `<div class="product_displayer_box pointer" id="${name}"  >
                        <div class="product_image" >
                            <img class="product_image_setting" src=${url} alt="p" id="${name}"/>
                        </div>
                        <div class="product_price flex-col">
                            <h1 class="para2">${name}</h1>
                            <h1 class="para2 lighter">${productObj.data().price}$</h1>
                        </div>
                    </div>`)
                    //set an on click function for all the products
                    // document.querySelector("#"+name).addEventListener('click',()=>{
                    //     this.props.history.push(`/Product/shoes/${name}`)
                    // })
                })
            });
        } catch (error) {
            
        }
    }
    

    displaytShirtsMen = async() =>{
        //fetch div
        var product_displayer_cont = document.querySelector('.product_displayer_cont');
        //fetch images and products info
        try {
            var check = await firebaseStorage.ref('t-shirts(men)/').listAll();
            //get image through download url
            check.items.forEach( element => {
                var name = element.name.split('.')[0];
                this.setState((prevState)=>({
                    stateName : name  
                }))
                element.getDownloadURL().then(async(url)=>{
                    //fetch price
                    var productObj = await firestore.collection('t-shirts(men)').doc(name).get();
                    //display products
                    product_displayer_cont.insertAdjacentHTML('beforeend',
                    `<div class="product_displayer_box pointer" id="${name}"  >
                        <div class="product_image">
                            <img class="product_image_setting" src=${url} alt="p" id="${name}"/>
                        </div>
                        <div class="product_price flex-col">
                            <h1 class="para2">${name}</h1>
                            <h1 class="para2 lighter">${productObj.data().price}$</h1>
                        </div>
                    </div>`)
                    //set an on click function for all the products
                    // document.querySelector("#"+name).addEventListener('click',()=>{
                    //     this.props.history.push(`/Product/mentshirts/${name}`)
                    // })
                })
            });
        } catch (error) {
            
        }
    }


    displaytShirtsWomen = async() =>{
                //fetch div
                var product_displayer_cont = document.querySelector('.product_displayer_cont');
                //fetch images and products info
                try {
                    var check = await firebaseStorage.ref('t-shirts(women)/').listAll();
                    //get image through download url
                    check.items.forEach( element => {
                        var name = element.name.split('.')[0];
                        this.setState((prevState)=>({
                            stateName : name  
                        }))
                        element.getDownloadURL().then(async(url)=>{
                            //fetch price
                            var productObj = await firestore.collection('t-shirts(women)').doc(name).get();
                            //display products
                            product_displayer_cont.insertAdjacentHTML('beforeend',
                            `<div class="product_displayer_box pointer" id="${name}"  >
                                <div class="product_image">
                                    <img class="product_image_setting" src=${url} alt="p" id="${name}"/>
                                </div>
                                <div class="product_price flex-col">
                                    <h1 class="para2">${name}</h1>
                                    <h1 class="para2 lighter">${productObj.data().price}$</h1>
                                </div>
                            </div>`)
                            //set an on click function for all the products
                            // document.querySelector("#"+name).addEventListener('click',()=>{
                            //     this.props.history.push(`/Product/womentshirts/${name}`)
                            // })
                        })
                    });
                } catch (error) {
                    
                }
    }


    checkForClickedId = async(e) =>{
        if(e.target.id)
        {
            this.props.history.push(`/Product/shoes/${e.target.id}`)
        }
    }

    render() {
        return (
            this.state.stateName ?
                    <div className="product_displayer_cont flex"
                    onClick={(e)=>{this.checkForClickedId(e)}}>
                    </div>
                    :
                    <div className="product_displayer_cont flex">
                        <h1>LOADING</h1>
                    </div>
        )   
    }
}

export default withRouter(ProductsDisplayer)
