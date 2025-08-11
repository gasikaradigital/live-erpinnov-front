import React, { useState } from "react";
import { Card, Accordion, Row, Col, Button, Badge } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import Erpinov from "../../assets/Offre solo erpinnov-artisant.webp";
const InstanceErpi = () => {
  const { theme } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const secondaryColor = theme === "dark" ? "#444" : "#ccc";
  const grayBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "25 500 Ar",
      features: ["1 utilisateur", "Gestion clients", "Facturation"],
    },
    {
      id: 2,
      name: "Standard",
      price: "35 000 Ar",
      features: ["2 utilisateurs", "Suivi interventions", "Statistiques"],
    },
    {
      id: 3,
      name: "Premium",
      price: "45 000 Ar",
      features: ["3 utilisateurs", "Comptabilité avancée", "Suivi temps"],
    },
  ];

  return (
    <Card
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: secondaryColor,
      }}
    >
      <Accordion defaultActiveKey="0">
        <Accordion.Item
          eventKey="0"
          style={{ backgroundColor: bgColor, borderColor: secondaryColor }}
        >
          <Accordion.Body style={{ backgroundColor: bgColor }}>
            <Row className="g-4 align-items-start">
              <Col md={4} className="d-flex flex-column align-items-center">
                <img
                  src={Erpinov}
                  alt="ERPINNOV"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: `1px solid ${secondaryColor}`,
                    maxHeight: "300px",
                    // objectFit: "cover",
                  }}
                />

                <div className="w-100 mt-3">
                  <h6>Choisissez votre offre:</h6>
                  <div className="d-flex flex-column gap-2">
                    {pricingPlans.map((plan) => (
                      <Button
                        key={plan.id}
                        variant={
                          selectedPlan === plan.id
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() => setSelectedPlan(plan.id)}
                        className="text-start"
                      >
                        <div className="d-flex justify-content-between">
                          <span>{plan.name}</span>
                          <span>{plan.price}</span>
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
                  <p>
                    <strong className="text-primary">ERPINNOV - SOLO</strong>{" "}
                    est une solution SaaS de gestion conçue pour les
                    entrepreneurs et indépendants.
                  </p>
                  <ul className="list-unstyled mb-0">
                    {[
                      "Interface moderne",
                      "Gestion clients/devis",
                      "Suivi de projet",
                      "Instance sécurisée",
                    ].map((item, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="p-3 rounded border mb-3"
                  style={{
                    backgroundColor: grayBg,
                    borderColor: secondaryColor,
                  }}
                >
                  <h5 className="text-success mb-3">
                    {pricingPlans.find((p) => p.id === selectedPlan).price}
                    <small className="text-muted"> /mois</small>
                  </h5>
                  <ul>
                    {pricingPlans
                      .find((p) => p.id === selectedPlan)
                      .features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                  </ul>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 rounded-pill shadow-sm"
                  href="https://portail.erpinnov.com/inscription"
                  target="_blank"
                >
                  Essai gratuit 14 jours
                </Button>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};

export default InstanceErpi;
