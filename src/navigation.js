import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [collapsed, setCollapsed] = React.useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="..." className="logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://web.whatsapp.com/">
                Contato
              </a>
            </li>
            
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Login
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/loginAluno">
                  Aluno
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/loginProf">
                  Professor
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/loginCoord">
                  Coordenador
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
}
