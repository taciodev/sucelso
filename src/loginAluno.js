import { useState } from "react";

import Navbar from "./navAluno";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./services/firebaseConfig";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  console.log("Linha 23")
  
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    console.log("Botão Entrar clicado");
    
    signInWithEmailAndPassword(email, senha)
      .then(() => {
        console.log("Login bem-sucedido");
        navigate("/Studentpage");
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        // Trate os erros aqui, se necessário
      });
  }
  //Certifique-se também de que os estados email e senha estão sendo preenchidos corretamente nos campos de entrada.
  
  //Se após essas verificações você ainda enfrentar problemas, seria útil verificar o console do navegador para ver se há mensagens de erro específicas que podem indicar qual é o problema. Isso pode ajudá-lo a depurar o código com mais precisão.
  
  
  
  
  
  

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

      <button class="btn btn-primary" style={{ margin: "50px" }} onClick={handleSignOut}>
  Entrar
</button>

    </form>
  );
}