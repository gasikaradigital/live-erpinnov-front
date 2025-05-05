import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Image,
  Button,
} from "react-bootstrap";

export default function NavigationBar({ isAuthenticated, user }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialisation depuis localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  // Appliquer la classe au body lors du premier rendu ou changement
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode); // Sauvegarde
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      fixed="top"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      className="border-bottom shadow-sm"
    >
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

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            {/* Bouton mode sombre */}
            <Button
              variant={darkMode ? "light" : "outline-secondary"}
              onClick={toggleDarkMode}
              className="rounded-circle p-2"
              title="Basculer en mode sombre"
            >
              {darkMode ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </Button>

            {isAuthenticated ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  className="d-flex align-items-center gap-2 px-2"
                >
                  <Image
                    src={user.profile_photo_url}
                    roundedCircle
                    height="40"
                    width="40"
                    alt="Photo de profil"
                    className="border border-primary"
                  />
                  <span className="d-none d-md-inline">{user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-2 shadow">
                  <Dropdown.Item href="/profile">Mon Profil</Dropdown.Item>
                  {user.hasCompanies ? (
                    <Dropdown.Item href="/entreprises">
                      Mes Entreprises
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item href="/entreprise/create">
                      Créer une entreprise
                    </Dropdown.Item>
                  )}
                  <Dropdown.Divider />
                  <form method="POST" action="/logout">
                    <Button
                      type="submit"
                      variant="danger"
                      className="w-100 text-start"
                    >
                      Déconnexion
                    </Button>
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button variant="outline-primary" href="/login">
                  Se connecter
                </Button>
                <Button variant="primary" href="/inscription">
                  S'inscrire
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
