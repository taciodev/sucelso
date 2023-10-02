import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyBzJ_-_LEEU_U99Zo3H8H7wGK00fv10VEI",
    authDomain: "sucelso-c9738.firebaseapp.com",
    databaseURL: "https://sucelso-c9738-default-rtdb.firebaseio.com",
    projectId: "sucelso-c9738",
    storageBucket: "sucelso-c9738.appspot.com",
    messagingSenderId: "1021731137036",
    appId: "1:1021731137036:web:0ef9cfe382cf0e8b667029",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);