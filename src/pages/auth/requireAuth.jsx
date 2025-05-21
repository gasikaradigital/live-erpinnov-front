import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { user } from "../../api/userApi";
import { csrf } from "../../api/csrfApi";

axios.defaults.withCredentials = true; // nécessaire pour les cookies httpOnly

const RequireAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await csrf()
        await user();
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
        navigate("/", { replace: true, state: { from: location } });
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [navigate, location]);

  if (loading) return <div>Chargement...</div>;

 return authenticated ? <Outlet /> : null;
};

export default RequireAuth;
