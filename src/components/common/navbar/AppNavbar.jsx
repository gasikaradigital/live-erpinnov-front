import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { useTheme } from "../../../contexts/ThemeContext";
import './AppNavbar.css';
import { logout } from "../../../api/logoutApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProfile } from "../../../api/profileApi";

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    const response = await logout();

    if (response.status === 200) {
      toast.success("Déconnexion réussie");
    }
    navigate("/");
  } catch (error) {
    toast.error("Erreur lors de la déconnexion"+ error);
    navigate("/");
  }
};

const {profileData, setProfileData} = useState();
useEffect(() => {
    const fetchUser = async () => {
      try {
        const profile = await fetchProfile();
        if (profile) {
          console.log(profile.fname);
          setProfileData(profile);
        } else {
          console.log(profile);
          console.warn(
            "Profil introuvable, redirection vers la page de connexion."
          );
        }
      } catch (err) {
        console.error(
          "Erreur inattendue lors de la récupération du profil :",
          err
        );
      }
    };

    fetchUser();
  }, [navigate]);

return (
    <Navbar
      fixed="top"
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
      expand="lg"
      className="border-bottom shadow-sm"
      data-bs-theme={theme}
    >
      <Container>
        <Navbar.Brand href="/dashboard" className="d-flex align-items-center gap-2">
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
            <Button
              variant={theme === "dark" ? "light" : "outline-secondary"}
              onClick={toggleTheme}
              className="rounded-circle p-2"
              title="Basculer en mode sombre"
            >
              {theme === "dark" ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </Button>
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                className="d-flex align-items-center gap-2 px-2"
              >
                <div className="profile-circle bg-primary text-white">
                  FI
                </div>
                <span className="d-none d-md-inline">User</span>
              </Dropdown.Toggle>
              
              <Dropdown.Menu className="mt-2 shadow">
                <Dropdown.Item href="/profile">
                  <i className="bi bi-person-circle me-2"></i>
                  Mon Profil
                </Dropdown.Item>
                <Dropdown.Item href="/ticket">
                  <i className="bi bi-ticket-detailed me-2"></i>
                  Mon Ticket
                </Dropdown.Item>
                <Dropdown.Item href="/entreprise/create">
                  <i className="bi bi-building-add me-2"></i>
                  Créer une entreprise
                </Dropdown.Item>
                <Dropdown.Item href="/search-instance">
                  <i className="bi bi-search me-2"></i>
                  Rechercher une instance
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout} className="text-danger">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Déconnexion
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
