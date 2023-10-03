import React from "react";

export default function NavProf() {
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
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
