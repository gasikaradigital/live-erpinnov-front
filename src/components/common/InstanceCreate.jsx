
import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';
import AppNavbar from './navbar/AppNavbar';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from "react-router";
import './InstanceCreate.css';
import { createEntreprise, fetchEntreprises } from "../../api/enterpriseApi";

const InstanceCreate = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [instanceName, setInstanceName] = useState('');
  const [selectedOption, setSelectedOption] = useState('manual');
  const [selectedEnterprise, setSelectedEnterprise] = useState(1);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCreateInstance = () => {
    let nameToUse;

    if(selectedOption === 'automatic') {
      const organisatonsObj = organisations.find(e => e.id === Number(selectedEnterprise));
      
      if(organisatonsObj) {
        const orgName = organisatonsObj.nom.trim();

        if(orgName.length > 1) {
          nameToUse = orgName.slice(1) + orgName[0];
        } else {
          nameToUse = orgName;
        }
      } else {
        console.warn("Entreprise non trouvée pour l'ID", selectedEnterprise);
         nameToUse = "";
      }
    } else {
      nameToUse = instanceName.trim();
    }
    console.log('Creating instance with:', {
      name: nameToUse,
      option: selectedOption,
      enterprise: selectedEnterprise
    });
  };

  const handleReinitialize = () => {
    setInstanceName('');
    setSelectedOption('manual');
    setSelectedEnterprise('gasy');
  };

  //Liste des organisations
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    const getEnterprises = async () => {
      const res = await fetchEntreprises();
      const mapped = res.map((entreprise) => ({
        id: entreprise.id,
        nom: entreprise.name,
        ville: entreprise.ville,
        pays: entreprise.pays,
      }));
      setOrganisations(mapped);

    }
    getEnterprises();
  }, [])


  return (
  <div className={`instance-create-container ${theme}`}>
    <AppNavbar />

    <div className={`instance-back-nav ${theme}`}>
      <Container>
        <Button 
          variant="link" 
          className={`btn btn-link text-decoration-none p-0 back-button`}
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
        <div className={`info-card sidebar-card ${theme}`}>
          {/* Header Section */}
          <div className="header-section">
            <div className="header-icon">
              <svg width="32" height="32" fill="#0066FF" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="..."/>
              </svg>
            </div>
            <div className="header-text">
              <h1 className={`header-title ${theme}`}>Créez votre espace de travail</h1>
              <p className={`header-subtitle ${theme}`}>
                <svg width="16" height="16" className="me-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246..."/>
                  <path d="M9.796 1.343c-..."/>
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
                className={`option-card ${selectedOption === 'automatic' ? 'selected' : ''} ${theme}`}
                onClick={() => handleOptionChange('automatic')}
              >
                <div className="option-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5..."/>
                  </svg>
                </div>
                <div className="option-content">
                  <h6 className={`option-title ${theme}`}>Génér automatiquement</h6>
                  <p className={`option-desc ${theme}`}>Basé sur votre entreprise (acronyme généré)</p>
                </div>
              </div>

              <div 
                className={`option-card ${selectedOption === 'manual' ? 'selected' : ''} ${theme}`}
                onClick={() => handleOptionChange('manual')}
              >
                <div className="option-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5..."/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5..."/>
                  </svg>
                </div>
                <div className="option-content">
                  <h6 className={`option-title ${theme}`}>Créer manuellement</h6>
                  <p className={`option-desc ${theme}`}>Donnez un nom personnalisé à votre espace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)};

export default InstanceCreate ;