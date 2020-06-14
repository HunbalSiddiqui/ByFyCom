import React,{useEffect,useState} from 'react'
import './ProductDetails.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import { firestore, firebaseStorage } from '../../Firebase/Firebase'
import {connect} from 'react-redux'
import { addToCart } from '../../Redux/user/userActions'
function ProductDetails(props) {
    useEffect(()=>{
        fetchProductDetails()
    }
    ,
    []
    )
    
    var [stateName,setName] = useState(null) 
    var [statePrice,setPrice] = useState(null) 
    var [stateQt,setQt] = useState(1) 

    var fetchProductDetails =async () => {
        var {uid} = props.match.params;
        //fetch details
        var snap = await firestore.collection('allProducts').doc(uid).get();
        var {name,price,imgName} = snap.data();
        
        setName(name);
        setPrice(price);        
        fetchandDisplayProductImg(imgName)
    }

    var fetchandDisplayProductImg = async (imgName) => {
        //get div
        var productDetails_det_img = document.querySelector('.productDetails_det_img');
        // Create a reference to the file we want to download
        try {
        var starsRef =  firebaseStorage.ref(`allProducts/${imgName}`);
        } catch (error) {
            console.log(error)
        }
 
        // Get the download URL
        starsRef.getDownloadURL().then(function(url) {
            // Insert url into an <img> tag to "download"
            productDetails_det_img.insertAdjacentHTML('beforeend',
            `
            <img class="product_image_setting" src=${url} alt="p"/>
            `)
          }).catch(function(error) {
            console.log(error)
          });


        
    }//hi

    var addToCart = () => {
        var price = statePrice*stateQt;
        var productObj = {
            name:stateName,price:statePrice,qt:stateQt,price
        }
        props.addToCart(productObj)
    }

    return (
        stateName || statePrice ?
                
                <div className="productDetails_cont">
                    <div className="productDetails_wrapper">
                        <div className="productDetails_navarea">
                            <HomeNav/>
                        </div>
                        <div className="productDetails_det">
                            <div className="productDetails_det_img"></div>
                            <div className="productDetails_det_details">
                                <h1 className="heading2 lighter">{stateName}</h1>
                                <h1 className="heading3 bolder">Price : {statePrice}$</h1>
                                <label className="para2" htmlFor="qt">QT</label>
                                <input className="qt_width para2" type="number" name="" id=""  value={stateQt}
                                onChange={(e)=>{setQt(e.target.value)}}/><br></br>
                                {stateQt>0 ?
                                    <button className="addtocart_btn pointer"
                                    onClick={()=>{addToCart()}}>Add To Cart</button>
                                        :
                                    null
                                }
                            </div>
                        </div>
                        <div className="productDetails_footer">

                        </div>
                    </div>
                </div>
                :
                <h1>Loading</h1>
    )
}
var actions = {
    addToCart:addToCart
}
var mapStateToProps = (state) => {
    // console.log(state.userReducer)
    return {
        
    }
}
export default connect(mapStateToProps,actions)(ProductDetails)
