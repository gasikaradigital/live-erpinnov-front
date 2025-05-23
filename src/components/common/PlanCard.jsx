import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './PlanCard.css';

const PlanCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedSubPlan, setSelectedSubPlan] = useState(1);

  const planData = {
    "id": 1,
    "label": "Solo",
    "description": "Idéal pour les indépendants et micro-entrepreneurs.",
    "features": [
      "2 Go de stockage",
      "1000 appels API"
    ],
    "price_min": "25000.00",
    "sub_plans": [
      {
        "id": 1,
        "label": "Basic",
        "features": [
          "Gestion des tiers",
          "Produits",
          "Stocks",
          "Devis",
          "Facturation",
          "Comptabilité simple"
        ],
        "price_monthly": "5.00",
        "price_yearly": "60.00",
        "price_monthly_formated": "25000.00"
      },
      {
        "id": 2,
        "label": "Standard",
        "features": [
          "Modules Basic",
          "Rapports et statistiques",
          "CRM",
          "Email intégré"
        ],
        "price_monthly": "8.00",
        "price_yearly": "96.00",
        "price_monthly_formated": "40000.00"
      },
      {
        "id": 3,
        "label": "Premium",
        "features": [
          "Modules Standard",
          "Comptabilité analytique",
          "Suivi de temps",
          "KPI automatisés",
          "Multi-devises"
        ],
        "price_monthly": "12.00",
        "price_yearly": "144.00",
        "price_monthly_formated": "60000.00"
      }
    ]
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubPlanChange = (subPlanId) => {
    setSelectedSubPlan(subPlanId);
  };

  const {theme} = useTheme();
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(parseFloat(price));
  };

  return (
    <div className={`plan-card ${theme === 'dark' ? 'plan-card--dark' : 'plan-card--light'}`}>
      <div 
        className="plan-card__header"
        onClick={toggleDropdown}
      >
        <div className="plan-card__header-content">
          <h3 className="plan-card__title">{planData.label}</h3>
          <p className="plan-card__description">{planData.description}</p>
        </div>
        <div className="plan-card__header-price">
          <p className="plan-card__price-text">
            À partir de <span className="plan-card__price-value">{formatPrice(planData.price_min)} Ar/mois</span>
          </p>
          <span className="plan-card__badge">Économisez 10% sur l'abonnement annuel</span>
          <span className={`plan-card__arrow ${isOpen ? 'plan-card__arrow--open' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      
      <div className={`plan-card__body ${isOpen ? 'plan-card__body--open' : ''}`}>
        <div className="plan-card__content">
          <div className="plan-card__features">
            <h4 className="plan-card__section-title">Fonctionnalités incluses</h4>
            <ul className="plan-card__features-list">
              {planData.features.map((feature, index) => (
                <li key={index} className="plan-card__feature-item">
                  <svg className="plan-card__check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L6 11L13 4" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="plan-card__options">
            <h4 className="plan-card__section-title">Options disponibles</h4>
            <div className="plan-card__sub-plans">
              {planData.sub_plans.map((subPlan) => (
                <div 
                  key={subPlan.id} 
                  className={`plan-card__sub-plan ${selectedSubPlan === subPlan.id ? 'plan-card__sub-plan--selected' : ''}`}
                >
                  <div className="plan-card__sub-plan-header">
                    <div className="plan-card__sub-plan-info">
                      <input
                        type="radio"
                        id={`subPlan-${subPlan.id}`}
                        name="subPlan"
                        checked={selectedSubPlan === subPlan.id}
                        onChange={() => handleSubPlanChange(subPlan.id)}
                        className="form-check-input "
                        style={{ transform: 'scale(0.5)' }}
                      />
                      <label htmlFor={`subPlan-${subPlan.id}`} className="plan-card__sub-plan-label">
                        <h5 className="plan-card__sub-plan-title">{subPlan.label}</h5>
                      </label>
                    </div>
                    <p className="plan-card__sub-plan-price">{formatPrice(subPlan.price_monthly_formated)} Ar/mois</p>
                  </div>
                  <ul className="plan-card__sub-plan-features">
                    {subPlan.features.map((feature, index) => (
                      <li key={index} className="plan-card__sub-plan-feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="plan-card__footer">
          <button className="plan-card__button">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;