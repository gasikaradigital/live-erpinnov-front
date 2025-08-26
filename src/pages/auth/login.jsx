import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { darkMode } = useDarkMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { setAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError("");
    setStatus("Connexion en cours...");

    try {
      await axios.get(`${baseUrl}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });

      const response = await axios.post(
        `${baseUrl}/api/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setStatus("Connexion réussie");
        setAuthenticated(true);
        navigate("/tableau-de-bord");
      } else {
        setError("Connexion échouée");
      }
    } catch (err) {
      toast.error("Veuillez vérifier votre email et mot de passe.");
      console.error("Erreur API: ", err);
    }
  };

  return (
    <div
      className={`min-vh-100 vw-100 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <NavigationBar isAuthenticated={false} user={null} />

      <div className="container d-flex justify-content-center align-items-center min-vh-100 px-3 py-4">
        <div
          className={`card shadow p-4 w-100 ${darkMode ? "dark-card" : ""}`}
          style={{
            maxWidth: "500px",
            backgroundColor: darkMode ? "#2c3034" : "#ffffff",
            border: darkMode ? "1px solid #495057" : "none",
            borderRadius: "12px",
          }}
        >
          {/* En-tête */}
             {/* En-tête avec logo et titre */}
                  <div className="text-center mb-3">
                    <div className="flex items-center justify-center mb-4 gap-2">
                      <img
                        src="/assets/img/front-pages/logo/logo.png"
                        alt="ERP INNOV"
                        className="h-12"
                      />
                      <h3
                        className="fw-bold mb-0"
                        style={{
                          color: darkMode ? "#ffffffff" : "#000000ff",
                          fontSize: "28px",
                          letterSpacing: "1px",
                        }}
                      >
                        <span
                          style={{ color: "#007bff", fontWeight: "bold" }}
                          className="innov-text"
                        >
                          <span className="erp-text desktop ms-2">
                            <span
                              style={{
                                color: darkMode ? "#ffffff" : "black",
                                opacity: darkMode ? 1 : 0.7,
                              }}
                            >
                              Erp
                            </span>
                            innov
                            <span
                              style={{
                                color: darkMode ? "#ffffff" : "black",
                                fontSize: "18px",
                              }}
                            >
                              .com
                            </span>
                          </span>
                        </span>
                      </h3>
                    </div>
                  </div>
          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className={`form-label text-start w-100 ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Adresse email
              </label>
              <input
                type="email"
                className={`form-control text-start ${
                  darkMode
                    ? "bg-dark text-white border-secondary placeholder-white"
                    : "bg-white text-dark placeholder-secondary"
                }`}
                id="email"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mot de passe */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className={`form-label text-start w-100 ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Mot de passe
              </label>
              <div className="input-group">
                <input
                  type={showPwd ? "text" : "password"}
                  className={`form-control text-start ${
                    darkMode
                      ? "bg-dark text-white border-secondary placeholder-white"
                      : "bg-white text-dark placeholder-secondary"
                  }`}
                  id="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className={`btn ${
                    darkMode
                      ? "btn-outline-light border-secondary"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setShowPwd(!showPwd)}
                >
                  <i className={`bi ${showPwd ? "bi-eye-slash" : "bi-eye"}`} />
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="mb-3">
              {/* Checkbox alignée à gauche */}
              <div className="form-check d-flex align-items-center mb-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="form-check-input"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{
                    backgroundColor: darkMode ? "#495057" : "white",
                    transform: "scale(0.6)",
                    borderColor: darkMode ? "#6c757d" : "#adb5bd",
                  }}
                />
                <label
                  className={`form-check-label ms-2 mb-0 ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                  htmlFor="remember"
                >
                  Se souvenir de moi
                </label>
              </div>

              {/* Lien centré en dessous */}
              <div className="text-center">
                <Link
                  to="/forgot-password"
                  className={`small ${
                    darkMode ? "text-info" : "text-primary"
                  } text-decoration-none`}
                >
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>

            {/* Messages */}
            {error && (
              <div
                className={`alert ${
                  darkMode ? "alert-warning" : "alert-danger"
                } mb-3`}
              >
                {error}
              </div>
            )}
            {status && (
              <div
                className={`text-center mb-3 ${
                  darkMode ? "text-light" : "text-muted"
                }`}
              >
                {status}
              </div>
            )}

            {/* Bouton */}
            <div className="d-grid">
              <button
                type="submit"
                className={`btn py-2 ${
                  darkMode ? "btn-info text-dark" : "btn-primary"
                }`}
              >
                Se connecter
              </button>
            </div>
          </form>

          {/* Lien inscription */}
          <div
            className={`text-center mt-3 ${
              darkMode ? "text-light" : "text-dark"
            }`}
          >
            <small>
              Nouveau sur notre plateforme ?{" "}
              <Link
                to="/inscription"
                className={`${
                  darkMode ? "text-info" : "text-primary"
                } text-decoration-none fw-semibold`}
              >
                S'inscrire
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
