import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useTheme } from "../../../contexts/ThemeContext";

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar
      expand="lg"
      className="border-bottom"
      fixed="top"
      bg="dark"
      data-bs-theme={theme}
      variant={theme === "dark" ? "dark" : "light"}
    >

      <Container fluid>
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
          <Button
            variant="outline-secondary"
            className="rounded-circle p-2"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="bi bi-sun-fill" />
            ) : (
              <i className="bi bi-moon-stars-fill" />
            )}
          </Button>
          <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: 36, height: 36 }}>
            FI
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
