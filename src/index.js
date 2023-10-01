import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStatechanged,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

<link
  href="https://fonts.googleapis.com/css2?family=Foldit:wght@100&family=Noto+Sans+JP:wght@100&family=Roboto+Mono:ital,wght@1,200&family=Tilt+Prism&display=swap"
  rel="stylesheet"
></link>;
// Include the link to Bootstrap CSS here
const bootstrapCdn =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = bootstrapCdn;
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBzJ_-_LEEU_U99Zo3H8H7wGK00fv10VEI",
  authDomain: "sucelso-c9738.firebaseapp.com",
  projectId: "sucelso-c9738",
  storageBucket: "sucelso-c9738.appspot.com",
  messagingSenderId: "1021731137036",
  appId: "1:1021731137036:web:0ef9cfe382cf0e8b667029",
  measurementId: "G-GP615Q2FW3",
});
const auth = getAuth(firebaseApp);

onAuthStatechanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("none");
  }
});
