import React, { Component } from 'react'
import './App.css'
import {Route,Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact/>  
        </Switch>        
      </div>
    )
  }
}
