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
        <a
          className="navbar-brand"
          href="https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/37350614#overview"
        >
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
            <li className="nav-item">
              <a className="nav-link" href="/Studentpage">
                StudentPage
              </a>
            </li>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Login
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/loginF">
                  Aluno
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/loginF">
                  Professor
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/loginF">
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
