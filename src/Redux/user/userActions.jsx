import { USER_SIGNUP } from "./userConstants"

export var userSignup=(userObj)=>{
    //remove password field from state for protection.
    delete userObj.password
    return async(Dispatch)=>{
        Dispatch({
            type:USER_SIGNUP,
            payload:userObj
        })
    }
}

export var userSi