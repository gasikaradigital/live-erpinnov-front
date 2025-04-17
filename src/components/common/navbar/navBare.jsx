import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'; 
import './NavSection.css';

const NavSection = () => {
  // Utilisez window.Laravel?.auth || false pour avoir une valeur par défaut
  const [auth] = useState(window.Laravel?.auth || false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  
  const menuItems = [
    { href: "#landingHero", icon: "ri-home-line", text: "Accueil" },
    { href: "#landingPricing", icon: "ri-price-tag-line", text: "Offres" },
    { href: "#landingGestion", icon: "ri-price-tag-line", text: "Gestion" },
    { href: "#landingFAQ", icon: "ri-questionnaire-line", text: "FAQ" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const sections = menuItems.map(item => item.href.substring(1));

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          setActiveSection("#" + section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="layout-navbar container shadow-none py-0">
      <div className="navbar navbar-expand-lg landing-navbar border-top-0 px-3 px-md-4">
        {/* Logo */}
        <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
          <div className="navbar-brand app-brand-links demo d-flex py-0 py-lg-2 me-4">
            <a href="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <img src="/assets/img/front-pages/logo/logo.png" alt="Logo ERP INNOV" style={{ width: '40px', height: '40px' }} className="img-fluid" />
              </span>
              <span className="app-brand-text demo menu-text fw-semibold ms-2">
                ERP <span className="innov-text">INNOV</span>
              </span>
            </a>
          </div>
          {/* Icône du menu alignée à droite sur mobile uniquement */}
          <button
            className="navbar-toggler border-0 px-0 me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <i className={`tf-icons ri-24px align-middle ${menuOpen ? 'ri-close-line' : 'ri-menu-fill'}`}></i>
          </button>
        </div>

        {/* Menu principal */}
        <div className="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto p-3 p-lg-0">
            {menuItems.map((item) => (
              <li key={item.href} className="nav-item mx-2">
                <a
                  className={`nav-link fw-medium px-3 d-flex align-items-center gap-2 ${activeSection === item.href ? 'active' : ''}`}
                  href={item.href}
                >
                  <i className={`tf-icons ${item.icon}`}></i>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}

            {/* Connexion et Inscription */}
            {!auth && (
              <li className="nav-item mx-2">
                <a href="/login" className="auth-link btn-login">
                  <i className="tf-icons ri-user-line me-md-1"></i>
                  <span className="d-inline">Connexion</span>
                </a>
              </li>
            )}
            {!auth && (
              <li className="nav-item mx-2">
                <a href="/inscription" className="auth-link btn-inscription">
                  <i className="tf-icons ri-user-add-line me-md-1"></i>
                  <span className="d-inline">Inscription</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default NavSection;