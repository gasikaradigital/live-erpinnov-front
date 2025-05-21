import React from "react";
import { Card, Button, Badge, Form, InputGroup } from "react-bootstrap";
import "./InstancesCard.css";

const InstancesCard = () => {
  return (
   <Card className="instances-card">
  <Card.Body>
    {/* Header section */}
    <div className="d-flex flex-column gap-3 mb-4">
  {/* Ligne du haut : titre + badges à gauche, actions à droite */}
  <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
    {/* Colonne gauche : titre + badges + description */}
    <div className="instances-header-left">
  <div className="title-badges">
    <h5 className="mb-0">Mes instances</h5>
    <Badge bg="secondary">Total: 0</Badge>
    <Badge bg="success">Actives: 0</Badge>
  </div>
  <small className="text-body-secondary">
    Gérez vos espaces de travail et suivez leur état en temps réel
  </small>
</div>


    {/* Colonne droite : recherche + bouton */}
    <div className="d-flex justify-content-between align-items-center gap-3">
      <InputGroup style={{ maxWidth: 260 }}>
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


    {/* Empty state */}
    <div className="empty-state d-flex justify-content-center align-items-center flex-column gap-3">
      <div className="icon-container">
        <i className="bi bi-box" style={{ fontSize: '2rem' }} />
      </div>
      <div className="text-center">
        <h6 className="mb-1">Aucune instance</h6>
        <p className="mb-0 small text-body-secondary">
          Vous n'avez pas encore créé d'instance. Commencez par en créer une nouvelle.
        </p>
      </div>
    </div>
  </Card.Body>
</Card>
  );
};

export default InstancesCard;