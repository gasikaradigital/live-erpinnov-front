// src/contexts/DarkModeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";


// Crée un contexte pour le mode sombre
const DarkModeContext = createContext();

// Composant fournisseur du contexte
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Vérifier dans localStorage si le mode sombre est activé
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // true si le mode sombre est activé, sinon false
  });

  // Mettre à jour la classe "dark-mode" sur le body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    // Sauvegarder l'état dans le localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Fonction pour basculer entre le mode sombre et clair
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte DarkMode
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
