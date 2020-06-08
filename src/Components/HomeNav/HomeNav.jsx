import React,{useState,useEffect} from 'react'
import './HomeNav.css'
import {Link} from 'react-router-dom'
import { auth } from '../../Firebase/Firebase'
import {connect} from 'react-redux'
import { userSignout } from '../../Redux/user/userActions'
import {withRouter} from 'react-router-dom'
function HomeNav(props) {
    //we will use hooks for the state and lifecycles(

    var [flag,setFlag] = useState(false)
    var [fireBaseListener,setfireBaseListener] = useState(null)
    //component did mount
    useEffect(()=>{

         setfireBaseListener(auth.onAuthStateChanged(async(user)=>{
            if(user)
            {
                setFlag(true)
            }
            else {
                setFlag(false)
            }
        }))
        return ()=>{
            setfireBaseListener(null)
            console.log("m out")
        }
    },[])

    var setUserSignout = () =>{
        props.Signout();
        //set flag to false
        setFlag = false
        //navigate to credentials page.
        props.history.push('/Credentials');
    }    

    return (
        <div className="HomeNav flex">
            <div className="line"></div>
            <div className="tabLink pointer flex"><Link to='/Contact'><p className="black"> Contact</p></Link></div>
        {
        !flag ?  
            <div className="tabLink pointer flex"><Link to='/Credentials'><p className="black"> Signin</p></Link></div>
            :
            <div className="tabLink pointer flex"><p className="black"
            onClick={()=>{setUserSignout()}}>Signout</p></div>
        }
        </div>
    )
}
var actions = {
    Signout : userSignout
}
export default connect(null,actions)(withRouter(HomeNav))
