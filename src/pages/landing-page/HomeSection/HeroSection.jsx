import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroSection.css';

const HeroSection = () => {
  const dashboardPreview = useRef(null);

  const handleMouseMove = (e) => {
    if (!dashboardPreview.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;

    dashboardPreview.current.style.transform =
      `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true
    });

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="landingHero" className="d-flex align-items-center position-relative" style={{ paddingTop:100, width: 'max-content', margin: '0 auto' }} >
      {/* Background Animation */}
      <div className="hero-bg">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          {/* Text Content */}
          <div className="col-lg-6 hero-content" data-aos="fade-up">
            {/* Title */}
            <h3 className="hero-title" data-aos="fade-up" data-aos-delay="300">
              <span className="gradient-text">Nos solutions</span> adaptées
           pour votre
              <span className="highlight-text"> organisation</span>
            </h3>

            {/* Description */}
            <p className="hero-description">
                <span>
  Découvrez comment ERP INNOV peut transformer votre activité.
  Que vous soyez entrepreneur individuel, TPE/PME en croissance, grande entreprise, association ou administration, nous vous offrons des solutions adaptées qui permettent :
  </span><br />
  • <b>Réduction des coûts opérationnels</b> : Optimisez vos dépenses et améliorez votre rentabilité.<br />
  • <b>Optimisation de la gestion</b> : Optimisez vos dépenses et améliorez votre rentabilité.<br />
  • <b>Croissance accélérée</b> : Adoptez des outils performants pour soutenir votre développement.
</p>

            {/* CTA Buttons */}
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
              <a href="/login" className="btn-primary">
                <span>En savoir plus, inscription gratuite</span>
                <i className="ri-arrow-right-line ms-2"></i>
              </a>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="col-lg-6 hero-dashboard" data-aos="fade-left" data-aos-delay="300">
            <div className="dashboard-wrapper" ref={dashboardPreview}>
              <img 
                src="/assets/img/front-pages/landing-page/hero-dashboard-light.png"
                alt="Dashboard Preview"
                className="dashboard-image" 
              />

              {/* Stats Cards */}
              <div className="stats-card stats-card-1">
                <div className="stats-indicator success"></div>
                <span>+24% Croissance</span>
              </div>

              <div className="stats-card stats-card-2">
                <div className="stats-indicator primary"></div>
                <span>35% d'économies sur vos coûts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;