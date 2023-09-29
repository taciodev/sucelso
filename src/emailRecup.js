import Navbar from "./navAluno";
import { useState } from "react";

export default function NewLog() {
  return (
    <>
      <Navbar />
      <LoginNew />
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
