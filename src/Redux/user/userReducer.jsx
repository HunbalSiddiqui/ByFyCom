import {SET_CURRENT_USER } from "./userConstants";

var initialState = {
    userObj:null
}


var userReducer = (state=initialState,action)=>{
    var {payload,type} = action
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                userObj:payload
            }
    
        default:
            return state;
    }
}

export default userReducer