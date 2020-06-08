import React, { Component } from 'react'
import './App.css'
import {Route,Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Credentials from './Pages/Credentials/Credentials'
import Product from './Pages/Product/Product'
import Contact from './Pages/Contact/Contact'
import { auth, firestore } from './Firebase/Firebase'
import { connect } from 'react-redux'
import { setCurrentUer } from './Redux/user/userActions'
export class App extends Component {

  componentDidMount() {
    auth.onAuthStateChanged(async(user)=>{
        if(user)
        {
            //get uid from user
            var {uid} = user;
            //get full data from firestore using uid
            var userSnap = await firestore.collection('users').doc(uid).get()
            var userData = userSnap.data();
            var {email,username,mobile,address} = userData
            var userObj = {
                email,username,mobile,address
            }
            // set local state
            this.props.setCurrentUser(userObj)
        }
        else{
            console.log("no user logged in.")
            this.props.setCurrentUser(null)
        }
    })
}


  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact/>  
          <Route path='/Contact' component={Contact}/>  
          <Route path='/Credentials' component={Credentials}/>  
          <Route path='/Product:uid' component={Product}/>  
        </Switch>        
      </div>
    )
  }
}

var actions={
  setCurrentUser:setCurrentUer
}

export default connect(null,actions)(App)
