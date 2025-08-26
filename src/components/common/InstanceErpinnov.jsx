import React, { useState } from "react";
import {
  Card,
  Accordion,
  Row,
  Col,
  Badge,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
// import erpinnovCover from "../../assets/erpinnov-solo-cover.jpg";

const InstanceErpinnov = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const secondaryColor = theme === "dark" ? "#444" : "#ccc";
  const grayBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";

  const handleStart = () => {
    localStorage.setItem(
      "planChoose",
      JSON.stringify({
        planId: 6, // Nouvel ID pour ERPINNOV-SOLO
        subPlanId: selectedPlan,
        source: "erpinnov-solo",
      })
    );
    navigate("/payement");
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      monthlyPrice: "25 500 Ar",
      annualPrice: "275 400 Ar",
      euroPrice: "5.00 €",
      description: "L'essentiel pour démarrer facilement",
      badgeVariant: "info",
      features: [
        "Gestion des tiers",
        "Gestion des produits",
        "Gestion des clients et prospects (CRM)",
        "Création de devis et factures",
        "Gestion des stocks et approvisionnements",
        "Comptabilité simple (Plan Comptable Général Madagascar)",
      ],
    },
    {
      id: 2,
      name: "Standard",
      monthlyPrice: "40 000 Ar",
      annualPrice: "432 000 Ar",
      euroPrice: "8.00 €",
      description: "Pour artisans avec besoins avancés",
      badgeVariant: "primary",
      features: [
        "Modules Basic inclus",
        "Rapports et statistiques en temps réel",
        "Email professionnel intégré",
        "Gestion des interventions et planning",
        "Gestion des garanties et SAV (ticketing)",
        "Jusqu'à 2 utilisateurs",
      ],
    },
    {
      id: 3,
      name: "Premium",
      monthlyPrice: "80 000 Ar",
      annualPrice: "864 000 Ar",
      euroPrice: "16.00 €",
      description: "La gestion complète pour votre entreprise",
      badgeVariant: "warning",
      features: [
        "Modules Standard inclus",
        "Comptabilité analytique avancée",
        "Calcul automatisé des coûts et marges",
        "Suivi du temps passé par projet",
        "Jusqu'à 3 utilisateurs",
      ],
    },
  ];

  const selectedPlanData = pricingPlans.find(
    (plan) => plan.id === selectedPlan
  );

  return (
    <Card
      className="instances-card"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: secondaryColor,
        width: "100%",
        maxHeight: "90vh",
      }}
    >
      <Accordion defaultActiveKey="0">
        <Accordion.Item
          eventKey="0"
          style={{
            backgroundColor: bgColor,
            borderColor: secondaryColor,
          }}
        >
          <Accordion.Body
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <Row className="g-4 align-items-start">
              <Col md={4} className="d-flex flex-column align-items-center">
                <div
                  className="rounded border w-100 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: bgColor,
                    borderColor: secondaryColor,
                    maxHeight: "300px",
                  }}
                >
                  <img
                    src={erpinnovCover}
                    alt="ERPINNOV SOLO"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: `1px solid ${secondaryColor}`,
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="small mt-2 text-center mb-0"
                  style={{ color: theme === "dark" ? "#aaa" : "#666" }}
                >
                  <i className="bi bi-stars text-primary me-1"></i>
                  Essai gratuit 14 jours sans engagement
                </p>

                {/* Plan selection */}
                <div className="w-100 mt-3">
                  <h6>Choisissez votre formule:</h6>
                  <div className="d-flex flex-column gap-2">
                    {pricingPlans.map((plan) => (
                      <Button
                        key={plan.id}
                        variant={
                          selectedPlan === plan.id
                            ? plan.badgeVariant
                            : "outline-" + plan.badgeVariant
                        }
                        onClick={() => setSelectedPlan(plan.id)}
                        className="text-start"
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span>{plan.name}</span>
                          <span>{plan.monthlyPrice}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </Col>

              <Col md={8}>
                <div
                  className="p-3 rounded border mb-3"
                  style={{
                    backgroundColor: grayBg,
                    borderColor: secondaryColor,
                  }}
                >
                  <h4 className="text-primary mb-3">
                    <i className="bi bi-stars me-2"></i>
                    ERPINNOV - SOLO
                  </h4>
                  <p>
                    Solution SaaS de gestion conçue pour les entrepreneurs,
                    indépendants et petites structures souhaitant bénéficier
                    d'un environnement professionnel évolutif, simple et
                    moderne.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-layout-text-window-reverse text-info me-2 fs-5"></i>
                      <span>
                        Interface moderne, fluide et ergonomique (Vue.js /
                        Laravel)
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-file-earmark-text text-warning me-2 fs-5"></i>
                      <span>
                        Gestion des clients, devis, factures, produits/services
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-graph-up text-success me-2 fs-5"></i>
                      <span>
                        Suivi de projet, modules de base (stock, banque,
                        utilisateurs)
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-shield-lock text-danger me-2 fs-5"></i>
                      <span>
                        Instance dédiée, sécurisée et hébergée en France
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-puzzle text-primary me-2 fs-5"></i>
                      <span>
                        Compatible avec une montée en charge vers des modules
                        personnalisés
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-cloud-arrow-down text-secondary me-2 fs-5"></i>
                      <span>Essai gratuit 14 jours sans engagement</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="p-3 rounded border mb-3"
                  style={{
                    backgroundColor: grayBg,
                    borderColor: secondaryColor,
                  }}
                >
                  <h5 className="mb-3">
                    {selectedPlanData.name} - {selectedPlanData.description}
                  </h5>

                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-muted">Fonctionnalités incluses:</h6>
                      <ul className="small">
                        {selectedPlanData.features.map((feature, index) => (
                          <li key={index} className="mb-1">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column h-100 justify-content-between">
                        <div>
                          <p className="mb-1">Tarif mensuel :</p>
                          <h4 className="text-success">
                            {selectedPlanData.monthlyPrice}{" "}
                            <small className="text-muted">
                              (~{selectedPlanData.euroPrice})
                            </small>
                          </h4>
                        </div>
                        <div>
                          <p className="mb-1">Tarif annuel (-10%) :</p>
                          <h4 className="text-primary">
                            {selectedPlanData.annualPrice}
                          </h4>
                          <small style={{ color: "#aaa" }}>
                            Économisez sur le long terme
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 rounded-pill shadow-sm mb-2"
                  onClick={handleStart}
                >
                  <i className="bi bi-rocket-takeoff-fill me-2"></i>
                  Essayer gratuitement ({selectedPlanData.name})
                </Button>

                <p className="text-center small text-muted mt-2">
                  Aucune carte bancaire requise pour l'essai gratuit
                </p>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default InstanceErpinnov;
