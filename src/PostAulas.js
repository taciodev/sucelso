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
      <select class="form-select" aria-label="Default select example">
        <option selected>Selecionar Turma</option>
        <option value="1">Progamação</option>
        <option value="2">Análise de Dados</option>
      </select>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" />
        <label class="input-group-text" for="inputGroupFile02">
          Upload
        </label>
      </div>
    </main>
  );
}
