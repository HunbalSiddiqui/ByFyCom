import {combineReducers} from 'redux'
import userReducer from './user/userReducer'

var rootReducer = combineReducers({
    userReducer:userReducer
})
export default rootReducer