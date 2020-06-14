import React from 'react'
import './CheckOut.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import CheckOutTable from '../../Components/CheckOutTable/CheckOutTable'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
function CheckOut(props) {
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
                    <div className="checkOut_footer"></div>
                </div>
            </div>
            :
            <Redirect to={'/'} />
    )
}

var mapStateToProps=(state)=>{
    return{
        currentUser:state.userReducer.userObj
    }
}

export default connect(mapStateToProps)(CheckOut)
