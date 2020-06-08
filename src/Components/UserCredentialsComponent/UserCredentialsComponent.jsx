import React, { Component } from 'react'
import './UserCredentialsComponent.css'
import {connect} from 'react-redux'
import { userSignup } from '../../Redux/user/userActions'
export class UserCredentialsComponent extends Component {
    state = {
        username:'',email:'',mobile:'',address:'',password:''
    }
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
    
    setUserSignup = (e) =>{
        e.preventDefault()
        var {username,email,address,password,mobile} = this.state;
        var {userSignup} = this.props;
        //create user Object
        var userObj ={username,email,mobile,address,password};
        //send to user Actions
        userSignup(userObj);
    }

    handleFormInput = (e) => {
        var {name,value} = e.target;
        this.setState((prevState)=>({
            [name]:value
        }))
    }

    render() {
        var {username,email,address,password,mobile} = this.state;

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
                        <input onChange={(e)=>{this.handleFormInput(e)}} name='username' value={username} className="input_field" type="text" placeholder="UserName"/>
                        <input onChange={(e)=>{this.handleFormInput(e)}} name='email' value={email} id="signup_hide" className="input_field" type="email" placeholder="Email"/>
                        <input onChange={(e)=>{this.handleFormInput(e)}} name='mobile' value={mobile} id="signup_hide" className="input_field" type="number" placeholder="MobileNumber"/>
                        <input onChange={(e)=>{this.handleFormInput(e)}} name='address' value={address} id="signup_hide" className="input_field" type="text" placeholder="Address"/>
                        <input onChange={(e)=>{this.handleFormInput(e)}} name='password' value={password} className="input_field" type="password" placeholder="Password"/>
                        <button id="signin_hide" className="sign_btn pointer"
                        onClick={(e)=>{this.displaySignupForm(e)}}>Signin</button>
                        <button id="signup_hide" className="sign_btn pointer"
                        onClick={(e)=>{this.setUserSignup(e)}}>Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}
var actions = {
    userSignup : userSignup
}
export default connect(null,actions)(UserCredentialsComponent)
