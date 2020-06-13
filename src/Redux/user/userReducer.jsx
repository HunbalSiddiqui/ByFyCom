import {SET_CURRENT_USER, ADD_TO_CART } from "./userConstants";

var initialState = {
    userObj:null,
    cart:[]
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
            console.log(payload)
            return{
                ...state,
                cart : [...state.cart,payload]
            }
        default:
            return state;
    }
}

export default userReducer