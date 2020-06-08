import { USER_SIGNUP } from "./userConstants"
import { serverTimestamp } from "../../Firebase/Firebase";
import uid from "uid";
export var userSignup=(userObj)=>{
    //add server time stamp in user object.
    userObj.cratedAt = serverTimestamp()
    //add unique uid.
    userObj.uid = uid()
    //remove password field from state for protection.
    delete userObj.password;
    return async(Dispatch)=>{
        Dispatch({
            type:USER_SIGNUP,
            payload:userObj
        })
    }
}

export var userSignin=(userObj)=>{
    
    return async(Dispatch)=>{

    }
}