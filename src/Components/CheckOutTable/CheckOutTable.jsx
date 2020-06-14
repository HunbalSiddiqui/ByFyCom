import React,{useEffect} from 'react'
import './CheckOutTable.css'
import {connect} from 'react-redux'
function CheckOutTable(props) {


    useEffect(()=>{
        showProductsOnTable()
    }
    ,
    []
    )

    var showProductsOnTable = () => {
    if(props.products)
    {
        var allColumns = document.querySelectorAll('.products_col')    
        props.products.forEach(properties => {
            //fetch details
            var {name,price,qt,singleProductPrice} = properties;
            //set in each col
            allColumns.forEach(element => {
                switch (element.id) {
                    case 'name_col' :
                        element.insertAdjacentHTML('beforeend',
                        `<div class="item">${name}</div>`);
                        break;
                    case 'qt_col' :
                            element.insertAdjacentHTML('beforeend',
                            `<div class="item">${qt} x</div>`);
                            break;
                    case 'ip_col' :
                            element.insertAdjacentHTML('beforeend',
                            `<div class="item">$${singleProductPrice}</div>`);
                            break;
                    case 'price_col':
                            element.insertAdjacentHTML('beforeend',
                            `<div class="item">$${price}</div>`);
                            break;
                    // case 'totalPrice_col' :
                    //         element.insertAdjacentHTML('beforeend',
                    //         `<div class="item"><button class="remove_item_btn">Remove</button></div>`);
                    //         break;
                                        
                    default:
                        break;
                }
            });
        });

    }

    }

    return (
        <div className="CheckOutTable_cont">
            <div className="name_col">
                <div className="col_name flex">Name</div>
                <div className="products_col flex-col" id="name_col">
                </div>
            </div>
            <div className="qt_col">
                <div className="col_name flex">Quantity</div>
                <div className="products_col flex-col" id="qt_col">
                </div>
            </div>
            <div className="individual_price_col">
                <div className="col_name flex">Individual Price</div>
                <div className="products_col flex-col" id="ip_col">
                </div>
            </div>
            <div className="price_col">
                <div className="col_name flex">Price</div>
                <div className="products_col flex-col" id="price_col"> 
                </div>
            </div>
            <div className="totalPrice_col">
                <div className="col_name flex">TOTAL PRICE</div>
                <div className="products_col flex-col" id="totalPrice_col">
                    <h1 className="para1 bolder">${props.TotalPrice}</h1>
                </div>
            </div>
        </div>
    )
}

var mapStateToProps = (state) =>{
    return{
        products : state.userReducer.cart,
        TotalPrice : state.userReducer.totalPrice
    }
}


export default connect(mapStateToProps)(CheckOutTable)
