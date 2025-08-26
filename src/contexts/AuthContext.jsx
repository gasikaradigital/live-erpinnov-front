import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../config';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await api.get('/api/user');

                if(data.user) {
                    setAuthenticated(true); 
                    setUser(data.user);  
                } else {
                    setAuthenticated(false);
                    setUser(null);
                }
                
            } catch (err) {
                console.log("error : "+err);
                setAuthenticated(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [location.pathname]);

    const login = async (credentials) => {

        const csrf_response = await api.get(`/sanctum/csrf-cookie`);

        console.log(csrf_response.data);

        setLoading(true);
        setError(null);

        try {
            const { data } = await api.post('/api/login', credentials);

            if (data.message === "Authentificated") {
                setAuthenticated(true);
                navigate('/dashboard');
                return true;
            }
        } catch (err) {
            setError(err.response?.data?.message || "Échec de l'authentification");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await api.post('/api/logout');
        } catch (err) {
            setError(err.response?.data?.message || "Échec de la déconnexion");
        } finally {
            setAuthenticated(false);
            navigate('/');
        }
    };

    return (
        <AuthContext.Provider value={{
            authenticated,
            loading,
            error,
            user,
            setUser,
            setAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);