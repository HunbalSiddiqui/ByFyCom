import React from 'react'
import './HomeNav.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { userSignout } from '../../Redux/user/userActions'
import {withRouter} from 'react-router-dom'
function HomeNav(props) {


    var setUserSignout = () =>{
        props.Signout();
        //navigate to credentials page.
        props.history.push('/Credentials');
    }    

    return (
      <div className="HomeNav flex">
                    <div className="line"></div>
                    <div className="tabLink pointer flex"><Link to='/Contact'><p className="black para2"> Contact</p></Link></div>
                 {
                !props.currentUser ?  
                    <div className="tabLink pointer flex"><Link to='/Credentials'><p className="black para2"> Signin</p></Link></div>
                    :
                    <div className="tabLink pointer flex"><p className="black para2"
                    onClick={()=>{setUserSignout()}}>Signout</p></div>
                }
                 {
                    props.currentUser ? 
                    <div className="tabLink pointer flex"><Link to='/Credentials'><p className="black para2"> <i className="fas fa-shopping-cart"></i></p></Link></div>
                    :null 
                }
        </div>
    )
}
var mapStateToProps=(state)=>{
    return{
        currentUser:state.userReducer.userObj
    }
}
var actions = {
    Signout : userSignout
}
export default connect(mapStateToProps,actions)(withRouter(HomeNav))
