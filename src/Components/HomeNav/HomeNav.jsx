import React from 'react'
import './HomeNav.css'
function HomeNav() {
    return (
        <div className="HomeNav flex">
            <div className="line"></div>
            <div className="tabLink pointer flex"><p>Contact</p></div>
            <div className="tabLink pointer flex"><p>Signin</p></div>
        </div>
    )
}

export default HomeNav
