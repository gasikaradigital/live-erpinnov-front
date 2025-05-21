import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { user } from "../../api/userApi";

axios.defaults.withCredentials = true; // nécessaire pour les cookies httpOnly

const RequireAuth = () => {
  const location = useLocation();
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await user();
        setAuth(true);
      } catch (error) {
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (loading) return <div>Chargement...</div>;

  if (!authenticated) return <Navigate to="/" state={{ from: location }} replace />;

  return <Outlet />;
};

export default RequireAuth;
