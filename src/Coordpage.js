import React from "react";
import NavbarCoord from "./navCoord";
import "./App.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh", // Adjust as needed
  },
  content: {
    flex: 1,
    padding: "20px",
  },
  imageContainer: {
    flex: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};

export default function CoordPage() {
  return (
    <>
      <NavbarCoord />
      <MainBody />
    </>
  );
}
function MainBody() {
  return (
    <div className="main">
      <div style={styles.imageContainer}>
        <p style={{ padding: "90px" }} className="text">
          Estude com até 100% de bolsa. No Sucelso, é Sucesso garantido
        </p>{" "}
        <br />
        <img
          src="/images/student.jpeg"
          className="img-thumbnail"
          alt="..."
          style={{
            maxWidth: "60%",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        ></img>
      </div>
    </div>
  );
}

// function Incoordpage() {
//   return (
//     <main
//       className="container "
//       style={{
//         marginLeft: "40%",
//         marginTop: "100px",
//       }}
//     >
//       <div>
//         <Link to="/Aulas">
//           <button type="button" className="btn btn-primary btn-lg">
//             Cadastrar/Excluir Aluno
//           </button>
//         </Link>
//       </div>
//       <div>
//         <Link to="/Notas">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             style={{ marginTop: "30px" }}
//           >
//             Cadastrar/Excluir Professor
//           </button>
//         </Link>
//       </div>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary btn-lg"
//           style={{ marginTop: "30px" }}
//         >
//           Cadastrar/Excluir Turma
//         </button>
//       </div>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary btn-lg"
//           style={{ marginTop: "30px" }}
//         >
//           Lançar/Editar Notas
//         </button>
//       </div>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary btn-lg"
//           style={{ marginTop: "30px" }}
//         >
//           Falar com Professor/Aluno
//         </button>
//       </div>
//     </main>
//   );
// }
