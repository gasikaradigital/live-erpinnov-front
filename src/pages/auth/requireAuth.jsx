import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { user } from "../../api/userApi";
import { csrf } from "../../api/csrfApi";

axios.defaults.withCredentials = true;

const RequireAuth = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null); // null = état inconnu
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await csrf();
        await user();
        setAuthenticated(true);
      } catch (error) {
        console.error("Erreur d'authentification :", error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    // redirection une fois la vérification terminée
    if (authenticated === false && !loading) {
      navigate('/', { replace: true });
    }
  }, [authenticated, loading, navigate]);

  if (loading) {
    return <div>Vérification en cours...</div>;
  }

  if (authenticated) {
    return <Outlet />;
  }

  return null; // on ne retourne rien tant que la redirection n'est pas faite
};

export default RequireAuth;
