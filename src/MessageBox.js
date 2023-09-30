import Navbar from "./Navbar";

export default function MessageBox() {
  return (
    <>
      <Navbar />
      <Message />
    </>
  );
}

function Message() {
  return (
    <main className="container" style={{ marginTop: "5%" }}>
      <select
        class="form-select"
        aria-label="Default select example"
        style={{ color: "blue" }}
      >
        <option selected>Selecionar Professor</option>
        <option value="1">Celso Barreto</option>
        <option value="2">Fabio Gonzaga</option>
        <option value="3">Sheila Maquezin</option>
      </select>
      <select
        class="form-select"
        aria-label="Default select example"
        style={{ marginTop: "5%", color: "blue" }}
      >
        <option selected>Selecionar Aluno</option>
        <option value="1">Caio César</option>
        <option value="2">Renata Campos</option>
        <option value="3">Gabriel Pamponet</option>
        <option value="3">Claudia Silva</option>
      </select>
      <div className="mb-3" style={{ marginTop: "7%" }}>
        <label for="exampleFormControlTextarea1" class="form-label">
          Escrever sua Mensagem
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        Enviar
      </button>
    </main>
  );
}
