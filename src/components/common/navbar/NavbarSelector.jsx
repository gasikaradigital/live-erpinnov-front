// NavbarSelector.js
import React from "react";
import { useDarkMode } from "../../../contexts/DarkModeContext";
// import NavigationBar from "../../components/common/navbar/navbarlogin";
import NavigationBar from "./navbarlogin";
import { useAuth } from "../../../contexts/AuthContext";


import AppNavbar from "./AppNavbar";

const NavbarSelector = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppNavbar /> : <NavigationBar />;
};

export default NavbarSelector;
