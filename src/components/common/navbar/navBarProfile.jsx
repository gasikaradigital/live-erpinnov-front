import { Navbar, Container, Nav } from "react-bootstrap";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import "./NavBarProfil.css";

export default function NavBarProfile({ user = { initials: "KA" } }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Navbar 
      fixed="top" 
      className={`custom-navbar ${darkMode ? 'dark-mode-active' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/dashboard" className="navbar-brand">
          <img
            src="/assets/img/front-pages/logo/logo.png"
            alt="ERP INNOV"
            className="brand-logo"
          />
          <span className="brand-text">ERP INNOV</span>
        </Navbar.Brand>

        <Nav className="navbar-actions">
          <div
            onClick={toggleDarkMode}
            className="theme-toggle"
            title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </div>

          <div
            className="user-avatar bg-primary text-white"
          >
            {user?.initials || "??"}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
