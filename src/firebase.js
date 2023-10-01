// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJ_-_LEEU_U99Zo3H8H7wGK00fv10VEI",
  authDomain: "sucelso-c9738.firebaseapp.com",
  projectId: "sucelso-c9738",
  storageBucket: "sucelso-c9738.appspot.com",
  messagingSenderId: "1021731137036",
  appId: "1:1021731137036:web:0ef9cfe382cf0e8b667029",
  measurementId: "G-GP615Q2FW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
