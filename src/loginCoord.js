import { useState } from "react";
import {Link } from "react-router-dom"

import Navbar from "./navAluno";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./services/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function LoginCoord() {
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
  const navigate = useNavigate();


  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, senha).then(() => {
      // Redirecionar para a página de Dashboard após o login bem-sucedido
      navigate("/Studentpage");
    })
    .catch((error) => {
      // Trate os erros aqui, se necessário
    });
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

      <Link to="/Coordpage">
      <button class="btn btn-primary" style={{ margin: "50px" }} onSubmit={handleSignOut}>
        Entrar
      </button>
      </Link>
    </form>
  );
}