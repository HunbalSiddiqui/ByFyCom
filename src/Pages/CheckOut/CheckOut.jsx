import React from 'react'
import './CheckOut.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
function CheckOut() {
    return (
        <div className="checkOut_cont">
            <div className="checkOut_wrapper">
                <div className="checkOut_nav_area">
                    <HomeNav/>
                </div>
                <div className="checkOut_headings flex-col">
                    <h1 className="heading2">Heading</h1>
                    <h1 className="para1">paragraph</h1>
                </div>
                <div className="shopping_bag">

                </div>
                <div className="checkOut_footer"></div>
            </div>
        </div>
    )
}

export default CheckOut
