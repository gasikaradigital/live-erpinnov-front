import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Modal } from "react-bootstrap";
import { HiTicket, HiPlus, HiOutlineFolder, HiEye, HiFolder } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "../../contexts/ThemeContext";
import AppNavbar from '../../components/common/navbar/AppNavbar';


const PaiementDocument = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  const invoice = {
    number: "INV-001235",
    issueDate: "2025-07-10",
    dueDate: "2025-07-17",
    company: {
      name: "Vuexy Inc.",
      address: "123 Vuexy Street, New York, NY",
      phone: "+1 (123) 456-7890",
      email: "info@vuexy.com",
    },
    client: {
      name: "Selestino Hajaniaina",
      company: "Client Corp.",
      address: "456 Client Road, Paris, France",
      email: "client@example.com",
    },
    items: [
      { description: "Website Design", quantity: 1, price: 1200 },
      { description: "Hosting (1 year)", quantity: 1, price: 200 },
      { description: "Domain (1 year)", quantity: 1, price: 10 },
    ],
    taxRate: 0.1,
  };

  const subtotal = invoice.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const tax = subtotal * invoice.taxRate;
  const total = subtotal + tax;

  // Couleurs personnalisées

  const bgColor = darkMode ? '#222' : '#fff';         // gris foncé ou blanc
  const textColor = darkMode ? '#eee' : '#222';       // clair ou sombre
  const cardBg = darkMode ? '#222' : '#f8f9fa';    // gris moyen ou gris clair
  const badgeBlue = '#0d6efd';                         // bleu vif

  const paiements = [
    {
      title: "Abonnement Solo Basic",
      subtitle: "Payé le 12 juin 2025",
      text: "L’abonnement Solo inclut la gestion des tiers, produits, clients (CRM), devis/factures, stocks, comptabilité (PCG Madagascar), et le suivi de projets/chantiers.",
      mga: "25 500",
      euro: 5.00
    },
    {
      title: "Abonnement Standard",
      subtitle: "Payé le 4 juillet 2025",
      text: "Inclut les modules de base, rapports en temps réel, email intégré, gestion du planning, SAV (ticketing), et jusqu’à 2 utilisateurs.",
      mga: "40 000",
      euro: 8.00
    },
    {
      title: "Abonnement Entreprise",
      subtitle: "Payé le 12 juillet 2025",
      text: "Modules Standard, comptabilité analytique avancée, calcul des coûts/marges, suivi du temps par projet, jusqu’à 3 utilisateurs.",
      mga: "80 000",
      euro: 16.00
    }
  ];
  const [show, setShow] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleShow = (doc) => {
    setSelectedDocument(doc);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const today = new Date().toLocaleDateString('fr-FR', options);


  return (
      <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
        <AppNavbar />
        <div className="container d-flex align-items-center justify-content-center">
    <Container
      className="py-5 mt-4"
      style={{
        width: "100%",
        maxWidth: "100%",
        borderRadius: "12px",
        backgroundColor: cardBg,
      }}
    >
    
    
              {/* En-tête avec bouton */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center pt-4 gap-3 mb-4">
                <h2 className="d-flex align-items-center" style={{ color: badgeBlue }}>
                  <HiFolder className="me-2" size={30} />
                  Mes Documents
                </h2>
              </div>
    
              {/* Documents listes */}
              <Row className="m-4 g-4">
                
                {paiements.map((paiement, index) => (
                  <Col key={index}>
                    <Card className="h-100 text-start">
                      <Card.Body>
                        <Card.Title>{paiement.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{paiement.subtitle}</Card.Subtitle>
                        <Card.Text>{paiement.text}</Card.Text>
                        <Button variant="primary" className="mt-auto" onClick={()=>handleShow(paiement)}>
                          <HiEye className="me-1" />
                          Vusualiser
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}


              </Row>

                {selectedDocument && (
                  <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    centered
                    backdrop="static"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Prévisualisation de la facture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Card>
                        <Card.Body>
                          <Row className="mb-4">
                            <Col>
                              <h3>{selectedDocument.title}</h3>
                              <p className="text-muted">{today.charAt(0).toUpperCase() + today.slice(1)}</p>
                            </Col>
                            <Col className="text-end">
                            <img
                                src="/assets/img/front-pages/logo/logo.png"
                                alt="ERP INNOV"
                                style={{ height: "50px" }}
                                className="mb-2"
                              />
                              <h5>ERPINNOV</h5>
                              <p>erpinnov@mail.com</p>
                            </Col>
                          </Row>

                          <Row className="mb-4">
                            <Col>
                              <h6>Facturer à:</h6>
                              <p>Nom_du_client</p>
                              <p>client@mail.com</p>
                            </Col>
                            <Col className="text-end">
                              <p><strong>Date:</strong> {selectedDocument.subtitle}</p>
                            </Col>
                          </Row>
                          
                          <p>{selectedDocument.text}</p>

                          <Table bordered hover responsive className="mb-4">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th className="text-end">Prix Euro</th>
                                <th className="text-end">Prix MGA</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>{selectedDocument.title}</td>
                                  <td className="text-end">{selectedDocument.euro}</td>
                                  <td className="text-end">{selectedDocument.mga}</td>
                                </tr>
                            </tbody>
                          </Table>

                          <Row className="mt-5">
                            <Col>
                              <p className="text-muted">Merci!</p>
                            </Col>
                            <Col className="text-end">
                              <Button variant="primary" className="me-2">Télécharger le PDF</Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Modal.Body>
                  </Modal>
                )}
    

            </Container>

            
          </div>
        </div>
      );

    }
    
    export default PaiementDocument;