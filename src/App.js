import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Pages
import Login from "./pages/Login/Login";
import AreaMedico from "./pages/AreaMedico/AreaMedico";
import Historico from "./pages/Historico/Historico";
import NovaConsulta from "./pages/NovaConsulta/NovaConsulta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/areaMedico" element={<AreaMedico />} />
        <Route path="/Historico" element={<Historico />} />
        <Route path="/NovaConsulta" element={<NovaConsulta />} />
      </Routes>
    </Router>
  );
}

export default App;