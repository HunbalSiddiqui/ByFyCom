import React, { Component } from 'react'
import './Credentials.css'
import UserCredentialsComponent from '../../Components/UserCredentialsComponent/UserCredentialsComponent'
export class Credentials extends Component {
    render() {
        return (
            <div className="credentials_cont">
                <div className="credentials_box_area flex">
                    <UserCredentialsComponent/>
                </div>
            </div>
        )
    }
}

export default Credentials
