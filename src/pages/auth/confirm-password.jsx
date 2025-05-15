import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";

const ConfirmPassword = ({ onConfirm }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (onConfirm) onConfirm(password);
      console.log("Mot de passe confirmé :", password);
      // Redirection vers le tableau de bord ou autre
      navigate("/dashboard");
    } catch (err) {
      setError("Mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
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
          {/* Logo */}
          <div className="text-center mb-4">
            <img
              src="/assets/img/front-pages/logo/logo.png"
              alt="ERP INNOV"
              style={{ height: "50px" }}
              className="mb-2"
            />
            <h5 className="fw-bold mb-0">ERP INNOV</h5>
          </div>

          {/* Message d'information */}
          <div className="mb-3 text-muted small text-center">
            Cette section est sécurisée. Veuillez confirmer votre mot de passe
            avant de continuer.
          </div>

          {/* Affichage d'erreur */}
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                autoComplete="current-password"
              />
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Confirmation..." : "Confirmer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
