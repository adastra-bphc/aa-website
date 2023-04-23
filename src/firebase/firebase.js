// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtWQDXwqsI0iUZ-4-4mZglxaVJfqiPUrs",
  authDomain: "aa-website-b1e7d.firebaseapp.com",
  projectId: "aa-website-b1e7d",
  storageBucket: "aa-website-b1e7d.appspot.com",
  messagingSenderId: "792379602887",
  appId: "1:792379602887:web:a8a23b8c6da3d9cfab0be2",
  measurementId: "G-23KV4CFJYG"
};


// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };