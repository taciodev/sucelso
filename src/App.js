// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPageF from "./loginF";
import NewLog from "./emailRecup";
import StudentPage from "./Studentpage";
import Notas from "./Notas";
import CoordPage from "./Coordpage";
import ProfPage from "./ProfPage";
import MessageBox from "./MessageBox";
import PostAulas from "./PostAulas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginF" element={<LoginPageF />} />
        <Route path="/emailRecup" element={<NewLog />} />
        <Route path="/Studentpage" element={<StudentPage />} />

        <Route path="/Notas" element={<Notas />} />
        <Route path="CoordPage" element={<CoordPage />} />
        <Route path="ProfPage" element={<ProfPage />} />
        <Route path="MessageBox" element={<MessageBox />} />
        <Route path="PostAulas" element={<PostAulas />} />
      </Routes>
    </Router>
  );
}

export default App;
