import { useState } from "react";
import Navbar from "./navAluno";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./services/firebaseConfig";

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

  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, senha);
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <form
      className="container"
      style={{ marginTop: "30px" }}
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

      <button class="btn btn-primary" style={{ margin: "50px" }} onSubmit={handleSignOut}>
        Entrar
      </button>
    </form>
  );
}
