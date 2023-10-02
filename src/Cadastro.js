import { useState } from "react";
import NavbarCoord from "./navCoord";
import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";

export default function Cadastro() {
  return (
    <>
      <NavbarCoord />
      <Cadastrar />
      <Excluir />
      {/* <TestDB /> */}
    </>
  );
}

function Cadastrar() {
  const nomeInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const cursoInput = useRef();
  const atorInput = useRef();
  const handleSubmit = async () => {
    const nome = nomeInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const curso = cursoInput.current.value;
    const ator = atorInput.current.value;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  };

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, senha);
  // .then((userCredential) => {
  //   const user = userCredential.user
  // })
  // .catch((error) => {
  //   const errorCode = error.code
  //   const errorMessage = error.meessage
  // })

  return (
    <main className="container">
      <h1 style={{ color: "blue", marginTop: "7%" }}>CADASTRAR</h1>
      <form className="row g-3 needs-validation">
        <div className="col-md-4">
          <label className="form-label">Nome Completo</label>
          <input
            type="text"
            ref={nomeInput}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Senha</label>
          <input
            type="password"
            ref={passwordInput}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Email</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input
              type="email"
              ref={emailInput}
              className="form-control"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label">Curso</label>
          <select className="form-select" ref={cursoInput}>
            <option>Progamação</option>
            <option>Análise de Dados</option>
          </select>
          <div className="invalid-feedback">Selecione uma opção</div>
        </div>
        <div className="col-md-3">
          <label className="form-label">Ator</label>
          <select className="form-select" required ref={atorInput}>
            <option>Aluno</option>
            <option>Professor</option>
          </select>
          <div className="invalid-feedback">Selecione uma opção</div>
        </div>
        <div className="col-12">
          <button
            className="btn  btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
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
