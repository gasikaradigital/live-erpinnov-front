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

  if (loading) {
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: 1050,
        }}
      >
        <ScaleLoader color="#1d32f3" height={50} width={6} radius={2} />
      </div>
    );
  }

  return authenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
