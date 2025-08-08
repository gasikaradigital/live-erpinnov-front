import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
    <div className={`vw-100 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <NavigationBar isAuthenticated={false} user={null} />
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="card shadow p-4"
          style={{
            width: "100%",
            height: "23%",
            marginTop: "70px",
            maxWidth: "500px",
            maxHeight: "550px",
            borderRadius: "12px",
            backgroundColor: darkMode ? "#2c3034" : "#fff",
          }}
        >
          <h2
            className={`text-center py-2 ${
              darkMode ? "text-white" : "text-dark"
            }`}
          >
            Créer un compte gratuit
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                className={`form-label text-start w-100 ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Adresse email
              </label>
              <input
                type="email"
                className={`form-control ${
                  darkMode
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
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
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control pe-5 ${
                  darkMode
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "65%",
                  right: "15px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: darkMode ? "#ccc" : "#6c757d",
                  fontSize: "1.5rem",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mb-3 position-relative">
              <label
                className={`form-label text-start w-100 ${
                  darkMode ? "text-white" : "text-dark"
                }`}
              >
                Confirmer le mot de passe
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`form-control pe-5 ${
                  darkMode
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  top: "65%",
                  right: "15px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: darkMode ? "#ccc" : "#6c757d",
                  fontSize: "1.5rem",
                }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mb-3">
              <div className="form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="acceptConditions"
                  checked={acceptConditions}
                  onChange={() => setAcceptConditions(!acceptConditions)}
                  style={{
                    backgroundColor: acceptConditions
                      ? darkMode
                        ? "#6c757d"
                        : "#0d6efd"
                      : "transparent",
                    borderColor: darkMode ? "#6c757d" : "#adb5bd",
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
              <Link to="/" className={darkMode ? "text-info" : "text-primary"}>
                Se connecter
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
