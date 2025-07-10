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
import "./InstanceDoliSaas.css"

const InstanceDoliSaas = () => {
  return (
    <Card className="instances-card bg-dark text-white border-secondary">
      <Card.Body>
        {/* Header résumé */}
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
            <div className="instances-header-left">
              <div className="title-badges">
                <h5 className="mb-0 text-light">Offre DoliSaaS</h5>
                <Badge bg="info" className="me-2">
                  Simple
                </Badge>
                <Badge bg="primary">5 Go</Badge>
              </div>
              <small className="text-white-50">
                Une solution Dolibarr hébergée, clé en main, prête à l'emploi.
              </small>
            </div>

            {/* Barre de recherche */}
            <div className="d-flex align-items-center gap-3">
              <InputGroup style={{ width: "260px" }}>
                <InputGroup.Text className="bg-dark text-white-50 border-secondary">
                  <i className="bi bi-search" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Rechercher..."
                  className="bg-dark text-white border-secondary"
                />
              </InputGroup>
            </div>
          </div>
        </div>

        {/* Accordéon de l'offre */}
        <div className="instance-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="bg-dark border-secondary">
              <Accordion.Header className="fw-medium bg-dark text-white">
                💼 Offre unique DoliSaaS – 5 Go / utilisateur
              </Accordion.Header>
              <Accordion.Body className="px-4 py-3 bg-dark text-white">
                <Row className="g-4 align-items-start">
                  <Col md={4} className="d-flex flex-column align-items-center">
                    <div
                      className="bg-dark p-2 rounded border border-secondary"
                      style={{ maxWidth: "200px" }}
                    >
                      <img
                        src="assets/img/front-pages/dolibarr-pdf-bien-gerer-son-entreprisec2171d20240202113929-image_cover.jpg"
                        alt="Livre Dolibarr"
                        className="img-fluid rounded"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #444",
                        }}
                      />
                    </div>
                    <p className="small text-white-50 mt-2 text-center mb-0">
                      <i className="bi bi-gift-fill text-primary me-1"></i>
                      Livre offert (valeur 32 €)
                    </p>
                  </Col>

                  <Col md={8}>
                    <div className="bg-gray-800 p-3 rounded border border-secondary mb-3">
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

                    <div className="bg-gray-800 p-3 rounded border border-secondary mb-3">
                      <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                        <div>
                          <p className="mb-1 fw-medium text-white">
                            Tarif mensuel :
                          </p>
                          <h5 className="text-success mb-0">
                            35 000 Ar{" "}
                            <small className="text-white-50 fw-normal">
                              /utilisateur
                            </small>
                          </h5>
                        </div>
                        <div>
                          <p className="mb-1 fw-medium text-white">
                            Tarif de lancement promotionnel
                          </p>
                          <h5 className="text-primary mb-0">
                           {" "}
                            <small className="text-danger">(-10%)</small>
                          </h5>
                          <small className="text-white-50">
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
