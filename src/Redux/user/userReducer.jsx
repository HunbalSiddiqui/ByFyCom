import {SET_CURRENT_USER, ADD_TO_CART} from "./userConstants";

var initialState = {
    userObj:null,
    cart:[],
    totalPrice:0
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
                cart : [...state.cart,payload],
                totalPrice : state.totalPrice+payload.price
            }
        default:
            return state;
    }
}

export default userReducer