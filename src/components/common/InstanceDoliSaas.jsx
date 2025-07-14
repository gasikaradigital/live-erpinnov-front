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
import dolibarrCover from "../../assets/dolibarr-pdf-bien-gerer-son-entreprisec2171d20240202113929-image_cover.jpg";

const InstanceDoliSaas = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("1");

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const secondaryColor = theme === "dark" ? "#444" : "#ccc";
  const grayBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";

  const handleStartTrial = () => {
    navigate("/entreprise/create");
  };

  const handleStartSubscription = () => {
    /*localStorage.setItem('planChoose', JSON.stringify({
      plan: 1,
      subPlan: 1,
      source: source
    }));
    navigate("/payement");*/
    console.log(selectedPlan);
  }

  const pricingPlans = [
    {
      id: 1,
      name: "2 Go",
      monthlyPrice: "25 000 Ar",
      annualPrice: "270 000 Ar",
      description: "~5 €/mois par utilisateur",
      badgeVariant: "info",
    },
    {
      id: 2,
      name: "5 Go",
      monthlyPrice: "35 000 Ar",
      annualPrice: "378 000 Ar",
      description: "~7 €/mois par utilisateur",
      badgeVariant: "primary",
    },
    {
      id: 3,
      name: "10 Go",
      monthlyPrice: "45 000 Ar",
      annualPrice: "486 000 Ar",
      description: "~9 €/mois par utilisateur",
      badgeVariant: "warning",
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
      }}
    >
      <Card.Body>
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
            <div>
              <h5 className="mb-0" style={{ color: textColor }}>
                Offre DoliSaaS
              </h5>
              <Badge bg="info" className="me-2">
                Simple
              </Badge>
              <Badge bg={selectedPlanData?.badgeVariant || "secondary"}>{selectedPlanData.name || "Chargement"}</Badge>
              <br />
              <small style={{ color: theme === "dark" ? "#bbb" : "#666" }}>
                Une solution Dolibarr hébergée, clé en main, prête à l'emploi.
              </small>
            </div>

            <InputGroup style={{ width: "260px" }}>
              <InputGroup.Text
                style={{
                  backgroundColor: bgColor,
                  color: "#999",
                  borderColor: secondaryColor,
                }}
              >
                <i className="bi bi-search" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Rechercher..."
                style={{
                  backgroundColor: bgColor,
                  color: textColor,
                  borderColor: secondaryColor,
                }}
              />
            </InputGroup>
          </div>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            style={{
              backgroundColor: bgColor,
              borderColor: secondaryColor,
            }}
          >
            <Accordion.Header>
              💼 Choisissez votre offre DoliSaaS
            </Accordion.Header>
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
                      src={dolibarrCover}
                      alt="Livre Dolibarr"
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
                    <i className="bi bi-gift-fill text-primary me-1"></i>
                    Livre offert (valeur 32 €)
                  </p>

                  {/* Plan selection */}
                  <div className="w-100 mt-3">
                    <h6>Choisissez votre offre:</h6>
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
                    <p>
                      <strong className="text-primary">DoliSaaS</strong> vous
                      permet d'utiliser Dolibarr sans configuration technique.
                      Accessible en ligne, sécurisé, prêt à l'emploi. Parfait
                      pour TPE, artisans ou associations.
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Clé en main, sans installation
                      </li>
                      <li>
                        <i className="bi bi-cloud-fill text-info me-2"></i>
                        Hébergement en France
                      </li>
                      <li>
                        <i className="bi bi-file-earmark-text-fill text-warning me-2"></i>
                        PCG Madagascar + France inclus
                      </li>
                      <li>
                        <i className="bi bi-mortarboard-fill text-secondary me-2"></i>
                        Tutoriels, FAQ, forum communautaire
                      </li>
                      <li>
                        <i className="bi bi-gift-fill text-danger me-2"></i>
                        Essai gratuit 14 jours, sans engagement
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
                    <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                      <div>
                        <p className="mb-1">Tarif mensuel :</p>
                        <h5 className="text-success">
                          {selectedPlanData.monthlyPrice}{" "}
                          <small className="text-muted">/utilisateur</small>
                        </h5>
                        <small>{selectedPlanData.description}</small>
                      </div>
                      <div>
                        <p className="mb-1">Tarif promotionnel :</p>
                        <h5 className="text-primary">
                          {selectedPlanData.annualPrice}{" "}
                          <small className="text-danger">(-10%)</small>
                        </h5>
                        <small style={{ color: "#aaa" }}>
                          Valable jusqu'au 1er août 2025
                        </small>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 rounded-pill shadow-sm mb-2"
                    onClick={handleStartTrial}
                  >
                    <i className="bi bi-play-circle-fill me-2"></i>
                    Démarrer l'essai gratuit ({selectedPlanData.name})
                  </Button>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 rounded-pill shadow-sm"
                    onClick={handleStartSubscription}
                  >
                    <i className="bi bi-play-circle-fill me-2"></i>
                    Commencer directement sur le tarif de {selectedPlanData.name}
                  </Button>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default InstanceDoliSaas;
