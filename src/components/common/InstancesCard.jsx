import React from "react";
import { Card, Button, Badge, Form, InputGroup } from "react-bootstrap";
import "./InstancesCard.css";

const InstancesCard = () => {
  return (
    <Card className="instances-card">
      <Card.Body>
        {/* Header section - maintenant similaire à InstanceDoliSaas */}
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
            <div className="instances-header-left">
              <div className="title-badges">
                <h5 className="mb-0">Mes instances</h5>
                <Badge bg="secondary" className="me-2">
                  Total: 0
                </Badge>
                <Badge bg="success">Actives: 0</Badge>
              </div>
              <small className="text-body-secondary">
                Gérez vos espaces de travail et suivez leur état en temps réel
              </small>
            </div>

            {/* Colonne droite : recherche + bouton */}
            <div className="d-flex align-items-center gap-3">
              <InputGroup style={{ width: "260px" }}>
                <InputGroup.Text>
                  <i className="bi bi-search" />
                </InputGroup.Text>
                <Form.Control placeholder="Rechercher une instance…" />
              </InputGroup>
              <Button variant="primary">
                <i className="bi bi-plus-lg" /> Nouvelle instance
              </Button>
            </div>
          </div>
        </div>

        {/* Contenu principal - maintenant plus proche de l'autre composant */}
        <div className="instance-content">
          <div className="empty-state d-flex justify-content-center align-items-center flex-column gap-3 py-5">
            <div className="icon-container text-muted">
              <i className="bi bi-box" style={{ fontSize: "3rem" }} />
            </div>
            <div className="text-center mt-3">
              <h6 className="mb-2">Aucune instance</h6>
              <p
                className="mb-0 text-body-secondary"
                style={{ maxWidth: "400px" }}
              >
                Vous n'avez pas encore créé d'instance. Commencez par en créer
                une nouvelle.
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InstancesCard;







