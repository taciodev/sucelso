// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import LoginAluno from "./loginAluno";
import LoginProf from "./loginProf";
import LoginCoord from "./loginCoord";
import NewLog from "./emailRecup";
import StudentPage from "./Studentpage";
import CoordPage from "./Coordpage";
import ProfPage from "./ProfPage";
import Cadastro from "./Cadastro";

<link
  href="https://fonts.googleapis.com/css2?family=Foldit:wght@100&family=Noto+Sans+JP:wght@100&family=Roboto+Mono:ital,wght@1,200&family=Tilt+Prism&display=swap"
  rel="stylesheet"
></link>;
// Include the link to Bootstrap CSS here
const bootstrapCdn =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = bootstrapCdn;
document.head.appendChild(link);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginAluno" element={<LoginAluno />} />
        <Route path="/loginProf" element={<LoginProf />} />
        <Route path="/loginCoord" element={<LoginCoord />} />
        <Route path="/emailRecup" element={<NewLog />} />
        <Route path="/Studentpage" element={<StudentPage />} />
        <Route path="CoordPage" element={<CoordPage />} />
        <Route path="ProfPage" element={<ProfPage />} />
        <Route path="Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
