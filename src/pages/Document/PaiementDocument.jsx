import { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Modal } from "react-bootstrap";
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
              <p className="border text-start" style={{ marginLeft: "5%" }}>Pour tout abonnement validé, un fichier document PDF seront offert et automatiquement généré après votre abonement.</p>
              {/* Documents listes */}
              
    

            </Container>

            
          </div>
        </div>
      );

    }
    
    export default PaiementDocument;