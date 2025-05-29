import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

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
      alert("Vous devez accepter les conditions ou la politique d'utilisation.");
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

      const response = await axios.post(`${baseUrl}/api/register`, {
        email,
        password,
        password_confirmation: confirmPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true,
      });

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

  const inputStyle = {
    textAlign: "left",
    backgroundColor: darkMode ? "#2c2f3f" : "#fff",
    color: darkMode ? "#fff" : "#000",
    border: darkMode ? "1px solid #555" : "1px solid #ccc",
  };

  const labelStyle = {
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <div className={`vw-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <NavigationBar isAuthenticated={false} user={null} />
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="card shadow p-4"
          style={{
            width: "100%",
            marginTop: "70px",
            maxWidth: "500px",
            borderRadius: "12px",
            backgroundColor: darkMode ? "#1c2333" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <h2 className="text-center mb-4">Créer un compte gratuit</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-start w-100" style={labelStyle}>
                Adresse email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            {/* Mot de passe */}
            <div className="mb-3 position-relative">
              <label className="form-label text-start w-100" style={labelStyle}>
                Mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pe-5"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
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
                  fontSize: "1.5rem"
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirmation mot de passe */}
            <div className="mb-3 position-relative">
              <label className="form-label text-start w-100" style={labelStyle}>
                Confirmer le mot de passe
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control pe-5"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={inputStyle}
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
                  fontSize: "1.5rem"
                }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Conditions d'utilisation */}
            <div className="mb-3">
              <div className="form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="acceptConditions"
                  checked={acceptConditions}
                  onChange={() => setAcceptConditions(!acceptConditions)}
                  style={{
                    backgroundColor: darkMode ? "#444" : "#fff",
                    transform: "scale(0.6)",
                  }}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="acceptConditions"
                  style={labelStyle}
                >
                  J'accepte les{" "}
                  <Link
                    to="/conditions"
                    style={{
                      color: darkMode ? "#66b2ff" : "#0d6efd",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = "underline";
                      e.target.style.color = darkMode ? "#99ccff" : "#0056b3";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textDecoration = "none";
                      e.target.style.color = darkMode ? "#66b2ff" : "#0d6efd";
                    }}
                  >
                    conditions d'utilisation
                  </Link>
                  .
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Créer mon compte
            </button>

            <p className="text-center mt-3" style={labelStyle}>
              Déjà inscrit ?{" "}
              <Link
                to="/"
                style={{
                  color: darkMode ? "#66b2ff" : "#0d6efd",
                  textDecoration: "none",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
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
