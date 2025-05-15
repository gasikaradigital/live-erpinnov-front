import { Navbar, Container, Nav } from "react-bootstrap";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function NavBarProfile({ user = { initials: "KA" } }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Navbar fixed="top" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img
            src="/assets/img/front-pages/logo/logo.png"
            alt="ERP INNOV"
            style={{ height: "50px" }}
            className="mb-2"
          />
          <span className="fw-semibold text-primary">ERP INNOV</span>
        </Navbar.Brand>

        <Nav className="d-flex align-items-center gap-3">
          <div
            onClick={toggleDarkMode}
            style={{
              cursor: "pointer",
              fontSize: 20,
              color: darkMode ? "#ffffff" : "#000000",
            }}
            title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </div>

          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: 32, height: 32 }}
          >
            {user?.initials || "??"}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
