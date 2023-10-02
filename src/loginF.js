import { useState } from "react";
import Navbar from "./navAluno";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

export default function LoginPageF() {
  return (
    <>
      <Navbar />
      <LoginF />
    </>
  );
}

function LoginF() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // function handleLogin() {
  //   const auth = getAuth()
  //   signInWithEmailAndPassword(auth, email, senha);
  //   .then((userCredential) =>{
  //     const user = userCredential.user
  //     console.log("Logged in as: ", user.email)
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code
  //     const errorMessage = error.message
  //     console.error(`Error (${errorCode}): ${errorMessage}`)
  //   })
  //   const LoginItens = { email, senha };
  //   console.log(LoginItens);
  // }

  return (
    <form
      className="container"
      style={{ marginTop: "30px" }}
      // onSubmit={handleLogin}
    >
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
      <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Senha
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <a href="/emailRecup">Esqueceu sua senha</a>
      </div>

      <button class="btn btn-primary" style={{ margin: "50px" }}>
        Entrar
      </button>
    </form>
  );
}
