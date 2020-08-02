import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // firebase config from firebase console
    apiKey: "AIzaSyCc29csRsgBEGdNLPwD5F0MFo2Tkl1MXTo",
    authDomain: "todo-app-315b5.firebaseapp.com",
    databaseURL: "https://todo-app-315b5.firebaseio.com",
    projectId: "todo-app-315b5",
    storageBucket: "todo-app-315b5.appspot.com",
    messagingSenderId: "656795047812",
    appId: "1:656795047812:web:ff8cb26d445cbe0e5fefd1",
    measurementId: "G-LNQPHBDZMV"
});

const db = firebaseApp.firestore();

export default db;