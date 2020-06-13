import {SET_CURRENT_USER, ADD_TO_CART } from "./userConstants";

var initialState = {
    userObj:null,
    cart:null
}


var userReducer = (state=initialState,action)=>{
    var {payload,type} = action
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                userObj:payload
            }
        case ADD_TO_CART:
            return{
                ...state,
                cart:payload
            }
        default:
            return state;
    }
}

export default userReducer