import Navbar from "./navAluno";

export default function Notas() {
  return (
    <>
      <Navbar />
      <Nota />
    </>
  );
}

function Nota() {
  return (
    <>
      <table
        className="table table-primary container"
        style={{ marginTop: "10%" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Disciplina</th>
            <th scope="col">AV1</th>
            <th scope="col">AV2</th>
            <th scope="col">AV3</th>
            <th scope="col">Média</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Criação de Classes</td>
            <td>7</td>
            <td>5</td>
            <td>-</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Orientado a Objetos</td>
            <td>9</td>
            <td>9</td>
            <td>-</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Análise de Dados</td>
            <td>5</td>
            <td>6</td>
            <td>8</td>
            <td>6,5</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Projetos</td>
            <td>7</td>
            <td>8</td>
            <td>-</td>
            <td>7,5</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Gestão de Negócios</td>
            <td>9</td>
            <td>10</td>
            <td>-</td>
            <td>9,5</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
