import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Inscription = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      alert("Vous devez accepter les conditions d'utilisation.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    console.log({ email, password });
    navigate("/dashboard");
  };

  return (
    <div className={`vw-100 ${darkMode ? "bg-dark text-white" : "bg-light"}`}>
      <NavigationBar isAuthenticated={false} user={null} />
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className={`card shadow p-4 ${
            darkMode ? "bg-dark text-white" : "bg-white"
          }`}
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            backgroundColor: darkMode ? "#1c2333" : "#fff",
          }}
        >
          <h2 className="text-center mb-4">Créer un compte gratuit</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-start w-100">Adresse email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mot de passe */}
            <div className="mb-3 position-relative">
              <label className="form-label text-start w-100">Mot de passe</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pe-5"
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
                  color: "#6c757d",
                  fontSize: "2rem" // 👈 ajuste ici la taille
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirmation mot de passe */}
            <div className="mb-3 position-relative">
              <label className="form-label text-start w-100">Confirmer le mot de passe</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control pe-5"
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
                  color: "#6c757d",
                  fontSize: "2rem" // 👈 ajuste ici la taille
                }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              <label className="form-check-label text-start w-100" htmlFor="acceptTerms">
                J'accepte les{" "}
                <Link to="/conditions" className="text-primary">
                  conditions d'utilisation
                </Link>{" "}
                et la{" "}
                <Link to="/confidentialite" className="text-primary">
                  politique de confidentialité
                </Link>.
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Créer mon compte
            </button>

            <p className="text-center mt-3">
              Déjà inscrit ?{" "}
              <Link to="/" className="text-primary">
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
