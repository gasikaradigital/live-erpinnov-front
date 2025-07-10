import React from "react";
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
import "./InstanceDoliSaas.css";
import { useTheme } from "../../contexts/ThemeContext";
import dolibarrCover from "../../assets/dolibarr-pdf-bien-gerer-son-entreprisec2171d20240202113929-image_cover.jpg";

const InstanceDoliSaas = () => {
  const { theme } = useTheme();

  // Couleurs dynamiques
  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const secondaryColor = theme === "dark" ? "#444" : "#ccc";
  const grayBg = theme === "dark" ? "#2b2b3c" : "#f8f9fa";

  return (
    <Card
      className="instances-card"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: secondaryColor,
      }}
    >
      <Card.Body>
        {/* Header résumé */}
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
            <div className="instances-header-left">
              <div className="title-badges">
                <h5 className="mb-0" style={{ color: textColor }}>
                  Offre DoliSaaS
                </h5>
                <Badge bg="info" className="me-2">
                  Simple
                </Badge>
                <Badge bg="primary">5 Go</Badge>
              </div>
              <small style={{ color: theme === "dark" ? "#bbb" : "#666" }}>
                Une solution Dolibarr hébergée, clé en main, prête à l'emploi.
              </small>
            </div>

            {/* Barre de recherche */}
            <div className="d-flex align-items-center gap-3">
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
        </div>

        {/* Accordéon de l'offre */}
        <div className="instance-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item
              eventKey="0"
              style={{
                backgroundColor: bgColor,
                borderColor: secondaryColor,
              }}
            >
              <Accordion.Header style={{ color: textColor }}>
                💼 Offre unique DoliSaaS – 5 Go / utilisateur
              </Accordion.Header>
              <Accordion.Body
                className="px-4 py-3"
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
                          height: "10%",
                          // objectFit: "cover",
                          borderRadius: "8px",
                          border: `1px solid ${secondaryColor}`,
                          maxHeight: "300px",
                          // marginTop: "10 0px",
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
                  </Col>

                  <Col md={8}>
                    <div
                      className="p-3 rounded border mb-3"
                      style={{
                        backgroundColor: grayBg,
                        borderColor: secondaryColor,
                      }}
                    >
                      <p className="mb-3">
                        <strong className="text-primary">DoliSaaS</strong> vous
                        permet d'utiliser Dolibarr sans configuration technique.
                        Accessible en ligne, sécurisé, prêt à l'emploi. Parfait
                        pour TPE, artisans ou associations.
                      </p>

                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-start mb-2">
                          <i className="bi bi-check-circle-fill text-success mt-1 me-2"></i>
                          <span>Clé en main, sans installation</span>
                        </li>
                        <li className="d-flex align-items-start mb-2">
                          <i className="bi bi-cloud-fill text-info mt-1 me-2"></i>
                          <span>Hébergement en France</span>
                        </li>
                        <li className="d-flex align-items-start mb-2">
                          <i className="bi bi-file-earmark-text-fill text-warning mt-1 me-2"></i>
                          <span>PCG Madagascar + France inclus</span>
                        </li>
                        <li className="d-flex align-items-start mb-2">
                          <i className="bi bi-mortarboard-fill text-secondary mt-1 me-2"></i>
                          <span>Tutoriels, FAQ, forum communautaire</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-gift-fill text-danger mt-1 me-2"></i>
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
                          <p
                            className="mb-1 fw-medium"
                            style={{ color: textColor }}
                          >
                            Tarif mensuel :
                          </p>
                          <h5 className="text-success mb-0">
                            35 000 Ar{" "}
                            <small
                              className="fw-normal"
                              style={{ color: "#aaa" }}
                            >
                              /utilisateur
                            </small>
                          </h5>
                        </div>
                        <div>
                          <p
                            className="mb-1 fw-medium"
                            style={{ color: textColor }}
                          >
                            Tarif de lancement promotionnel
                          </p>
                          <h5 className="text-primary mb-0">
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
                      className="w-100 rounded-pill shadow-sm"
                    >
                      <i className="bi bi-play-circle-fill me-2"></i>
                      Démarrer l'essai gratuit
                    </Button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InstanceDoliSaas;
