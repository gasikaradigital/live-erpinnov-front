import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';
import AppNavbar from './navbar/AppNavbar';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from "react-router";
import './InstanceCreate.css';

const InstanceCreate = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [instanceName, setInstanceName] = useState('');
  const [selectedOption, setSelectedOption] = useState('manual');
  const [selectedEnterprise, setSelectedEnterprise] = useState('gasy');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCreateInstance = () => {
    console.log('Creating instance with:', {
      name: instanceName,
      option: selectedOption,
      enterprise: selectedEnterprise
    });
  };

  const handleReinitialize = () => {
    setInstanceName('');
    setSelectedOption('manual');
    setSelectedEnterprise('gasy');
  };

  return (
    <div className={`instance-create-container ${theme} min-vh-100 w-100 mw-100 mx-0 px-0`} >
      <AppNavbar />
      
      <div className="instance-back-nav">
        <Container>
          <Button 
            variant="link" 
            className="btn btn-link text-decoration-none p-0 back-button"
            onClick={handleBackClick}
          >
            <svg width="16" height="16" className="me-2" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
             Retour au précédent
          </Button>
        </Container>
      </div>

      <Container className="main-content">
        <div className="content-layout">
          <div className="left-content">
            {/* Header Section */}
            <div className="header-section">
              <div className="header-icon">
                <svg width="32" height="32" fill="#0066FF" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
              </div>
              <div className="header-text">
                <h1 className="header-title">Créez votre espace de travail</h1>
                <p className="header-subtitle">
                  <svg width="16" height="16" className="me-2" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                  </svg>
                  Configurez votre environnement professionnel en quelques étapes simples
                </p>
              </div>
            </div>

            <div className="divider"></div>

            {/* Options Section */}
            <div className="options-section">
              <div className="option-cards">
                <div 
                  className={`option-card ${selectedOption === 'automatic' ? 'selected' : ''}`}
                  onClick={() => handleOptionChange('automatic')}
                >
                  <div className="option-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                  </div>
                  <div className="option-content">
                    <h6 className="option-title">Génér automatiquement</h6>
                    <p className="option-desc">Basé sur votre entreprise (acronyme généré)</p>
                  </div>
                </div>
                
                <div 
                  className={`option-card ${selectedOption === 'manual' ? 'selected' : ''}`}
                  onClick={() => handleOptionChange('manual')}
                >
                  <div className="option-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </div>
                  <div className="option-content">
                    <h6 className="option-title">Création Manuelle</h6>
                    <p className="option-desc">Personnalisez votre nom (non-personnalisé)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="form-section">
              <div className="form-group">
                <label className="form-label">
                  Nom de l'instance <span className="required">*</span>
                </label>
                <div className="input-container">
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="votreinstance"
                      value={instanceName}
                      onChange={(e) => setInstanceName(e.target.value)}
                    />
                    <span className="input-group-text suffix">.epinov.com</span>
                  </div>
                </div>
                <small className="helper-text">Votre nom d'instance personnalisé</small>
              </div>
            </div>

            {/* Enterprise Section */}
            <div className="enterprise-section">
              <label className="form-label">
                Entreprise associée <span className="required">*</span>
              </label>
              <p className="section-desc">Cette instance sera liée à l'entreprise sélectionnée.</p>
              
              <div className="enterprise-card">
                <div className="enterprise-content">
                  <div className="enterprise-info">
                    <div className="enterprise-avatar">g</div>
                    <div className="enterprise-details">
                      <h6 className="enterprise-name">gasy</h6>
                      <p className="enterprise-location">Mahajanga, Mahajanga, Madagascar, Madagascar</p>
                    </div>
                  </div>
                  <div className="enterprise-radio">
                    <input 
                      type="radio" 
                      name="enterprise" 
                      className="form-check-input" 
                      checked={selectedEnterprise === 'gasy'}
                      onChange={() => setSelectedEnterprise('gasy')}
                    />
                  </div>
                </div>
              </div>
              
              <div className="location-info">
                <div className="location-content">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  <div className="flag-icon"></div>
                  <span>Madagascar</span>
                </div>
                <small className="location-desc">Localisation de l'entreprise</small>
              </div>
            </div>

            <div className="divider"></div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <Button 
                variant="outline-secondary"
                className="btn btn-outline-secondary reinitialize-btn"
                onClick={handleReinitialize}
              >
                <svg width="16" height="16" className="me-2" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
                Réinitialiser
              </Button>
              
              <Button 
                variant="primary"
                className="btn btn-primary create-btn"
                onClick={handleCreateInstance}
                disabled={!instanceName.trim()}
              >
                Créer l'instance
                <svg width="16" height="16" className="ms-2" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Sidebar Cards */}
          <div className="right-sidebar">
            <div className="sidebar-card guide-card">
              <h5 className="card-title">Guide de création</h5>
              <div className="guide-steps">
                <div className="guide-step">
                  <span className="step-number">1</span>
                  <p className="step-text">Choisissez un nom unique pour votre instance</p>
                </div>
                <div className="guide-step">
                  <span className="step-number">2</span>
                  <p className="step-text">Sélectionnez votre entreprise dans la liste</p>
                </div>
                <div className="guide-step">
                  <span className="step-number">3</span>
                  <p className="step-text">Confirmez la création de votre instance</p>
                </div>
              </div>
            </div>

            <div className="sidebar-card info-card">
              <h6 className="card-title">Informations utiles</h6>
              <div className="info-item">
                <svg width="16" height="16" className="info-icon" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <p className="info-text">Le nom de votre instance doit être unique et ne peut pas être modifié ultérieurement</p>
              </div>
              <div className="info-item">
                <svg width="16" height="16" className="info-icon" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <p className="info-text">La création de votre instance peut prendre quelques minutes</p>
              </div>
            </div>

            <div className="sidebar-card help-card">
              <h6 className="card-title">Besoin d'aide ?</h6>
              <div className="help-links">
                <a href="#" className="help-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                  </svg>
                  Consulter la FAQ
                </a>
                <a href="#" className="help-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 14H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                  Contacter le support
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InstanceCreate;