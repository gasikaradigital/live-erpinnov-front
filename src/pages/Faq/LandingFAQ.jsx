import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Card } from "react-bootstrap";
import AppNavbar from "../../components/common/navbar/AppNavbar.jsx";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  Search, 
  QuestionCircle, 
  Book, 
  CreditCard, 
  Gear, 
  ShieldCheck, 
  ArrowRepeat, 
  Headset, 
  Person, 
  Clock, 
  CurrencyEuro, 
  Database, 
  Telephone, 
  PersonCheck, 
  Laptop, 
  FileText, 
  BarChart, 
  CloudUpload, 
  Bell 
} from "react-bootstrap-icons";

const LandingFAQ = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFAQItem, setActiveFAQItem] = useState("faq1");
  const [activeTutorialItem, setActiveTutorialItem] = useState("tuto1");

  // Couleurs en fonction du thème
  const bgColor = theme === "dark" ? "#212529" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const cardBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";
  const borderColor = theme === "dark" ? "#444" : "#dee2e6";
  const activeBg = theme === "dark" ? "#343a40" : "#e9ecef";
  const searchBg = theme === "dark" ? "#2b2b3c" : "#ffffff";
  const searchBorder = theme === "dark" ? "#444" : "#dee2e6";

  // Données fictives pour la FAQ
  const faqItems = [
    {
      id: "faq1",
      question: "Quelles sont les offres d'abonnement disponibles ?",
      answer: "Nous proposons trois formules : Basique (29€/mois), Professionnelle (79€/mois) et Entreprise (149€/mois). Toutes incluent les mises à jour et le support technique.",
      icon: <CreditCard size={18} className="me-2" />
    },
    {
      id: "faq2",
      question: "Comment puis-je modifier mon abonnement ?",
      answer: "Vous pouvez modifier votre abonnement à tout moment depuis votre espace client dans la section 'Abonnement'.",
      icon: <ArrowRepeat size={18} className="me-2" />
    },
    {
      id: "faq3",
      question: "Y a-t-il un engagement de durée ?",
      answer: "Nous proposons des formules avec et sans engagement. Les abonnements annuels bénéficient d'une réduction de 20%.",
      icon: <Clock size={18} className="me-2" />
    },
    {
      id: "faq4",
      question: "Comment annuler mon abonnement ?",
      answer: "L'annulation peut être effectuée à tout moment depuis votre espace client. Votre accès reste actif jusqu'à la fin de la période de facturation.",
      icon: <CurrencyEuro size={18} className="me-2" />
    },
    {
      id: "faq5",
      question: "Proposez-vous une période d'essai ?",
      answer: "Oui, nous offrons un essai gratuit de 14 jours sans carte bancaire requise.",
      icon: <Clock size={18} className="me-2" />
    },
    {
      id: "faq6",
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Cartes de crédit, virements bancaires et PayPal.",
      icon: <CreditCard size={18} className="me-2" />
    },
    {
      id: "faq7",
      question: "Puis-je exporter mes données ?",
      answer: "Oui, vous pouvez exporter toutes vos données aux formats CSV, Excel et PDF.",
      icon: <Database size={18} className="me-2" />
    },
    {
      id: "faq8",
      question: "Comment contacter le support technique ?",
      answer: "Notre support est disponible par email, chat ou téléphone du lundi au vendredi de 9h à 18h.",
      icon: <Telephone size={18} className="me-2" />
    },
    {
      id: "faq9",
      question: "Proposez-vous des formations ?",
      answer: "Oui, nous proposons des sessions de formation en ligne gratuites chaque semaine.",
      icon: <PersonCheck size={18} className="me-2" />
    }
  ];

  // Données fictives pour les tutoriels
  const tutorialItems = [
    {
      id: "tuto1",
      question: "Comment créer une instance dans ERPInnov ?",
      answer: "Connectez-vous à votre compte, cliquez sur 'Nouvelle Instance', choisissez un nom et configurez les paramètres de base. Votre instance sera opérationnelle en moins de 5 minutes.",
      icon: <Gear size={18} className="me-2" />
    },
    {
      id: "tuto2",
      question: "Comment importer des données clients ?",
      answer: "Allez dans la section 'Clients' puis 'Importer'. Téléchargez notre modèle Excel, complétez-le avec vos données, puis importez-le.",
      icon: <Database size={18} className="me-2" />
    },
    {
      id: "tuto3",
      question: "Comment personnaliser les factures ?",
      answer: "Accédez aux 'Paramètres' puis 'Modèles de documents'. Choisissez le modèle de facture et modifiez-le selon vos besoins.",
      icon: <FileText size={18} className="me-2" />
    },
    {
      id: "tuto4",
      question: "Comment configurer les taxes ?",
      answer: "La configuration des taxes se fait dans 'Paramètres' > 'Taxes'. Vous pouvez ajouter de nouvelles taxes ou modifier les taux existants.",
      icon: <CurrencyEuro size={18} className="me-2" />
    },
    {
      id: "tuto5",
      question: "Comment créer un utilisateur avec des droits spécifiques ?",
      answer: "Dans 'Administration' > 'Utilisateurs', cliquez sur 'Nouvel Utilisateur'. Remplissez les informations et attribuez-lui un rôle.",
      icon: <Person size={18} className="me-2" />
    },
    {
      id: "tuto6",
      question: "Comment générer un rapport personnalisé ?",
      answer: "Allez dans 'Rapports' > 'Nouveau Rapport', sélectionnez les données à inclure et les filtres à appliquer.",
      icon: <BarChart size={18} className="me-2" />
    },
    {
      id: "tuto7",
      question: "Comment connecter ERPInnov à mon site e-commerce ?",
      answer: "Allez dans 'Intégrations' > 'E-commerce', choisissez votre plateforme et suivez le processus d'authentification.",
      icon: <Laptop size={18} className="me-2" />
    },
    {
      id: "tuto8",
      question: "Comment configurer les alertes et notifications ?",
      answer: "Dans 'Paramètres' > 'Notifications', configurez les événements qui déclenchent une alerte et le mode de notification.",
      icon: <Bell size={18} className="me-2" />
    },
    {
      id: "tuto9",
      question: "Comment sauvegarder et restaurer mes données ?",
      answer: "ERPInnov effectue des sauvegardes automatiques quotidiennes. Vous pouvez également initier une sauvegarde manuelle.",
      icon: <CloudUpload size={18} className="me-2" />
    }
  ];

  // Filtrer les éléments basés sur la recherche
  const filteredFAQItems = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;

  const filteredTutorialItems = searchQuery 
    ? tutorialItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tutorialItems;

  return (
    <section
      id="landingFAQ"
      className="py-5 mt-5"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh"
      }}
    >
      <AppNavbar />
  
      <Container className="mt-5">
      
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <Card 
              style={{ 
                backgroundColor: cardBg, 
                borderColor: borderColor,
                height: "100%"
              }}
            >
              <Card.Header 
                className="d-flex align-items-center fw-bold"
                style={{ 
                  backgroundColor: activeBg, 
                  borderBottom: `1px solid ${borderColor}` 
                }}
              >
                <QuestionCircle className="me-2 text-primary" />
                FAQ
              </Card.Header>
              <Card.Body className="p-0">
                {filteredFAQItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 border-bottom"
                    style={{ 
                      borderColor: borderColor,
                      backgroundColor: activeFAQItem === item.id ? activeBg : "transparent",
                      cursor: "pointer"
                    }}
                    onClick={() => setActiveFAQItem(item.id)}
                  >
                    <div className="d-flex align-items-center fw-medium">
                      {item.icon}
                      {item.question}
                    </div>
                    {activeFAQItem === item.id && (
                      <div className="mt-2 ms-4 small">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col md={5} className="mb-4">
            <Card 
              style={{ 
                backgroundColor: cardBg, 
                borderColor: borderColor,
                height: "100%"
              }}
            >
              <Card.Header 
                className="d-flex align-items-center fw-bold"
                style={{ 
                  backgroundColor: activeBg, 
                  borderBottom: `1px solid ${borderColor}` 
                }}
              >
                <Book className="me-2 text-primary" />
                TUTORIELS
              </Card.Header>
              <Card.Body className="p-0">
                {filteredTutorialItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 border-bottom"
                    style={{ 
                      borderColor: borderColor,
                      backgroundColor: activeTutorialItem === item.id ? activeBg : "transparent",
                      cursor: "pointer"
                    }}
                    onClick={() => setActiveTutorialItem(item.id)}
                  >
                    <div className="d-flex align-items-center fw-medium">
                      {item.icon}
                      {item.question}
                    </div>
                    {activeTutorialItem === item.id && (
                      <div className="mt-2 ms-4 small">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={10}>
            <hr style={{ borderColor: borderColor }} />
            
            <div className="text-center mb-3">
              <h5 className="mb-2">Bonjour, comment pouvons-nous vous aider ?</h5>
              <p className="mb-3">Ou choisissez parmi les catégories d'articles</p>
            </div>

            <div className="mx-auto" style={{ maxWidth: "500px" }}>
              <InputGroup>
                <InputGroup.Text style={{ 
                  backgroundColor: searchBg, 
                  borderColor: searchBorder,
                  color: textColor
                }}>
                  <Search />
                </InputGroup.Text>
                <Form.Control 
                  placeholder="cherchez un article..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ 
                    backgroundColor: searchBg, 
                    borderColor: searchBorder, 
                    color: textColor 
                  }}
                />
              </InputGroup>
              <div className="text-muted small mt-2 text-center">
                {searchQuery ? 
                  `Résultats pour: "${searchQuery}"` : 
                  "Aucune recherche n'a été effectuée."
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingFAQ;