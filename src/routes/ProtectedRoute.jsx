import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';

const ProtectedRoute = () => {
  const { authenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !authenticated) {
      toast.warning('Veuillez vous connecter pour accéder à cette page');
    }
  }, [authenticated, loading]);

  if (loading) return <ScaleLoader color="#1d32f3" />;
  return authenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;