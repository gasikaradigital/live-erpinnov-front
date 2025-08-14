import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { useTheme } from "../../../contexts/ThemeContext";
import "./AppNavbar.css";
import { logout } from "../../../api/logoutApi";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProfile } from "../../../api/profileApi";
import { useAuth } from "../../../contexts/AuthContext";

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleGoBack = () => {
    navigate(-1); // Retour à la page précédente
  };

  const handleLogout = async () => {
    try {
      const response = await logout();

      if (response.status === 200) {
        toast.success("Déconnexion réussie");
      }
    } catch (error) {
      toast.error("Erreur lors de la déconnexion" + error);
      navigate("/");
    } finally {
      sessionStorage.clear();
      navigate("/");
      window.location.reload();
    }
  };

  const [initiales, setInitiales] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const profile = await fetchProfile();
        if (profile) {
          //Extraction des initiales
          const prenom = profile.fname || "";
          const nom = profile.lname || "";
          const initiales =
            (prenom.charAt(0) || "").toUpperCase() +
            (nom.charAt(0) || "").toUpperCase();

          setInitiales(initiales);
        } else {
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

  // Ne pas afficher le bouton retour sur la page dashboard
  const showBackButton = location.pathname !== "/dashboard";

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
        {/* Version mobile - éléments alignés horizontalement */}
        <div className="d-flex d-lg-none w-100 align-items-center justify-content-between">
          <Navbar.Brand
            href="/tableau-de-bord"
            className="d-flex align-items-center gap-2 m-0"
          >
            <img
              src="/assets/img/front-pages/logo/logo.png"
              alt="ERP INNOV"
              style={{ height: "40px" }}
            />
            <span className="fw-semibold text-primary d-none d-sm-inline">
              ERP INNOV
            </span>
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-2">
            <Button
              variant="transparent"
              onClick={toggleTheme}
              className="rounded-circle p-1 border-0"
              title="Basculer en mode sombre"
            >
              {theme === "dark" ? (
                <i className="bi bi-sun-fill fs-5"></i>
              ) : (
                <i className="bi bi-moon-fill fs-5"></i>
              )}
            </Button>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="transparent"
                className="d-flex align-items-center px-1 border-0 shadow-none bg-transparent"
              >
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {initiales || "??"}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="mt-2 shadow">
                <Dropdown.Item href="/dashboard">
                  <i className="bi bi-bar-chart me-2"></i>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item href="/ticket">
                  <i className="bi bi-ticket-detailed me-2"></i>
                  Tickets
                </Dropdown.Item>
                {user?.subscriptions?.length > 0 &&
                  user?.subscriptions?.[0]?.status !== "trial" && (
                    <Dropdown.Item href="/document">
                      <i className="bi bi-files me-2"></i>
                      Documents
                    </Dropdown.Item>
                  )}
                <Dropdown.Item href="/profile">
                  <i className="bi bi-person-circle me-2"></i>
                  Profil
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout} className="text-danger">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Déconnexion
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Version desktop - inchangée */}
        <div className="d-none d-lg-flex w-100">
          {showBackButton && (
            <Button
              variant="transparent"
              onClick={handleGoBack}
              className="me-2 border-0"
              title="Retour"
            >
              <i className="bi bi-arrow-left fs-4"></i>
            </Button>
          )}
          <Navbar.Brand
            href="/dashboard"
            className="d-flex align-items-center gap-2"
          >
            <img
              src="/assets/img/front-pages/logo/logo.png"
              alt="ERP INNOV"
              style={{ height: "50px" }}
              className="mb-2"
            />
            <span className="fw-semibold text-primary">ERP INNOV</span>
          </Navbar.Brand>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <Button
                variant={theme === "dark" ? "light" : "outline-secondary"}
                onClick={toggleTheme}
                className="rounded-circle p-2 theme-toggle-btn"
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
                  variant="transparent"
                  className="d-flex align-items-center gap-2 px-2 border-0 shadow-none bg-transparent"
                >
                  <div className="profile-circle bg-primary text-white">
                    {initiales || "??"}
                  </div>
                  <span className="d-none d-md-inline">
                    {user?.profile.fname}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-2 dropdown-menu-custom">
                  <Dropdown.Item href="/tableau-de-bord">
                    <i className="bi bi-bar-chart me-2"></i>
                    Tableau de bord
                  </Dropdown.Item>
                  <Dropdown.Item href="/ticket">
                    <i className="bi bi-ticket-detailed me-2"></i>
                    Tickets
                  </Dropdown.Item>
                  {user?.subscriptions?.length > 0 &&
                    user?.subscriptions?.[0]?.status !== "trial" && (
                      <Dropdown.Item href="/document">
                        <i className="bi bi-files me-2"></i>
                        Documents
                      </Dropdown.Item>
                    )}
                  <Dropdown.Item href="/profil">
                    <i className="bi bi-person-circle me-2"></i>
                    Profil
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
        </div>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
