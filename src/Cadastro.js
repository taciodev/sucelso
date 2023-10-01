import { useState } from "react";
import NavbarCoord from "./navCoord";

export default function Cadastro() {
  return (
    <>
      <NavbarCoord />
      <Cadastrar />
      <Excluir />
    </>
  );
}

function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [curso, setCurso] = useState("");
  const [ator, setAtor] = useState("");

  function handleSubmit() {
    const dados = { nome, email, senha, curso, ator };
    console.log(dados);
    // await firestore.collection("users").add(dados)
    // setNome("")
    // setEmail("")
  }
  return (
    <main className="container">
      <h1 style={{ color: "blue", marginTop: "7%" }}>CADASTRAR</h1>
      <form
        className="row g-3 needs-validation"
        novalidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            Nome Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            Senha
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="email"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">
            Curso
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            required
          >
            <option>Progamação</option>
            <option>Análise de Dados</option>
          </select>
          <div className="invalid-feedback">Selecione uma opção</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">
            Ator
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            value={ator}
            onChange={(e) => setAtor(e.target.value)}
            required
          >
            <option>Aluno</option>
            <option>Professor</option>
          </select>
          <div className="invalid-feedback">Selecione uma opção</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Cadastrar</button>
        </div>
      </form>
    </main>
  );
}

function Excluir() {
  const [aluno, setAluno] = useState("Selecionar");
  const [prof, setProf] = useState("Selecionar");
  function handleSubmit() {
    const newItem = { aluno, prof };
    console.log(newItem);
  }
  return (
    <main className="container">
      <h1 style={{ color: "red", marginTop: "7%" }}> EXCLUIR</h1>
      <form
        className="row g-3 needs-validation"
        novalidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">
            Alunos
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            value={aluno}
            onChange={(e) => setAluno(e.target.value)}
            required
          >
            <option selected disabled value="">
              Selecionar
            </option>
            <option>Caio César</option>
            <option>Gabriel Pamponet</option>
            <option>Renata Santos</option>
            <option>Claúdia Leite</option>
            <option>Nenhum</option>
          </select>
          <div className="invalid-feedback">Selecione uma opção</div>
        </div>

        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">
            Professor
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            required
            value={prof}
            onChange={(e) => setProf(e.target.value)}
          >
            <option selected disabled value="">
              Selecionar
            </option>
            <option>Celso Barreto</option>
            <option>Fabio Gonzaga</option>
            <option>Sheila Maquezin</option>
            <option>Nenhum</option>
          </select>
          <div className="invalid-feedback">Selecione uma opção</div>
        </div>

        <button className="btn btn-danger" type="submit">
          Excluir
        </button>
      </form>
    </main>
  );
}
