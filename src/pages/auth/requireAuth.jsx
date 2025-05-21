// components/RequireAuth.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { user } from "../../api/user";

axios.defaults.withCredentials = true; // nécessaire pour les cookies httpOnly

const requireAuth = () => {
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

  if (!auth) return <Navigate to="/login" state={{ from: location }} replace />;

  return <Outlet />;
};

export default requireAuth;
