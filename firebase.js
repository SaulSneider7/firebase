
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBA18JCPdYuxmmh_DiDv3aMLU9xKA0gUxY",
    authDomain: "fir-f7f37.firebaseapp.com",
    projectId: "fir-f7f37",
    storageBucket: "fir-f7f37.appspot.com",
    messagingSenderId: "96406269000",
    appId: "1:96406269000:web:c713a2ffb45f0d97b53c7d",
    measurementId: "G-33Z2TWLRWV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

console.log(app);