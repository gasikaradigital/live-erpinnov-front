import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import "./login.css";

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
        console.log(response.data);
        setStatus("Connexion réussie");
        setAuthenticated(true);
        navigate("/dashboard");
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

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow p-4 login-form w-100"
          style={{
            maxWidth: "500px",
            backgroundColor: "#ffffff", // blanc fixe
            color: darkMode ? "#000000" : "#212529", // texte noir en sombre et clair (ou autre)
          }}
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

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-start w-100">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-white text-dark 	text-start"
                id="email"
                placeholder="Entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center w-100">
                <label htmlFor="password" className="form-label mb-0">
                  Mot de passe
                </label>
            
              </div>
              <div className="input-group">
                <input
                  type={showPwd ? "text" : "password"}
                  className="form-control bg-white text-dark 	text-start"
                  id="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  <i
                    className={`bi ${showPwd ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </button>
              </div>
            </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
  <div className="form-check d-flex align-items-center">
    <input
      id="remember"
      name="remember"
      type="checkbox"
      className="form-check-input"
      checked={rememberMe}
      onChange={(e) => setRememberMe(e.target.checked)}
      style={{ backgroundColor: "white", transform: "scale(0.6)" }} // un peu plus gros que 0.5
    />
    <label className="form-check-label ms-2 mb-0" htmlFor="remember">
      Se souvenir de moi
    </label>
  </div>

  <Link to="/forgot-password" className="small text-primary">
    Mot de passe oublié ?
  </Link>
</div>


            {error && <div className="alert alert-danger">{error}</div>}
            {status && (
              <div className="text-center text-muted mb-2">{status}</div>
            )}

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Se connecter
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <small>
              Nouveau sur notre plateforme ?{" "}
              <Link to="/inscription" className="text-primary">
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
