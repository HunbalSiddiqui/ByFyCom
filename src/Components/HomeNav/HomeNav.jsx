import React from 'react'
import './HomeNav.css'
import {Link} from 'react-router-dom'
function HomeNav() {
    return (
        <div className="HomeNav flex">
            <div className="line"></div>
            <div className="tabLink pointer flex"><Link to='/Contact'><p className="black"> Contact</p></Link></div>
            <div className="tabLink pointer flex"><Link to='/Credentials'><p className="black"> Signin</p></Link></div>
        </div>
    )
}

export default HomeNav
