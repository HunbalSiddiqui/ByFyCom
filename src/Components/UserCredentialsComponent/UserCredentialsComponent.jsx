import React, { Component } from 'react'
import './UserCredentialsComponent.css'
export class UserCredentialsComponent extends Component {
    componentDidMount() {
        //showing signin form by default
        this.displaySigninForm()
    }

    displaySignupForm = () =>{
        //hiding signin btn
        var signin_hide = document.querySelectorAll('#signin_hide');
        signin_hide.forEach(element => {
            element.style.display = 'none';
        });
        //showing signup fields and btn
        var signup_hide = document.querySelectorAll('#signup_hide');
        signup_hide.forEach(element => {
            element.style.display = 'block';
        });
    }

    displaySigninForm = () =>{
        //hiding signup fields and btn
        var signup_hide = document.querySelectorAll('#signup_hide');
        signup_hide.forEach(element => {
            element.style.display = 'none';
        });
        //showing signup fields and btn
        var signin_hide = document.querySelectorAll('#signin_hide');
        signin_hide.forEach(element => {
            element.style.display = 'block';
        });
    }
    

    render() {
        return (
            <div className="UserCredentialsComponent">
                <div className="uc1r1 flex pointer" onClick={()=>{this.displaySignupForm()}}>
                    <p>Signup</p>
                </div>
                <div className="uc2r1 flex pointer" onClick={()=>{this.displaySigninForm()}}>
                    <p>Signin</p>
                </div>
                <div className="ucr2 flex">
                    <form className="flex-col">
                        <input className="input_field" type="text" placeholder="UserName"/>
                        <input id="signup_hide" className="input_field" type="text" placeholder="Email"/>
                        <input id="signup_hide" className="input_field" type="text" placeholder="Address"/>
                        <input className="input_field" type="text" placeholder="Password"/>
                        <button id="signin_hide" className="sign_btn pointer"
                        onClick={(e)=>{this.displaySignupForm(e)}}>Signin</button>
                        <button id="signup_hide" className="sign_btn pointer">Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserCredentialsComponent
