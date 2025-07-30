import { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import { HiEye, HiFolder, HiDocumentDownload } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "../../contexts/ThemeContext";
import AppNavbar from '../../components/common/navbar/AppNavbar';


const PaiementDocument = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  // Couleurs personnalisées
  const bgColor = darkMode ? '#222' : '#fff';         // gris foncé ou blanc
  const textColor = darkMode ? '#eee' : '#222';       // clair ou sombre
  const cardBg = darkMode ? '#222' : '#f8f9fa';    // gris moyen ou gris clair
  const badgeBlue = '#0d6efd';                         // bleu vif

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
              // backgroundColor: cardBg,
            }}
          >
    
              {/* En-tête avec bouton */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center pt-4 gap-3 mb-4">
                <h2 className="d-flex align-items-center" style={{ color: badgeBlue }}>
                  <HiFolder className="me-2" size={30} />
                  Mes Documents
                </h2>
              </div>
    
              <h4 className="text-start">Documents offerts pour les abonements validés</h4>
              <div className="text-start ms-lg-5">
                <p className="text-secondary">Pour tout abonnement validé, un fichier document PDF seront offert et automatiquement généré après votre abonement.</p>
                <Card className="p-3 rounded-4 border border-primary-subtle" style={{ maxWidth: '720px' }}>
                  <Row className="g-0 align-items-center">

                    {/* Radio button */}
                    <Col xs="auto">
                      <Form.Check
                        type="radio"
                        name="dolibarr-option"
                        defaultChecked
                        style={{ transform: 'scale(0.5)'}}
                      />
                    </Col>

                    {/* Image */}
                    <Col xs="auto" className="h-100">
                      <img
                        src="/src/assets/dolibarr-pdf-bien-gerer-son-entreprisec2171d20240202113929-image_cover.jpg"
                        alt="Dolibarr ebook"
                        style={{ width: '80px', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
                      />
                    </Col>

                    {/* contenue */}
                    <Col className="ps-3 d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center align-items-lg-center">
                      <div className="mb-2 mb-lg-0 me-lg-3">
                        <h6 className="fw-bold text-primary mb-1">
                          BIEN GÉRER SON ENTREPRISE AVEC DOLIBARR
                        </h6>
                        <p className="mb-0 text-secondary" style={{ fontSize: '0.875rem' }}>
                          Pour simplifier l'accès à Dolibarr, nous avons conçu DoliSaaS : une version en ligne, prête à l'emploi, accessible sans aucun besoin de serveur …
                        </p>
                      </div>
                      <div>
                        <Button variant="primary d-flex">
                          <i className="bi bi-download me-2" /> Télécharger
                        </Button>
                      </div>
                    </Col>
                    
                  </Row>
                </Card>
              </div>
              {/* Documents listes */}
              
    

            </Container>

            
          </div>
        </div>
      );

    }
    
    export default PaiementDocument;