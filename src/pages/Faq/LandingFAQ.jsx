import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import AppNavbar from "../../components/common/navbar/AppNavbar.jsx";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const LandingFAQ = () => {
  const { theme } = useTheme();

  // Couleurs en fonction du thème cohérentes avec DashboardContent
  const bgColor = theme === "dark" ? "#212529" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const accordionBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";
  const borderColor = theme === "dark" ? "#444" : "#dee2e6";
  const activeBg = theme === "dark" ? "#343a40" : "#e9ecef";

  const faqItems = [
    {
      id: "One",
      question: "Qu'est-ce qu'un ERP SaaS ?",
      answer:
        "Un ERP SaaS (Software as a Service) est une solution de gestion d'entreprise accessible via internet. Notre solution vous permet de gérer l'ensemble de votre activité (clients, stocks, facturation, comptabilité) sans installation logicielle, avec une simple connexion internet.",
    },
    {
      id: "Two",
      question: "Comment débuter avec ERPINNOV ?",
      answer:
        "Il suffit de créer un compte gratuit pour commencer. Vous aurez accès à tous les modules de base immédiatement. Notre équipe vous accompagne dans la prise en main avec une formation initiale et une documentation complète.",
      show: true,
    },
    {
      id: "Three",
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "La sécurité est notre priorité. Vos données sont hébergées en France, sauvegardées quotidiennement et protégées par un chiffrement avancé. Nous respectons strictement le RGPD et garantissons la confidentialité de vos informations.",
    },
    {
      id: "Four",
      question: "Puis-je changer d'offre à tout moment ?",
      answer:
        "Oui, vous pouvez facilement upgrader ou downgrader votre abonnement à tout moment. Vos données sont conservées et vous ne payez que la différence de prix au prorata temporis.",
    },
    {
      id: "Five",
      question: "Quel support est inclus ?",
      answer:
        "Chaque offre inclut un niveau de support adapté. De l'assistance par email pour l'offre Solo au support prioritaire avec accompagnement personnalisé pour l'offre Premium. Notre équipe technique est basée à Madagascar et disponible pour vous aider.",
    },
  ];

  return (
    <section
      id="landingFAQ"
      className="py-5"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderTop: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <AppNavbar />
  
      <Container>
        {/* En-tête cohérent avec le style de la navbar */}
        <div className="text-center mb-5">
          <h2 className="d-flex justify-content-center align-items-center mb-3">
            <span
              className="text-uppercase fs-6 px-3 py-2 rounded"
              style={{
                backgroundColor: activeBg,
                color: textColor,
              }}
            >
              Questions fréquentes
            </span>
          </h2>

          <h3 className="fw-bold mb-3">Les réponses à vos questions</h3>

          <p className="mb-4 mx-auto" style={{ maxWidth: "700px" }}>
            Découvrez les réponses aux questions les plus fréquentes sur notre
            solution ERP
          </p>
        </div>

        <Row className="g-4 align-items-center">
          <Col md={5} className="text-center">
            <img
              src="assets/img/front-pages/landing-page/sitting-girl-with-laptop.png"
              alt="sitting girl with laptop"
              className="img-fluid rounded"
              style={{
                maxWidth: "450px",
              }}
            />
          </Col>

          <Col md={7}>
            <Accordion defaultActiveKey="accordionTwo" flush>
              {faqItems.map((item) => (
                <Accordion.Item
                  key={item.id}
                  eventKey={`accordion${item.id}`}
                  style={{
                    backgroundColor: accordionBg,
                    borderColor: borderColor,
                  }}
                >
                  <Accordion.Header
                    style={{
                      backgroundColor: accordionBg,
                      color: textColor,
                    }}
                  >
                    <strong>{item.question}</strong>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                  >
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingFAQ;
