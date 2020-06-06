import React, { Component } from 'react'
import './App.css'
import {Route,Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Components/Contact/Contact'
import Credentials from './Components/Credentials/Credentials'
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact/>  
          <Route path='/Contact' component={Contact}/>  
          <Route path='/Signin' component={Credentials} exact/>  
        </Switch>        
      </div>
    )
  }
}