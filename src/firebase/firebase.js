import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyC_flKosPn-LPJF8JsKT3-IhlI3RDMOjqk",
    authDomain: "discord-clone-12045.firebaseapp.com",
    projectId: "discord-clone-12045",
    storageBucket: "discord-clone-12045.appspot.com",
    messagingSenderId: "889501806287",
    appId: "1:889501806287:web:a96c4cf73eee4e8b2c11ba"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  export const db=firebaseApp.firestore();
  export const firestore=firebase.firestore();
  export const auth=firebase.auth();