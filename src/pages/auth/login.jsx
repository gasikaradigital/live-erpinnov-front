import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/common/navbar/navbarlogin";
import { useDarkMode } from "../../contexts/DarkModeContext";
import axios from "axios";

const Login = () => {
  const { darkMode } = useDarkMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [error,  setError ] = useState("");
  const [status, setStatus ] = useState("");
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError("");
    setStatus("Connexion en cours...");

    try{
      const response = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      }, {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      });
      
      console.log("Réponse reçus:", response.data);

      if(response.data.token || response.data.user) {
        setStatus("Connexion réussi");
      } else {
        setError("Connexion échouée");
      }
    } catch(err) {
      console.error("Erreur Api: ", err);
    }
    console.log({ email, password, rememberMe });
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

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-start w-100">
                Email
              </label>
              <input
                type="email"
                className="form-control"
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
                <Link to="/forgot-password" className="small text-primary">
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="input-group">
                <input
                  type={showPwd ? "text" : "password"}
                  className="form-control"
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
                  <i className={`bi ${showPwd ? "bi-eye-slash" : "bi-eye"}`}></i>
                </button>
              </div>
            </div>

            <div className="form-check mb-3 text-start">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember">
                Se souvenir de moi
              </label>
            </div>

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
