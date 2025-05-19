import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useTheme } from "../../../contexts/ThemeContext";

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar
      expand="lg"
      className="border-bottom"
      bg="dark"
      data-bs-theme={theme}
      variant={theme === "dark" ? "dark" : "light"}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <i className="bi bi-toggle2-on fs-4 text-primary" /> ERP INNOV
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center gap-2">
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
