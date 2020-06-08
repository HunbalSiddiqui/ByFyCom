import { USER_SIGNUP } from "./userConstants";

var initialState = {
    userObj:null
}


var userReducer = (state=initialState,action)=>{
    var {payload,type} = action
    switch (type) {
        case USER_SIGNUP:
            return {
                ...state,
                userObj:payload
            }
    
        default:
            return state;
    }
}

export default userReducer