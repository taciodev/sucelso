import Navbar from "./navAluno";
import { useState } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

export default function NewLog() {
  return (
    <>
      <Navbar />
      <LoginNew />
      <getCurso />
    </>
  );
}

function LoginNew() {
  const [email, setEmail] = useState("");
  return (
    <form className="container" style={{ marginTop: "30px" }}>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <p style={{ color: "blue" }}>
        Confirma seu email de cadastro. Você receberá um email para mudar a sua
        senha
      </p>

      <button type="submit" class="btn btn-primary" style={{ margin: "50px" }}>
        Enviar
      </button>
    </form>
  );
}
const firebaseConfig = {
  apiKey: "AIzaSyBzJ_-_LEEU_U99Zo3H8H7wGK00fv10VEI",
  authDomain: "sucelso-c9738.firebaseapp.com",
  databaseURL: "https://sucelso-c9738-default-rtdb.firebaseio.com",
  projectId: "sucelso-c9738",
  storageBucket: "sucelso-c9738.appspot.com",
  messagingSenderId: "1021731137036",
  appId: "1:1021731137036:web:0ef9cfe382cf0e8b667029",
};

const Appname = "Sucelso";
const app = initializeApp(firebaseConfig, Appname);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getCurso(db) {
  const cursoCol = collection(db, "CursoSucelso");
  const cursoSnapshot = await getDocs(cursoCol);
  const cursoList = cursoSnapshot.docs.map((doc) => doc.data());
  console.log(cursoList);
}
