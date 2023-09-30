import NavProf from "./NavProf";

export default function PostAulas() {
  return (
    <>
      <NavProf />
      <Aulas />
    </>
  );
}

function Aulas() {
  return (
    <main className="container" style={{ marginTop: "5%" }}>
      <select
        class="form-select"
        aria-label="Default select example"
        style={{ color: "blue" }}
      >
        <option selected>Selecionar Turma</option>
        <option value="1">Progamação</option>
        <option value="2">Análise de Dados</option>
      </select>
      <div class="input-group mb-3" style={{ marginTop: "7%", color: "blue" }}>
        <input type="file" class="form-control" id="inputGroupFile02" />
        <label class="input-group-text" for="inputGroupFile02">
          Upload
        </label>
      </div>
      <button type="button" class="btn btn-primary" style={{ marginTop: "5%" }}>
        Enviar
      </button>
    </main>
  );
}
