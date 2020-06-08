import React, { Component } from 'react'
import './Credentials.css'
import UserCredentialsComponent from '../../Components/UserCredentialsComponent/UserCredentialsComponent'
import {Link} from 'react-router-dom'
import { auth } from '../../Firebase/Firebase'
export class Credentials extends Component {
    state = {
        flag :true
    }
    componentDidMount() {
        auth.onAuthStateChanged(async(user)=>{
            if(user)
            {
                //redirect user to home page.
                this.props.history.push('/')
            }
        })
    }
    


    render() {
        return (
            <div className="credentials_cont">
                <div className="goback_btn flex">
                    <Link to={`/`}><h1 className="para4 pointer black"><i className="fas fa-long-arrow-alt-left"></i> GoBack</h1></Link>
                </div>
                <div className="credentials_box_area flex">
                    <UserCredentialsComponent/>
                </div>
            </div>
        )
    }
}

export default Credentials
