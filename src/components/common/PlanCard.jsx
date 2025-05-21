import React, { useState } from 'react';
import './PlanCard.css';
import { useTheme } from '../../contexts/ThemeContext';

const PlanCard = ({ planData, open=false, blur=true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubPlan, setSelectedSubPlan] = useState(1);

  const toggleDropdown = () => {
    if (blur) return;
    setIsOpen(!isOpen);
  };

  const handleSubPlanChange = (subPlanId) => {
    setSelectedSubPlan(subPlanId);
  };

  const { theme } = useTheme();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(parseFloat(price));
  };

  return (
    <div
      className={`plan-card ${theme === 'dark' ? 'bg-dark text-white' : ''} ${blur ? 'opacity-75' : ''}`}
      style={blur ? { filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none' } : {}}
    >
      <div className={`plan-card-header ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <div className="plan-info">
          <h3 className="plan-title">{planData.label}</h3>
          <p className="plan-description">{planData.description}</p>
        </div>
        <div className="plan-price-info">
          <p className="plan-price">À partir de <span>{formatPrice(planData.price_min)} Ar/mois</span></p>
          <div className="discount-badge">Économisez 10% sur l'abonnement annuel</div>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {isOpen && (
        <div className={`plan-card-content d-flex flex-column flex-md-row gap-4`} >
          <div className="plan-features">
            <h4>Fonctionnalités incluses</h4>
            <ul>
              {planData.features.map((feature, index) => (
                <li key={index} className="d-flex align-items-center">
                  <svg className="check-icon me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L6 11L13 4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="plan-options flex-grow-1">
            <h4>Options disponibles</h4>
            <div className="d-flex flex-column gap-3">
              {planData.sub_plans.map((subPlan) => (
                <div
                  key={subPlan.id}
                  className={`option-card ${subPlan.id === 1 ? 'basic' : ''}`}
                >
                  <div className="option-header d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        id={`subPlan-${subPlan.id}`}
                        name="subPlan"
                        checked={selectedSubPlan === subPlan.id}
                        onChange={() => handleSubPlanChange(subPlan.id)}
                        className="me-2"
                      />
                      <label htmlFor={`subPlan-${subPlan.id}`} className="mb-0">
                        <h5 className="mb-0">{subPlan.label}</h5>
                      </label>
                    </div>
                    <p className="option-price mb-0">{formatPrice(subPlan.price_monthly_formated)} Ar/mois</p>
                  </div>
                  <ul className="option-features mt-2">
                    {subPlan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="text-end mt-3">
          <button className="select-option-btn btn">
            Continuer
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanCard;