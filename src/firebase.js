import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyB607LJ2APvSMrs5KIRghyxhea9CqFV7f4",
    authDomain: "auth-ee24d.firebaseapp.com",
    projectId: "auth-ee24d",
    storageBucket: "auth-ee24d.appspot.com",
    messagingSenderId: "67475326884",
    appId: "1:67475326884:web:a605f9c266c207ef116331",
    measurementId: "G-RPQ8VHT7WR"
});

let db = firebase.firestore()
// let storage = firebase.storageBucket()
let auth=firebase.auth()

export {
    firebase, db,auth
}