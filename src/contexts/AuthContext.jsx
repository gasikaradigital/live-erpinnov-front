import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../config";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get("/api/user");
        if (data.user) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (err) {
        console.log("error : " + err);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [location.pathname]);

  const login = async (credentials) => {
    await api.get("/sanctum/csrf-cookie");
    setLoading(true);
    setError(null);

    try {
      const { data } = await api.post("/api/login", credentials);
      if (data.message === "Authentificated") {
        setIsAuthenticated(true);
        navigate("/dashboard");
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
      await api.post("/api/logout");
    } catch (err) {
      setError(err.response?.data?.message || "Échec de la déconnexion");
    } finally {
      setIsAuthenticated(false);
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        error,
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
