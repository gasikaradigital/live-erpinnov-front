import React, { useEffect, useRef } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import AppNavbar from "./navbar/AppNavbar";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import dashboardImage from "../../assets/hero-dashboard-light.png";
import "./PayementProcess.css";

const PaymentModule = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { user } = useAuth();

  const dashboardRef = useRef(null);

  const handleFreeTrialClick = () => {
    const storedPlan = localStorage.getItem("planChoose");
    if (!storedPlan) {
      console.error("No plan found in local storage");
      return;
    }
    const plan = JSON.parse(storedPlan);
    plan.subscription = "trial";
    localStorage.setItem("planChoose", JSON.stringify(plan));
    navigate("/organisation/nouvelle");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const wrapper = dashboardRef.current;
      if (!wrapper) return;

      const { innerWidth, innerHeight } = window;
      const moveX = ((e.clientX - innerWidth / 2) / innerWidth) * 20;
      const moveY = ((e.clientY - innerHeight / 2) / innerHeight) * 20;

      wrapper.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`text-dark min-vh-100 w-100 mw-100 mx-0 px-0 ${
        theme === "dark" ? "bg-dark" : "bg-light"
      }`}
    >
      <AppNavbar />
      <Navbar
        expand="lg"
        className={theme === "dark" ? "bg-dark" : "bg-light"}
        variant={theme === "dark" ? "dark" : "light"}
      />

      <Container
        className="px-3 px-md-5"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          paddingTop: "6rem",
        }}
      >
        <div className="row g-4 justify-content-center align-items-center">
          {/* Bloc gauche */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="p-4 text-white rounded-4 shadow-sm w-100"
              style={{
                background: "linear-gradient(135deg, #0066FF, #3C2BD1)",
                maxWidth: "700px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge rounded-pill bg-light text-primary fw-semibold px-3 py-2">
                  🧩 Choisissez votre option
                </span>
              </div>

              <h3 className="fw-bold mb-2 fs-4">
                Comment souhaitez-vous commencer ?
              </h3>
              <p className="mb-4 text-white-50 small">
                Démarrez avec un essai gratuit ou créez directement votre
                instance.
              </p>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 rounded-3 border border-white border-opacity-25 bg-white bg-opacity-10 mb-3 h-100 d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="fw-semibold text-white mb-1 fs-6">
                        Créer une nouvelle instance
                      </h6>
                      <p className="text-white-50 small mb-3">
                        Commencez immédiatement avec toutes les fonctionnalités.
                      </p>
                    </div>
                    <Button
                      variant="light"
                      className="w-100 fw-bold rounded-3"
                      href="/paiement-carte"
                    >
                      S'abonner
                    </Button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 rounded-3 border border-white border-opacity-25 bg-white bg-opacity-10 mb-3 h-100 d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="fw-semibold text-white mb-1 fs-6">
                        Essayer gratuitement
                      </h6>
                      <p className="text-white small mb-3">
                        Testez pendant 14 jours sans engagement.
                      </p>
                    </div>
                    <Button
                      variant="light"
                      className="w-100 fw-bold bg-light rounded-3"
                      onClick={handleFreeTrialClick}
                    >
                      Démarrer l'essai
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc droit */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="dashboard-wrapper" ref={dashboardRef}>
              <img
                src={dashboardImage}
                alt="Dashboard Preview"
                className="dashboard-image"
              />

              <div className="stats-card stats-card-1">
                <span className="stats-indicator success"></span>
                <span className="small">+24% Croissance</span>
              </div>

              <div className="stats-card stats-card-2">
                <span className="stats-indicator primary"></span>
                <span className="small">35% d'économies sur vos coûts</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentModule;
