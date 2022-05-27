import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkK0x1fhAQJJVhpFBpHA_e3TokLCzoJRU",
    authDomain: "vlinx-76466.firebaseapp.com",
    projectId: "vlinx-76466",
    storageBucket: "vlinx-76466.appspot.com",
    messagingSenderId: "763842204667",
    appId: "1:763842204667:web:8448cd13c8808fa10b315e",
    measurementId: "G-JSX7JL19S6"
})

// //Database of the firebase
const db = firebaseApp.firestore()

// //Acessing authentication app in firebase
const auth = firebase.auth()

export { firebaseApp, db, auth }