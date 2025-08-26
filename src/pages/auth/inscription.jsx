import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import dolibarrCover from "/src/assets/hero-dashboard-light.png";

import axios from "axios";

const Inscription = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [acceptPolitique, setAcceptPolitique] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Entrer votre email");
      return;
    }

    if (!acceptConditions || !acceptPolitique) {
      alert(
        "Vous devez accepter les conditions ou la politique d'utilisation."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await axios.get(`${baseUrl}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });

      const response = await axios.post(
        `${baseUrl}/api/register`,
        {
          email,
          password,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Utilisateur enregistré:", response.data);
      navigate("/verify-otp");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        alert("Erreur validation : " + JSON.stringify(error.response.data));
      } else {
        console.error("Erreur API: ", error);
      }
    }
  };

  return (
    <div className={`min-vh-100 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <NavigationBar isAuthenticated={false} user={null} />

      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Section gauche - Desktop seulement */}
          <div className="col-lg-7 d-none d-lg-flex align-items-center justify-content-center p-5">
            <div className="text-center w-100" style={{ maxWidth: "600px" }}>
              {/* Titre principal */}
              <h2
                className={`mb-2 fw-bold ${
                  darkMode ? "text-white" : "text-dark"
                }`}
                style={{ fontSize: "1.2rem", lineHeight: "1.3" }}
              >
                Avec ERPInnov & DoliSaaS, vous disposez d'une solution complète
                pour piloter votre entreprise au quotidien.
              </h2>

              {/* Image du dashboard */}
              <div className="mb-4">
                <img
                  src={dolibarrCover}
                  alt="Dashboard ERP INNOV"
                  className="img-fluid rounded "
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Statistiques */}
              <div className="mt-4">
                <p
                  className={`mb-2 ${darkMode ? "text-white" : "text-dark"}`}
                  style={{ fontSize: "1.1rem" }}
                >
                  Plus de <span className="fw-bold text-primary">20 000</span>{" "}
                  entreprises, associations et indépendants
                </p>
                <p
                  className={`mb-2  ${darkMode ? "text-white" : "text-dark"}`}
                  style={{ fontSize: "1.1rem" }}
                >
                  dans le monde font déjà confiance à l'écosystème Dolibarr.
                </p>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">
            <div className={`vw-100 ${darkMode ? "bg-dark" : "bg-light"}`}>
              <div className="container d-flex align-items-center justify-content-center min-vh-100">
                <div
                  className="card shadow p-4"
                  style={{
                    width: "100%", // S'adapte au conteneur parent
                    minWidth: "400px", // Largeur minimale
                    marginTop: "70px",
                    maxWidth: "500px", // J'ai augmenté la largeur maximale
                    borderRadius: "12px",
                    backgroundColor: darkMode ? "#2c3034" : "#fff",
                  }}
                >
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

                    <h4
                      className={`mb-1 ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      Créez votre compte gratuitement
                    </h4>
                    <h4
                      className="fw-bold mb-2"
                      style={{
                        color: darkMode ? "#ffffff" : "#2c3e50",
                        fontSize: "22px",
                      }}
                    >
                      15 jours d'essai gratuit
                    </h4>
                    <p
                      className="mb-1"
                      style={{
                        color: darkMode ? "#a0a6b0" : "#7f8c8d",
                        fontSize: "16px",
                      }}
                    >
                      Sans engagement, sans CB
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 position-relative">
                      <label
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
                        placeholder="Adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3 position-relative">
                      <label
                        className={`form-label text-start w-100 ${
                          darkMode ? "text-white" : "text-dark"
                        }`}
                      >
                        Mot de passe
                      </label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
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
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="form-check d-flex align-items-center">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="acceptConditions"
                          checked={acceptConditions}
                          onChange={() =>
                            setAcceptConditions(!acceptConditions)
                          }
                          style={{
                            backgroundColor: acceptConditions
                              ? darkMode
                                ? "#6c757d"
                                : "#0d6efd"
                              : "transparent",
                            borderColor: darkMode ? "#6c757d" : "#000000ff",
                            transform: "scale(0.6)",
                          }}
                        />
                        <label
                          className={`form-check-label ms-2 ${
                            darkMode ? "text-white" : "text-dark"
                          }`}
                          htmlFor="acceptConditions"
                        >
                          J'accepte les{" "}
                          <Link
                            to="/conditions"
                            className={darkMode ? "text-info" : "text-primary"}
                          >
                            conditions d'utilisation
                          </Link>
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center gap-2 mt-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="acceptPolitique"
                          checked={acceptPolitique}
                          onChange={() => setAcceptPolitique(!acceptPolitique)}
                          style={{
                            backgroundColor: acceptPolitique
                              ? darkMode
                                ? "#6c757d"
                                : "#0d6efd"
                              : "transparent",
                            borderColor: darkMode ? "#6c757d" : "#000000ff",
                            transform: "scale(0.6)",
                          }}
                        />
                        <label
                          className={`form-check-label ${
                            darkMode ? "text-white" : "text-dark"
                          }`}
                          htmlFor="acceptPolitique"
                        >
                          J'accepte la{" "}
                          <Link
                            to="/confidentialite"
                            className={darkMode ? "text-info" : "text-primary"}
                          >
                            politique de confidentialité
                          </Link>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`btn w-100 ${
                        darkMode ? "btn-info text-dark" : "btn-primary"
                      }`}
                    >
                      Créer mon compte
                    </button>

                    <p
                      className={`text-center mt-3 ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                    >
                      Déjà inscrit ?{" "}
                      <Link
                        to="/"
                        className={darkMode ? "text-info" : "text-primary"}
                      >
                        Se connecter
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
