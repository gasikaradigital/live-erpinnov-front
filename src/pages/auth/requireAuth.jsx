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
        
      } catch (error) {
        navigate('/', { replace: true });
      } 
    };

    checkAuth();
  }, [navigate]);
  if (loading) return <div>Vérification en cours...</div>;

  return authenticated ? <Outlet /> : null;
};

export default RequireAuth;
