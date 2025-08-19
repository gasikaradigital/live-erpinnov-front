import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Image,
  Button,
} from "react-bootstrap";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function NavigationBar({ isAuthenticated, user }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Navbar
      fixed="top"
      bg={darkMode ? "dark" : "white"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      className={`border-bottom shadow-sm ${darkMode ? "" : "bg-white"}`}
      collapseOnSelect
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

        {/* Bouton dark mode mobile seulement */}
        <Button
          variant={darkMode ? "light" : "outline-secondary"}
          onClick={toggleDarkMode}
          className="rounded-circle p-2 d-lg-none me-2"
          title="Basculer en mode sombre"
        >
          {darkMode ? (
            <i className="bi bi-sun-fill"></i>
          ) : (
            <i className="bi bi-moon-fill"></i>
          )}
        </Button>

        <Navbar.Toggle aria-controls="main-navbar-nav">
          {darkMode ? (
            <i className="bi bi-list text-white"></i> // icône blanc
          ) : (
            <i className="bi bi-list text-dark"></i> // icône noir
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            {/* Bouton dark mode desktop seulement */}
            <Button
              variant={darkMode ? "light" : "outline-secondary"}
              onClick={toggleDarkMode}
              className="rounded-circle p-2 d-none d-lg-block"
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
                  variant={darkMode ? "dark" : "light"}
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
                <Button
                  variant="outline-primary"
                  href="/"
                  className="d-none d-lg-block"
                >
                  Se connecter
                </Button>
                <Button
                  variant="primary"
                  href="/inscription"
                  className="d-none d-lg-block"
                >
                  S'inscrire
                </Button>

                {/* Version mobile seulement */}
                <div className="d-flex flex-column gap-2 d-lg-none w-100 px-3">
                  <Button variant="outline-primary" href="/" className="w-100">
                    Se connecter
                  </Button>
                  <Button
                    variant="primary"
                    href="/inscription"
                    className="w-100"
                  >
                    S'inscrire
                  </Button>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
