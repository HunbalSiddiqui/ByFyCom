import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// import s1 from '../Components/imgs/s1.jpg'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyACHkNJDZE-p9Eoa7lR37kvTKn0he0cJbc",
    authDomain: "byfycom.firebaseapp.com",
    databaseURL: "https://byfycom.firebaseio.com",
    projectId: "byfycom",
    storageBucket: "byfycom.appspot.com",
    messagingSenderId: "261542869229",
    appId: "1:261542869229:web:e022fb3bb65f234c47b4e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const serverTimestamp = () => firebase.firestore.Timestamp.fromDate(new Date())
export const firebaseStorage = firebase.storage() 

export default firebase