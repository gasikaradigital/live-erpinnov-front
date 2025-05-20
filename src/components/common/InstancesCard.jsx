import React from "react";
import { Card, Button, Badge, Form, InputGroup } from "react-bootstrap";
import "./InstancesCard.css";

const InstancesCard = () => {
  return (
    <Card className="instances-card" >
      <Card.Body>
        <div className="d-flex justify-content-between flex-wrap gap-3 mb-3">
          <div>
            <h5 className="mb-0">Mes instances</h5>
            <small className="text-body-secondary">
              Gérez vos espaces de travail et suivez leur état en temps réel
            </small>
          </div>
          
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
        
        {/* Instance stats */}
        <div className="d-flex gap-3 mb-4">
          <Badge bg="secondary">Total: 0</Badge>
          <Badge bg="success">Actives: 0</Badge>
        </div>
        
        {/* Empty state */}
        <div className="empty-state">
          <div className="d-inline-flex flex-column align-items-center gap-3">
            <div className="icon-container">
              <i className="bi bi-box" />
            </div>
            <div>
              <h6 className="mb-1">Aucune instance</h6>
              <p className="mb-0 small text-body-secondary">
                Vous n'avez pas encore créé d'instance. Commencez par en créer une nouvelle.
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InstancesCard;