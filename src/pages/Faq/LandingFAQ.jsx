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
  Bell,
  ChevronRight,
  ChevronDown,
  Plus
} from "react-bootstrap-icons";

const LandingFAQ = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFAQItem, setActiveFAQItem] = useState("faq1");
  const [activeTutorialItem, setActiveTutorialItem] = useState("tuto1");

  // Couleurs en fonction du thème
  const bgColor = theme === "dark" ? "#1a1a2e" : "#f8f9fa";
  const textColor = theme === "dark" ? "#f8f9fa" : "#333333";
  const cardBg = theme === "dark" ? "#16213e" : "#ffffff";
  const borderColor = theme === "dark" ? "#2a3f66" : "#e0e6ed";
  const activeBg = theme === "dark" ? "#0f3460" : "#f0f4f8";
  const searchBg = theme === "dark" ? "#16213e" : "#ffffff";
  const searchBorder = theme === "dark" ? "#2a3f66" : "#d1d9e0";
  const headerBg = theme === "dark" ? "#0f3460" : "#f8fafc";

  // Données fictives pour la FAQ avec des couleurs d'icônes
  const faqItems = [
    {
      id: "faq1",
      question: "Quelles sont les offres d'abonnement disponibles ?",
      answer: "Nous proposons trois formules : Basique (29€/mois), Professionnelle (79€/mois) et Entreprise (149€/mois). Toutes incluent les mises à jour et le support technique.",
      icon: <CreditCard size={20} style={{ color: "#3b82f6" }} className="me-3" />
    },
    {
      id: "faq2",
      question: "Comment puis-je modifier mon abonnement ?",
      answer: "Vous pouvez modifier votre abonnement à tout moment depuis votre espace client dans la section 'Abonnement'.",
      icon: <ArrowRepeat size={20} style={{ color: "#10b981" }} className="me-3" />
    },
    {
      id: "faq3",
      question: "Y a-t-il un engagement de durée ?",
      answer: "Nous proposons des formules avec et sans engagement. Les abonnements annuels bénéficient d'une réduction de 20%.",
      icon: <Clock size={20} style={{ color: "#f59e0b" }} className="me-3" />
    },
    {
      id: "faq4",
      question: "Comment annuler mon abonnement ?",
      answer: "L'annulation peut être effectuée à tout moment depuis votre espace client. Votre accès reste actif jusqu'à la fin de la période de facturation.",
      icon: <CurrencyEuro size={20} style={{ color: "#ef4444" }} className="me-3" />
    },
    {
      id: "faq5",
      question: "Proposez-vous une période d'essai ?",
      answer: "Oui, nous offrons un essai gratuit de 14 jours sans carte bancaire requise.",
      icon: <Clock size={20} style={{ color: "#8b5cf6" }} className="me-3" />
    },
    {
      id: "faq6",
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Cartes de crédit, virements bancaires et PayPal.",
      icon: <CreditCard size={20} style={{ color: "#06b6d4" }} className="me-3" />
    },
    {
      id: "faq7",
      question: "Puis-je exporter mes données ?",
      answer: "Oui, vous pouvez exporter toutes vos données aux formats CSV, Excel et PDF.",
      icon: <Database size={20} style={{ color: "#84cc16" }} className="me-3" />
    },
    {
      id: "faq8",
      question: "Comment contacter le support technique ?",
      answer: "Notre support est disponible par email, chat ou téléphone du lundi au vendredi de 9h à 18h.",
      icon: <Telephone size={20} style={{ color: "#f97316" }} className="me-3" />
    },
    {
      id: "faq9",
      question: "Proposez-vous des formations ?",
      answer: "Oui, nous proposons des sessions de formation en ligne gratuites chaque semaine.",
      icon: <PersonCheck size={20} style={{ color: "#ec4899" }} className="me-3" />
    }
  ];

  // Données fictives pour les tutoriels avec des couleurs d'icônes
  const tutorialItems = [
    {
      id: "tuto1",
      question: "Comment créer une instance dans ERPInnov ?",
      answer: "Connectez-vous à votre compte, cliquez sur 'Nouvelle Instance', choisissez un nom et configurez les paramètres de base. Votre instance sera opérationnelle en moins de 5 minutes.",
      icon: <Plus size={20} style={{ color: "#3b82f6", backgroundColor: "#dbeafe", borderRadius: "50%", padding: "2px" }} className="me-3" />
    },
    {
      id: "tuto2",
      question: "Comment importer des données clients ?",
      answer: "Allez dans la section 'Clients' puis 'Importer'. Téléchargez notre modèle Excel, complétez-le avec vos données, puis importez-le.",
      icon: <QuestionCircle size={20} style={{ color: "#10b981", backgroundColor: "#dcfce7", borderRadius: "50%", padding: "2px" }} className="me-3" />
    },
    {
      id: "tuto3",
      question: "Comment personnaliser les factures ?",
      answer: "Accédez aux 'Paramètres' puis 'Modèles de documents'. Choisissez le modèle de facture et modifiez-le selon vos besoins.",
      icon: <FileText size={20} style={{ color: "#f59e0b" }} className="me-3" />
    },
    {
      id: "tuto4",
      question: "Comment configurer les taxes ?",
      answer: "La configuration des taxes se fait dans 'Paramètres' > 'Taxes'. Vous pouvez ajouter de nouvelles taxes ou modifier les taux existants.",
      icon: <CurrencyEuro size={20} style={{ color: "#ef4444" }} className="me-3" />
    },
    {
      id: "tuto5",
      question: "Comment créer un utilisateur avec des droits spécifiques ?",
      answer: "Dans 'Administration' > 'Utilisateurs', cliquez sur 'Nouvel Utilisateur'. Remplissez les informations et attribuez-lui un rôle.",
      icon: <Person size={20} style={{ color: "#8b5cf6" }} className="me-3" />
    },
    {
      id: "tuto6",
      question: "Comment générer un rapport personnalisé ?",
      answer: "Allez dans 'Rapports' > 'Nouveau Rapport', sélectionnez les données à inclure et les filtres à appliquer.",
      icon: <BarChart size={20} style={{ color: "#06b6d4" }} className="me-3" />
    },
    {
      id: "tuto7",
      question: "Comment connecter ERPInnov à mon site e-commerce ?",
      answer: "Allez dans 'Intégrations' > 'E-commerce', choisissez votre plateforme et suivez le processus d'authentification.",
      icon: <Laptop size={20} style={{ color: "#84cc16" }} className="me-3" />
    },
    {
      id: "tuto8",
      question: "Comment configurer les alertes et notifications ?",
      answer: "Dans 'Paramètres' > 'Notifications', configurez les événements qui déclenchent une alerte et le mode de notification.",
      icon: <Bell size={20} style={{ color: "#f97316" }} className="me-3" />
    },
    {
      id: "tuto9",
      question: "Comment sauvegarder et restaurer mes données ?",
      answer: "ERPInnov effectue des sauvegardes automatiques quotidiennes. Vous pouvez également initier une sauvegarde manuelle.",
      icon: <CloudUpload size={20} style={{ color: "#ec4899" }} className="me-3" />
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
  
      <Container className="mt-2">
      
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <Card 
              style={{ 
                backgroundColor: cardBg, 
                borderColor: borderColor,
                height: "100%",
                borderRadius: "12px",
                boxShadow: theme === "dark" ? "0 4px 6px rgba(0, 0, 0, 0.3)" : "0 4px 6px rgba(0, 0, 0, 0.05)"
              }}
            >
              <Card.Header 
                className="d-flex align-items-center fw-bold"
                style={{ 
                  backgroundColor: headerBg, 
                  borderBottom: `1px solid ${borderColor}`,
                  borderRadius: "12px 12px 0 0",
                  padding: "16px 20px",
                  fontSize: "16px"
                }}
              >
                <QuestionCircle size={20} style={{ color: "#6b7280" }} className="me-2" />
                FAQ
              </Card.Header>
              <Card.Body className="p-0">
                {filteredFAQItems.map((item) => (
                  <div 
                    key={item.id}
                    className="border-bottom"
                    style={{ 
                      borderColor: borderColor,
                      backgroundColor: activeFAQItem === item.id ? activeBg : "transparent",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onClick={() => setActiveFAQItem(item.id)}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-between p-3"
                      style={{ 
                        fontSize: "14px",
                        fontWeight: activeFAQItem === item.id ? "600" : "400"
                      }}
                    >
                      <div className="d-flex align-items-center">
                        {item.icon}
                        <span>{item.question}</span>
                      </div>
                      {activeFAQItem === item.id ? (
                        <ChevronDown size={16} style={{ color: "#6b7280" }} />
                      ) : (
                        <ChevronRight size={16} style={{ color: "#6b7280" }} />
                      )}
                    </div>
                    {activeFAQItem === item.id && (
                      <div 
                        className="px-3 pb-3" 
                        style={{ 
                          fontSize: "13px",
                          color: theme === "dark" ? "#d1d5db" : "#6b7280",
                          lineHeight: "1.5",
                          marginLeft: "44px"
                        }}
                      >
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
                height: "100%",
                borderRadius: "12px",
                boxShadow: theme === "dark" ? "0 4px 6px rgba(0, 0, 0, 0.3)" : "0 4px 6px rgba(0, 0, 0, 0.05)"
              }}
            >
              <Card.Header 
                className="d-flex align-items-center fw-bold"
                style={{ 
                  backgroundColor: headerBg, 
                  borderBottom: `1px solid ${borderColor}`,
                  borderRadius: "12px 12px 0 0",
                  padding: "16px 20px",
                  fontSize: "16px"
                }}
              >
                <Book size={20} style={{ color: "#6b7280" }} className="me-2" />
                TUTORIELS
              </Card.Header>
              <Card.Body className="p-0">
                {filteredTutorialItems.map((item) => (
                  <div 
                    key={item.id}
                    className="border-bottom"
                    style={{ 
                      borderColor: borderColor,
                      backgroundColor: activeTutorialItem === item.id ? activeBg : "transparent",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onClick={() => setActiveTutorialItem(item.id)}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-between p-3"
                      style={{ 
                        fontSize: "14px",
                        fontWeight: activeTutorialItem === item.id ? "600" : "400"
                      }}
                    >
                      <div className="d-flex align-items-center">
                        {item.icon}
                        <span>{item.question}</span>
                      </div>
                      {activeTutorialItem === item.id ? (
                        <ChevronDown size={16} style={{ color: "#6b7280" }} />
                      ) : (
                        <ChevronRight size={16} style={{ color: "#6b7280" }} />
                      )}
                    </div>
                    {activeTutorialItem === item.id && (
                      <div 
                        className="px-3 pb-3" 
                        style={{ 
                          fontSize: "13px",
                          color: theme === "dark" ? "#d1d5db" : "#6b7280",
                          lineHeight: "1.5",
                          marginLeft: "44px"
                        }}
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <div 
              className="text-center mb-4"
              style={{ 
                background: `linear-gradient(135deg, ${theme === "dark" ? "#1e3a8a" : "#bfdbfe"} 0%, ${theme === "dark" ? "#3730a3" : "#ddd6fe"} 100%)`,
                borderRadius: "16px",
                padding: "40px 20px",
                color: theme === "dark" ? "#f8fafc" : "#1e293b"
              }}
            >
              <h4 className="mb-3" style={{ fontWeight: "600", fontSize: "24px" }}>
                Bonjour, comment pouvons-nous vous aider ?
              </h4>
              <p className="mb-4" style={{ fontSize: "16px", opacity: 0.8 }}>
                ou choisissez parmi les catégories d'articles
              </p>

              <div className="mx-auto" style={{ maxWidth: "500px" }}>
                <InputGroup size="lg">
                  <InputGroup.Text style={{ 
                    backgroundColor: searchBg, 
                    borderColor: searchBorder,
                    color: "#6b7280",
                    borderRadius: "12px 0 0 12px"
                  }}>
                    <Search size={18} />
                  </InputGroup.Text>
                  <Form.Control 
                    placeholder="cherchez un article..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ 
                      backgroundColor: searchBg, 
                      borderColor: searchBorder, 
                      color: textColor,
                      borderRadius: "0 12px 12px 0",
                      fontSize: "16px"
                    }}
                  />
                </InputGroup>
                <div 
                  className="mt-3" 
                  style={{ 
                    fontSize: "14px",
                    color: theme === "dark" ? "#94a3b8" : "#64748b"
                  }}
                >
                  {searchQuery ? 
                    `Résultats pour: "${searchQuery}"` : 
                    "Aucune recherche n'a été effectuée."
                  }
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingFAQ;