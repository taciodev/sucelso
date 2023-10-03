import { useState } from "react";
import NavbarCoord from "./navCoord";
import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./services/firebaseConfig";

function Cadastrar() {
  const nomeInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const cursoInput = useRef();
  const atorInput = useRef();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(emailInput.current.value, passwordInput.current.value);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
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
            onClick={handleSignOut}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </main>
  );
}

export default function Cadastro() {
  return (
    <>
      <NavbarCoord />
      <Cadastrar />
    </>
  );
}