import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ModuleSection.css';

const ModuleSection = () => {
  const facts = [
    {
      id: 1,
      numericValue: null,
      suffix: 'CRM & Ventes',
      label: 'Le CRM vous aide à gérer vos clients de manière efficace et personnalisée.',
      icon: 'ri-macbook-line',
      iconBgClass: 'bg-label-hover-primary',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
      }
    },
    {
      id: 2,
      suffix: 'Comptabilité',
      label: 'Gérer de manière autonome votre comptabilité simple ou partie double',
      icon: 'ri-bank-line',
      iconBgClass: 'bg-label-hover-success',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
      }
    },
    {
      id: 3,
      suffix: 'Finance & Facturation',
      label: 'Optimisez votre gestion financière. Paiement et Rapprochement bancaire',
      icon: 'ri-bank-fill',
      iconBgClass: 'bg-label-hover-success',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
      }
    },
    {
      id: 4,
      suffix: 'Produit & Stock',
      label: 'Gérer efficacement vos Produits, Services, Stocks, Achats et Expéditions',
      icon: 'ri-product-hunt-line',
      iconBgClass: 'bg-label-hover-warning',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
      }
    },
    {
      id: 5,
      suffix: 'Ressources Humaines',
      label: 'Noter solution simplifie la gestion de vos RH avec des outils intuitifs',
      icon: 'ri-account-circle-fill',
      iconBgClass: 'bg-label-hover-warning',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
      }
    },
    {
      id: 6,
      suffix: 'Productivité',
      label: 'Améliorez votre Productivité en gérant efficacement Projets et Tâches.',
      icon: 'ri-line-chart-fill',
      iconBgClass: 'bg-label-hover-warning',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
      }
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section id="landingGestion" className="section-py  " style={{ paddingTop:125, width: 'max-content', margin: '0 auto' }}>
      <div className="container">
        <div className="row gx-0 gy-6 gx-sm-6 justify-content-center">
          <div className="container bg-icon-left position-relative">
            <h2 className="text-center mb-2">
              <span className="display-5 fs-4 fw-bold">SIMPLIFIER VOTRE GESTION</span>
            </h2>
            <p className="text-center fw-medium mb-10">
              Des outils adaptés pour gagner du temps et répondre à vos besoins
            </p>
          </div>
          
          {facts.map((fact) => (
            <div 
              key={fact.id}
              className="col-md-4 col-sm-6 text-center"
              data-aos="fade-up"
              data-aos-delay={fact.id * 100}
            >
              <span className={`badge rounded-pill ${fact.iconBgClass} fun-facts-icon mb-6 p-5`}>
                <i className={`tf-icons ${fact.icon} ri-42px`}></i>
              </span>

              <h2 className="fw-bold mb-0 fun-facts-text">
                {fact.suffix}
              </h2>

              <h6 className="mb-0 text-body">{fact.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleSection;