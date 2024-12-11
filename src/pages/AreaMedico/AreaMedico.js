import "./AreaMedico.css";
import React, { useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const AreaMedico = () => {
  const navigate = useNavigate();

  const handleHistorico = () => {
    navigate("/Historico"); 
  };

  const handleNovaConsulta = () => {
    navigate("/NovaConsulta"); 
  };

  const handleBack = () => {
    navigate(-1);
  };

  const [view, setView] = useState("informacoes");
  const [CPF, setCPF] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [showResults, setShowResults] = useState(false);

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2") 
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2");
  };

  const formatBirthdate = (value) => {
    return value
      .replace(/\D/g, "") 
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2") 
      .slice(0, 10);
  };

  const handleCPFChange = (e) => {
    setCPF(formatCPF(e.target.value));
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(formatBirthdate(e.target.value));
  };

  const handleSearch = () => {
    setShowResults(true);
  };

  const patients = [
    {
      name: "SICRANO OLIVEIRA DA SILVA MENDES",
      cpf: "123.345.567-90",
      birthdate: "03/04/1980",
      motherName: "MARCELA OLIVEIRA DA SILVA MENDES",
    },
    {
      name: "SICRANO FILLIPELI SANTOS",
      cpf: "567.987.098-88",
      birthdate: "14/10/2000",
      motherName: "MARTA FILLIPELI SANTOS",
    },
    {
      name: "SICRANO SILVA",
      cpf: "890.345.787-22",
      birthdate: "31/01/1996",
      motherName: "CECILIA SILVA",
    },
  ];

  return (
    <div className="area-medico">
      <Header title="ÁREA DO MÉDICO" profileName="DR. FULANO" onBack={handleBack} />

      <div className="search-section">
        <div className="register-container">
            <div className="field-group">
              <label htmlFor="register-name">NOME COMPLETO:</label>
              <input type="text" id="register-name"/>
            </div>

            <div className="field-group-row">
              <div className="field-group">
                <label htmlFor="register-cpf">CPF:</label>
                <input type="text" id="register-cpf" className="center-placeholder" value={CPF} onChange={handleCPFChange} placeholder="___.___.___-__"/>
              </div>

              <div className="field-group">
                <label htmlFor="register-birthdate">DATA DE NASCIMENTO:</label>
                <input type="text" id="register-birthdate" className="center-placeholder" value={birthdate} onChange={handleBirthdateChange} placeholder="__/__/____"/>
              </div>
            </div>

            <div className="field-group-row">
              <button id="button-search" className="button" onClick={() => setView("buscar")}>BUSCAR</button>
              <button id="button-search" className="button" onClick={() => setView("cadastrar")}>CADASTRAR</button>
            </div>
          </div>
      </div>

      {view === "informacoes" && (
        <section className="info-section">
          <h2>INFORMAÇÕES</h2>
          <div className="info-box"></div>
        </section>
      )}

      {view === "buscar" && (
        <div className="patient-list">
          {patients.map((patient, index) => (
            <div className="patient-card" key={index}>
              <div className="patient-info">
                <h3>{patient.name}</h3>
                <p><strong>CPF:</strong> {patient.cpf}</p>
                <p><strong>DATA DE NASCIMENTO:</strong> {patient.birthdate}</p>
                <p><strong>NOME DA MÃE:</strong> {patient.motherName}</p>
              </div>
              
              <div className="patient-actions">
                <button className="button" onClick={handleNovaConsulta}>NOVA CONSULTA</button>
                <button className="button" onClick={handleHistorico}>HISTÓRICO</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "cadastrar" && (
        <div className="register-section">
          <h2>CADASTRAR NOVO PACIENTE</h2>
          <div className="register-container">
            <div className="field-group">
              <label htmlFor="register-name">NOME COMPLETO:</label>
              <input type="text" id="register-name"/>
            </div>

            <div className="field-group-row">
              <div className="field-group">
                <label htmlFor="register-cpf">CPF:</label>
                <input type="text" id="register-cpf" className="center-placeholder" value={CPF} onChange={handleCPFChange} placeholder="___.___.___-__"/>
              </div>

              <div className="field-group">
                <label htmlFor="register-birthdate">DATA DE NASCIMENTO:</label>
                <input type="text" id="register-birthdate" className="center-placeholder" value={birthdate} onChange={handleBirthdateChange} placeholder="__/__/____"/>
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="register-mother-name">NOME DA MÃE</label>
              <input type="text" id="register-mother-name"/>
            </div>

            <button className="register-button">CADASTRAR</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default AreaMedico;