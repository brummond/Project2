import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDvYbwTMcMAW3gIjU9PPTHf0PQYh47_UhM",
  authDomain: "project2final-94a60.firebaseapp.com",
  projectId: "project2final-94a60",
  storageBucket: "project2final-94a60.appspot.com",
  messagingSenderId: "465704644732",
  appId: "1:465704644732:web:bac39db1407506096599f9",
  measurementId: "G-LHX14NVVMY"
};

firebase.initializeApp(config);



export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
