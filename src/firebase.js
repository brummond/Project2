import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDUxO8T4_h02GP0SL1BNUazwTbeG3x9PUA",
    authDomain: "project-2-ad2f3.firebaseapp.com",
    databaseURL: "https://project-2-ad2f3.firebaseio.com",
    projectId: "project-2-ad2f3",
    storageBucket: "project-2-ad2f3.appspot.com",
    messagingSenderId: "566603289089",
    appId: "1:566603289089:web:8c96f3ef47a6c414cfe600",
    measurementId: "G-RR32H4KZJX"
};
  
firebase.initializeApp(config);



export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
