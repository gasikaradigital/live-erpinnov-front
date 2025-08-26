import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';
import { Container } from 'react-bootstrap';

const ProtectedRoute = () => {
  const { authenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !authenticated) {
      toast.warning('Veuillez vous connecter pour accéder à cette page');
    }
  }, [authenticated, loading]);

  return (
    <>
      {loading && (
        <Container
          fluid
          className="bg-transparent py-2"
          style={{ maxWidth: '200px' }}
        >
          <ScaleLoader color="#1d32f3" height={25} width={4} radius={2} />
        </Container>
      )}
      {!loading && (authenticated ? <Outlet /> : <Navigate to="/" replace />)}
    </>
  );
};

export default ProtectedRoute;
