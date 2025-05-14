import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";

const ForgotPassword = () => {
  const { darkMode } = useDarkMode();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setStatus("");
    navigate("/dashboard");
  };

  return (
    <div className={`vw-100 ${darkMode ? "bg-dark text-white" : "bg-light"}`}>
      <NavigationBar isAuthenticated={false} user={null} />
      <div
        className={`d-flex container align-items-center justify-content-center min-vh-100 ${
          darkMode ? "bg-dark text-white" : "bg-light"
        }`}
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <div
          className={`card shadow p-4 login-form ${
            darkMode ? "login-card-dark" : "login-card-white"
          }`}
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <div className="text-center mb-4">
            <img
              src="/assets/img/front-pages/logo/logo.png"
              alt="ERP INNOV"
              style={{ height: "50px" }}
              className="mb-2"
            />
            <h5 className="fw-bold mb-0">ERP INNOV</h5>
          </div>

          <div className="mb-3 text-muted small text-center">
            Vous avez oublié votre mot de passe ? Aucun souci. Entrez votre
            adresse e-mail et nous vous enverrons un lien de réinitialisation.
          </div>

          {/* Affichage du statut (succès) */}
          {status && (
            <div className="alert alert-success text-center">{status}</div>
          )}

          {/* Affichage des erreurs */}
          {errors.length > 0 && (
            <div className="alert alert-danger">
              <ul className="mb-0">
                {errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3 justify-content-between align-items-center w-100">
              <label htmlFor="email" className="form-label ">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                autoComplete="username"
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary align-items-center w-100">
                Envoyer le lien de réinitialisation
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <small>
              Retour à la{" "}
              <Link to="/" className="text-primary">
                connexion
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
