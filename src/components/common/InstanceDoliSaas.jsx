import React, { useState, useEffect } from "react";
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
import { fetchPlan } from "../../api/planApi";

const InstanceDoliSaas = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const secondaryColor = theme === "dark" ? "#444" : "#ccc";
  const grayBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";
  const [plans, setPlans] = useState([]);

  const handleStart = async () => {
    const res = await fetchPlan();
    const newPlan = res?.plan || [];
    setPlans(newPlan);
    const planSelected = newPlan.find(p => p.id === 5);
    const subPlanSelected = planSelected?.sub_plans?.find(p => p.id === 12);
    const prixBase = parseFloat(subPlanSelected?.price_monthly_formated || 0);

    console.log({
      'subPlanSelected': subPlanSelected,
    });

    localStorage.setItem('planChoose', JSON.stringify({
      planId: 5,
      subPlanId: selectedPlan,
      prixBase: prixBase,
      source: "dolisaas"
    }));
    navigate("/paiement");
  };

  const dolisaasPlan = plans.find(p => p.label === "Dolisaas");

  const pricingPlans = [
    {
      id: 1,
      name: "2 Go",
      monthlyPrice: "25 000 Ar",
      annualPrice: "300 000 Ar",
      description: "~5 €/mois par utilisateur",
      badgeVariant: "info",
    },
    {
      id: 2,
      name: "5 Go",
      monthlyPrice: "40 000 Ar",
      annualPrice: "480 000 Ar",
      description: "~8 €/mois par utilisateur",
      badgeVariant: "primary",
    },
    {
      id: 3,
      name: "10 Go",
      monthlyPrice: "80 000 Ar",
      annualPrice: "960 000 Ar",
      description: "~16 €/mois par utilisateur",
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
        maxHeight: "90vh", // 👈 empêche de dépasser l’écran
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
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                        <span>Clé en main, sans installation</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="bi bi-cloud-fill text-info me-2 fs-5"></i>
                        <span>Hébergement en France</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="bi bi-file-earmark-text-fill text-warning me-2 fs-5"></i>
                        <span>PCG Madagascar + France inclus</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="bi bi-mortarboard-fill text-secondary me-2 fs-5"></i>
                        <span>Tutoriels, FAQ, forum communautaire</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="bi bi-gift-fill text-danger me-2 fs-5"></i>
                        <span>Essai gratuit 14 jours, sans engagement</span>
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
                          Valable jusqu'au 1er Septembre 2025
                        </small>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 rounded-pill shadow-sm mb-2"
                    onClick={handleStart}
                  >
                    <i className="bi bi-play-circle-fill me-2"></i>
                    Création d’instance (offre 14 jours gratuits)
                  </Button>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </Card>
  );
};

export default InstanceDoliSaas;
