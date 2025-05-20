import React, { useState } from 'react';
import './NavBarProfil.css';

const NavBarProfil = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/erp-innov-logo.png" alt="ERP INNOV Logo" className="logo-img" />
        <span className="logo-text">ERP INNOV</span>
      </div>
      <div className="navbar-content">
        <div className="instances-section">
          <h2 className="instances-title">Mes instances</h2>
          <span className="instances-count">Total: <span className="count-total">0</span></span>
          <span className="instances-count">Actives: <span className="count-active">0</span></span>
          <p className="instances-description">Gérez vos espaces de travail et suivez leur état en temps réel</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher une instance" className="search-input" />
        </div>
      </div>
      <div className="navbar-profile">
        <button onClick={toggleDropdown} className="profile-toggle">
          <span className="profile-icon">👤</span> Finoana
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <a href="/profile" className="dropdown-item">Mon Profil</a>
            <a href="/create-enterprise" className="dropdown-item">Créer une entreprise</a>
            <a href="/logout" className="dropdown-item logout">Déconnexion</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarProfil;