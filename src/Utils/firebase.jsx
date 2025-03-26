// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { getDatabase, ref, onValue, set, push, update, onDisconnect } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFvzqfhb6yU_cPqgzuNLKbKtqk6kBciTc",
    authDomain: "mumvets-96e40.firebaseapp.com",
    projectId: "mumvets-96e40",
    storageBucket: "mumvets-96e40.firebasestorage.app",
    messagingSenderId: "409634418477",
    appId: "1:409634418477:web:cd53ccf4374de38aa9ada4",
    measurementId: "G-PPX0596E5N"
  };
  
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firebase
const db = getFirestore(app);
export { db, ref, onValue, set, push, update, onDisconnect, auth, provider};