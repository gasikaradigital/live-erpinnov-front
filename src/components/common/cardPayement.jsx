import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useTheme } from '../../contexts/ThemeContext';
import './cardPayement.css';

const CardPayement = () => {
  const { theme } = useTheme();
  const [selectedPayment, setSelectedPayment] = useState('visa');
  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const formatCardNumber = (value) => {
    // Supprimer tous les espaces et ne garder que les chiffres
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    // Ajouter un espace tous les 4 chiffres
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  return (
    <Card className={`payment-card border-0 rounded-4 shadow-sm ${theme === 'dark' ? 'card-dark' : 'card-light'}`}>
      <Card.Body className="p-4">
        <h5 className={`mb-4 fw-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Création d'une nouvelle instance</h5>
        <p className={`mb-4 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>Vous allez créer une nouvelle instance payante</p>

        {/* Options de paiement */}
        <Row className="g-3 mb-4">
          <Col md={4}>
            <div 
              className={`payment-option border rounded-3 p-3 text-center cursor-pointer ${
                selectedPayment === 'visa' 
                  ? `selected ${theme === 'dark' ? 'selected-dark' : 'selected-light'}` 
                  : `${theme === 'dark' ? 'option-dark' : 'option-light'}`
              }`}
              onClick={() => handlePaymentSelect('visa')}
            >
              <div className="mb-2">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="24" rx="4" fill="#1A1F71"/>
                  <text x="20" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VISA</text>
                </svg>
              </div>
              <small className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Carte bancaire</small>
              <br />
              <small className="text-success">Recommandé</small>
            </div>
          </Col>
          <Col md={4}>
            <div 
              className={`payment-option border rounded-3 p-3 text-center cursor-pointer ${
                selectedPayment === 'orange' 
                  ? `selected ${theme === 'dark' ? 'selected-dark' : 'selected-light'}` 
                  : `${theme === 'dark' ? 'option-dark' : 'option-light'}`
              }`}
              onClick={() => handlePaymentSelect('orange')}
            >
              <div className="mb-2">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="24" rx="4" fill="#FF6B00"/>
                  <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Orange</text>
                </svg>
              </div>
              <small className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Orange Money</small>
              <br />
              <small className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>+261 32 74 555 00</small>
            </div>
          </Col>
          <Col md={4}>
            <div 
              className={`payment-option border rounded-3 p-3 text-center cursor-pointer ${
                selectedPayment === 'mvola' 
                  ? `selected ${theme === 'dark' ? 'selected-dark' : 'selected-light'}` 
                  : `${theme === 'dark' ? 'option-dark' : 'option-light'}`
              }`}
              onClick={() => handlePaymentSelect('mvola')}
            >
              <div className="mb-2">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="24" rx="4" fill="#00A651"/>
                  <text x="20" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">MVola</text>
                </svg>
              </div>
              <small className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>MVola</small>
              <br />
              <small className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>+261 34 74 555 00</small>
            </div>
          </Col>
        </Row>

        {/* Formulaire de carte bancaire (affiché seulement si VISA est sélectionné) */}
        {selectedPayment === 'visa' && (
          <div className="card-form-container">
            <Form.Group className="mb-3">
              <Form.Label className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Nom du titulaire</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: John Doe"
                value={holderName}
                onChange={(e) => setHolderName(e.target.value)}
                className={`py-2 form-input ${theme === 'dark' ? 'input-dark' : 'input-light'}`}
              />
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <Form.Label className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Numéro de carte</Form.Label>
              <Form.Control
                type="text"
                placeholder="4242 4242 4242 4242"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19"
                className={`py-2 form-input ${theme === 'dark' ? 'input-dark' : 'input-light'}`}
              />
              <div className="card-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12Z" fill="#6B7280"/>
                  <path d="M10 6C7.8 6 6 7.8 6 10C6 12.2 7.8 14 10 14C12.2 14 14 12.2 14 10C14 7.8 12.2 6 10 6Z" fill="#6B7280"/>
                </svg>
              </div>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Date d'expiration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryChange}
                    maxLength="5"
                    className={`py-2 form-input ${theme === 'dark' ? 'input-dark' : 'input-light'}`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label className={`fw-medium ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Code CVC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 4))}
                    maxLength="4"
                    className={`py-2 form-input ${theme === 'dark' ? 'input-dark' : 'input-light'}`}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        )}

        {/* Bouton de paiement */}
        <Button 
          variant="success" 
          className="payment-button w-100 py-3 fw-bold rounded-3"
          size="lg"
        >
          Payer 40.000 MGA
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPayement;