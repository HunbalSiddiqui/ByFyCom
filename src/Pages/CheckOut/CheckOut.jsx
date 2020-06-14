import React from 'react'
import './CheckOut.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import CheckOutTable from '../../Components/CheckOutTable/CheckOutTable'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { ConfirmOrder } from '../../Redux/user/userActions'
function CheckOut(props) {

    var Confirm = () =>{
        props.confirmOrder(props.orderObj,()=>{
            props.history.push('/');
        });

    }


    return (
        props.currentUser ?
            <div className="checkOut_cont">
                <div className="checkOut_wrapper">
                    <div className="checkOut_nav_area">
                        <HomeNav/>
                    </div>
                    <div className="checkOut_headings flex-col">
                        <h1 className="heading2">Here's what you are getting.</h1>
                        <h1 className="para1 lighter">Make sure to check the total price before confirming your order.</h1>
                    </div>
                    <div className="shopping_bag">
                        <CheckOutTable/>    
                    </div>
                    <div className="checkOut_footer flex">
                        <button className="confirmOrder_btn pointer"
                        onClick={()=>{Confirm()}}>Confirm Order</button>
                    </div>
                </div>
            </div>
            :
            <Redirect to={'/'} />
    )
}

var mapStateToProps=(state)=>{
    return{
        currentUser:state.userReducer.userObj,
        orderObj : state.userReducer.cart
    }
}

var actions = {
    confirmOrder : ConfirmOrder
}

export default connect(mapStateToProps,actions)(CheckOut)
