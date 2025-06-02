import React, { useState } from 'react';
import { Container, Button, FormCheck } from 'react-bootstrap';
import AppNavbar from './navbar/AppNavbar';
import { Navbar, Nav } from 'react-bootstrap';
import { useTheme } from '../../contexts/ThemeContext';
import Form from 'react-bootstrap/Form';
import CardPayement from './cardPayement';
import { useNavigate } from "react-router";
import './PayementProcess.css';

const PaymentModule = () => {
  const { theme } = useTheme();
  const navigate = navigate = useNavigate();

  const [isAnnualBilling, setIsAnnualBilling] = useState(false);
  const [showPaymentCard, setShowPaymentCard] = useState(false);

  const handleSwitchChange = () => {
    setIsAnnualBilling(!isAnnualBilling);
  };

  const handleSubscriptionClick = () => {
    
    setShowPaymentCard(true);
  };

  const handleFreeTrialClick=()=>{
    navigate("/entreprise/create");
  }

  return (
     <div className="text-dark min-vh-100 w-100 mw-100 mx-0 px-0 paymentModuleContainer" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <AppNavbar />
      <Navbar
        expand="lg"
        className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'} paymentNavbar`}
        variant={theme === 'dark' ? 'dark' : 'light'}
      >
        <Container fluid className="paymentNavbarContainer">
          <Nav className="w-100 d-flex justify-content-between align-items-center paymentNav">
            <Nav.Link className={`ps-20 paymentNavLink ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              Retour à l'espace client
            </Nav.Link>
            <Button variant="primary" className="paymentNavButton">
              Finaliser votre abonnement
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-5 paymentMainContainer">
        <div className="row g-4 justify-content-center paymentRow">
          <div className="col-lg-7 paymentLeftColumn">
            <div
              className="p-5 text-white rounded-4 shadow paymentLeftCard"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #3C2BD1)',
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4 paymentCardHeader">
                <span className="badge rounded-pill bg-light text-primary fw-semibold px-3 py-2 paymentBadge">
                  🧩 Choisissez votre option
                </span>
              </div>

              <h2 className="fw-bold mb-2 paymentTitle">Comment souhaitez-vous commencer ?</h2>
              <p className="mb-4 text-white-50 paymentSubtitle">
                Démarrez avec un essai gratuit ou créez directement votre instance
              </p>

              <div className="row g-3 paymentOptionsRow">
                <div className="col-md-6 paymentOptionColumn">
                  <div className="p-3 rounded-3 border border-white align-items-start border-opacity-25 bg-white bg-opacity-10 mb-3 paymentOptionCard">
                    <h5 className="fw-semibold text-white mb-1 paymentOptionTitle">Créer une nouvelle instance</h5>
                    <p className="text-white-50 mb-3 paymentOptionDesc">Commencez immédiatement avec toutes les fonctionnalités</p>
                    <Button variant="light" className="w-100 fw-bold rounded-3 paymentSubscribeButton" onClick={handleSubscriptionClick}>
                      S'abonner maintenant
                    </Button>
                  </div>
                </div>

                <div className="col-md-6 paymentOptionColumn">
                  <div className="p-3 rounded-3 border border-white align-items-start border-opacity-25 bg-white bg-opacity-10 mb-3 paymentOptionCard">
                    <h5 className="fw-semibold text-white mb-1 paymentOptionTitle">Essayer gratuitement</h5>
                    <p className="text-white mb-3 paymentOptionDesc">Testez pendant 14 jours sans engagement</p>
                    <Button variant="light" className="w-100 fw-bold bg-light rounded-3 paymentTrialButton" onClick={handleFreeTrialClick}>
                      Démarrer l'essai
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {showPaymentCard && (
              <div className="mt-4 paymentCardContainer">
                <CardPayement />
              </div>
            )}
          </div>

          <div className="col-lg-4 paymentRightColumn">
            <div className={`card border-0 p-4 rounded-4 shadow-sm paymentSummaryCard ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
              <h5 className={`mb-4 fw-bold ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>Résumé de votre commande</h5>

              <div className="d-flex justify-content-between align-items-center mb-4 paymentPlanSection">
                <span className="badge py-2 px-3 bg-success text-white rounded-pill paymentPlanBadge">Solo - Premium</span>
                <div className="text-end paymentPriceSection">
                  <p className={`mb-0 fw-bold fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>648,000 MGA</p>
                  <p className={`small mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>129.60 EUR</p>
                </div>
              </div>

              <div className="p-3 bg-light rounded-3 mb-4 paymentBillingSection">
                <div className="d-flex align-items-start">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="paymentSwitch"
                    checked={isAnnualBilling}
                    onChange={handleSwitchChange}
                    style={{ backgroundColor: 'white', transform: 'scale(0.6)' }}
                  />
                  <span className={`fw-medium mt-2 paymentSwitchLabel ${theme === 'dark' ? 'text-dark' : 'text-dark'}`}>Facturation annuelle</span>
                </div>

                {isAnnualBilling && (
                  <div
                    className="d-flex align-items-center text-success animate__animated animate__fadeIn paymentSavingsMessage"
                    style={{ animationDuration: '0.3s' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="paymentSavingsIcon">
                      <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM11.54 6.29L7.7 10.29C7.52 10.47 7.26 10.6 7 10.6C6.74 10.6 6.48 10.47 6.3 10.29L4.46 8.29C4.1 7.9 4.1 7.27 4.46 6.88C4.83 6.49 5.42 6.49 5.79 6.88L7 8.17L10.21 4.71C10.58 4.32 11.17 4.32 11.54 4.71C11.9 5.1 11.9 5.9 11.54 6.29Z" />
                    </svg>
                    <span className="ms-2 small paymentSavingsText">Économisez 10% sur l'abonnement annuel</span>
                  </div>
                )}
              </div>

              <div className="border-top pt-3 mb-3 paymentGuaranteesSection">
                <div className="d-flex align-items-center mb-2 paymentGuaranteeItem">
                  <div className="bg-light rounded-circle p-2 me-3 d-flex align-items-center justify-content-center paymentGuaranteeIcon" style={{ width: "40px", height: "40px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#0066CC" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 5H11V7H9V5ZM9 9H11V15H9V9Z" />
                    </svg>
                  </div>
                  <div className="paymentGuaranteeText">
                    <p className={`mb-0 fw-medium paymentGuaranteeTitle ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Paiement sécurisé</p>
                    <p className={`small mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>Vos données sont protégées et chiffrées</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-3 paymentGuaranteeItem">
                  <div className="bg-light rounded-circle p-2 me-3 d-flex align-items-center justify-content-center paymentGuaranteeIcon" style={{ width: "40px", height: "40px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#0066CC" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 14C8.34 14 7 12.66 7 11H9C9 11.55 9.45 12 10 12C10.55 12 11 11.55 11 11C11 10.45 10.55 10 10 10C8.34 10 7 8.66 7 7C7 5.34 8.34 4 10 4C11.66 4 13 5.34 13 7H11C11 6.45 10.55 6 10 6C9.45 6 9 6.45 9 7C9 7.55 9.45 8 10 8C11.66 8 13 9.34 13 11C13 12.66 11.66 14 10 14Z" />
                    </svg>
                  </div>
                  <div className="paymentGuaranteeText">
                    <p className={`mb-0 fw-medium paymentGuaranteeTitle ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Support dédié</p>
                    <p className={`small mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>Une équipe à votre écoute 24/7</p>
                  </div>
                </div>
              </div>

              <p className={`small mt-3 paymentTerms ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                En procédant au paiement, vous acceptez nos{' '}
                <a href="#" className="text-decoration-none paymentTermsLink">conditions générales</a> et notre{' '}
                <a href="#" className="text-decoration-none paymentTermsLink">politique de confidentialité</a>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentModule;
