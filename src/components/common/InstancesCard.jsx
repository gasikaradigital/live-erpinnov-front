import React from "react";
import { Card, Badge, Container } from "react-bootstrap";

const InstancesCard = () => {
  return (
    <Container fluid className="px-0" style={{ height: "100vh" }}>
      <Card
        className="rounded-3 shadow-sm"
        style={{
          width: "90vw",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <Card.Body className="p-4 d-flex flex-column h-100">
          {/* Header section */}
          <div className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
              <div className="d-flex align-items-center gap-3">
                <h5 className="mb-0 fw-semibold">Instances</h5>
                <div className="d-flex gap-2">
                  <Badge
                    bg="light"
                    text="dark"
                    className="px-3 py-2 rounded-pill"
                  >
                    Total: 0
                  </Badge>
                  <Badge
                    bg="light"
                    text="success"
                    className="px-3 py-2 rounded-pill"
                  >
                    Actives: 0
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <div className="w-100 h-100 py-5 border border-2 border-dashed rounded-3 d-flex flex-column align-items-center justify-content-center">
              <div className="bg-primary bg-opacity-10 rounded-circle p-4 mb-3">
                <i className="bi bi-box text-primary display-4" />
              </div>
              <div className="text-center px-3">
                <h6 className="mb-2 fw-semibold">Aucune instance</h6>
                <p
                  className="mb-0 text-muted mx-auto"
                  style={{ maxWidth: "500px" }}
                >
                  Vous n'avez pas encore créé d'instance. Commencez par en créer
                  une nouvelle.
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InstancesCard;
