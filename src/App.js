// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPageF from "./loginF";
import NewLog from "./emailRecup";
import StudentPage from "./Studentpage";
import Aulinhas from "./Aulas";
import Notas from "./Notas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginF" element={<LoginPageF />} />
        <Route path="/emailRecup" element={<NewLog />} />
        <Route path="/Studentpage" element={<StudentPage />} />
        <Route path="/Aulas" element={<Aulinhas />} />
        <Route path="/Notas" element={<Notas />} />
      </Routes>
    </Router>
  );
}

export default App;
