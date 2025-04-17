import React from 'react';
import './Pricing.css';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '5.00',
      priceLocal: '25 500 MGA',
      featured: false,
      features: [
        'Gestion des tiers',
        'Gestion des produits',
        'CRM',
        'Devis et facturation',
        'Comptabilité simple',
        'Banque',
        'Caisse'
      ],
      description: "Idéal pour les indépendants ou petites entreprises avec des besoins simples.",
      buttonText: 'Essayer gratuitement'
    },
    {
      id: 2,
      name: 'Standard',
      price: '8.00',
      priceLocal: '40.000 MGA',
      featured: true,
      features: [
        'Modules Basic',
        'Rapports et statistiques',
        'Gestion des stocks',
        'Email intégré'
      ],
      description: "Pour les petites entreprises nécessitant une gestion avancée.",
      buttonText: 'Démarrer maintenant'
    },
    {
      id: 3,
      name: 'Premium',
      price: '16.00',
      priceLocal: '80.000 MGA',
      featured: false,
      features: [
        'Modules Standard',
        'Comptabilité analytique',
        'Site web synchronisé'
      ],
      description: "Offre complète pour les entreprises ayant des besoins avancés et une gestion d'équipe.",
      buttonText: 'Inscrivez-vous pour plus de détail'
    }
  ];

  return (
    <section id="landingPricing" className="section-py bg-light">
      <div className="container bg-icon-left position-relative">
        <h2 className="text-center d-flex justify-content-center align-items-center mb-2">
          <img src="/assets/img/front-pages/icons/section-tilte-icon.png" alt="section title icon" className="me-3" />
          <span className="text-uppercase">Nos offres</span>
        </h2>

        <p className="text-center fw-medium mb-10">
          Toutes nos offres incluent une suite complète d'outils pour gérer votre activité.<br />
          Choisissez le plan qui correspond le mieux à vos besoins.
        </p>

        <h1 className="text-center hero-title" data-aos="fade-up" data-aos-delay="300">
          <span className="gradient-text">SOLO</span>
        </h1>

        <p className="text-center fw-medium mb-10">
          Que vous soyez artisan, commerçant ou entrepreneur, notre solution ERP-CRM vous aide à gérer efficacement votre activité au quotidien.
          De la gestion des clients à la comptabilité, en passant par le suivi des ventes et la gestion d'un site web, nous avons une offre adaptée à vos besoins.
        </p>

        <div className="row g-4">
          {pricingPlans.map((plan, index) => (
            <div key={plan.id} className={`col-lg-4 pricing-card fadeIn`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`card border-0 h-100 ${plan.featured ? 'border-primary' : ''}`}>
                <div className="card-header text-center">
                  <h4 className="plan-name">{plan.name}</h4>
                </div>

                <div className="card-body d-flex flex-column">
                  <div className="text-center mb-4">
                    <div className="price-container">
                      <span className="currency">€</span>
                      <span className="price">{plan.price}</span>
                      <span className="period">/mois</span>
                    </div>
                    <p className="text-muted fw-bold">{plan.priceLocal}</p>
                  </div>

                  <ul className="list-unstyled flex-grow-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="d-flex align-items-start mb-3">
                        <img src="/assets/img/front-pages/icons/list-arrow-icon.png" alt="list arrow icon" className="me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a href="/login" className={`btn w-100 ${plan.featured ? 'btn-primary' : 'btn-outline-primary'}`}>
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
