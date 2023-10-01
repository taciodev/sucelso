import { useState } from "react";
import Navbar from "./navAluno";
import StudentPage from "./Studentpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
  const [password, setPassword] = useState("");

  function handleLogin() {
    const LoginItens = { email, password };
    console.log(LoginItens);
    return (
      <Router>
        <Routes>
          <Route path="StudentPage" element={<StudentPage />} />
        </Routes>
      </Router>
    );
  }

  return (
    <form
      className="container"
      style={{ marginTop: "30px" }}
      onSubmit={handleLogin}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/emailRecup">Esqueceu seu email</a>
      </div>

      <button class="btn btn-primary" style={{ margin: "50px" }}>
        Entrar
      </button>
    </form>
  );
}
