import { USER_SIGNUP } from "./userConstants"
import { serverTimestamp, firestore, auth } from "../../Firebase/Firebase";

export var setCurrentUer=(userObj)=>{
    return{
        type:USER_SIGNUP,
        payload:userObj
    }
}


export var userSignup=(userObj)=>{
    //add server time stamp in user object.
    userObj.cratedAt = serverTimestamp();
    //add unique uid.
    // userObj.uid = uid();
    return async(Dispatch)=>{
        //create user object
        var createdUser = await auth.createUserWithEmailAndPassword(userObj.email,userObj.password);
        userObj.uid = createdUser.user.uid;
        //save data to firestore
        await firestore.collection('users').doc(createdUser.user.uid).set(userObj);

        //remove password field from state for protection.
        delete userObj.password;

        //set user state for local state
        // Dispatch(setCurrentUer(userObj))
    }
}

export var userSignin=(userObj)=>{
    
    return async(Dispatch)=>{

    }
}


export var userSignout=()=>{

    return async(Dispatch)=>{
        //signout
        await auth.signOut();
        //set local state to null
        // Dispatch(null)
    }
}