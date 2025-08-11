import React from "react";
import { Card, Badge, Container } from "react-bootstrap";

const InstancesCard = () => {
  // Exemple de données venant du formulaire (fake data)
  const instances = [
    {
      name: "Space X",
      nif: "123 456 789",
      tel: "+261 34 12 345 67",
      nbEmployes: "51 – 200",
      adresse: "Lot II A 12 Bis, Andavamamba",
      ville: "Antananarivo",
      pays: "Madagascar",
      active: true,
    },
    {
      name: "Tesla Inc.",
      nif: "987 654 321",
      tel: "+33 1 23 45 67 89",
      nbEmployes: "Plus de 200",
      adresse: "3500 Deer Creek Road, Palo Alto",
      ville: "Palo Alto",
      pays: "USA",
      active: false,
    },
  ];

  return (
    <Container
      fluid
      className="px-0 d-flex justify-content-center align-items-start"
      style={{ minHeight: "100vh", paddingTop: "40px" }}
    >
      <Card
        className="rounded-3 shadow-sm"
        style={{
          width: "80vw",
          maxHeight: "60vh",
        }}
      >
        {/* Titre centré */}
        <Card.Header className="bg-white border-bottom text-center py-3">
          <h5 className="mb-0 fw-bold">Choisissez votre solution</h5>
        </Card.Header>

        <Card.Body className="p-4 d-flex flex-column h-100">
          {/* Header section */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
              <div className="d-flex align-items-center gap-3">
                <h6 className="mb-0 fw-semibold">Instances</h6>
                <div className="d-flex gap-2">
                  <Badge
                    bg="light"
                    text="dark"
                    className="px-3 py-2 rounded-pill"
                  >
                    Total: {instances.length}
                  </Badge>
                  <Badge
                    bg="light"
                    text="success"
                    className="px-3 py-2 rounded-pill"
                  >
                    Actives: {instances.filter((i) => i.active).length}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Liste (max 3 lignes visibles, puis scroll) */}
          <div
            className="flex-grow-1 overflow-auto"
            style={{
              maxHeight: "calc(3 * 80px)", // plus grand car plus d'infos
            }}
          >
            {instances.length > 0 ? (
              instances.map((instance, idx) => (
                <div
                  key={idx}
                  className="border rounded p-3 mb-2"
                  style={{ minHeight: "80px" }}
                >
                  <div className="fw-bold">{instance.name}</div>
                  <small className="text-muted">
                    {instance.ville}, {instance.pays} — {instance.nbEmployes}
                  </small>
                  <div>
                    <Badge
                      bg={instance.active ? "success" : "secondary"}
                      className="mt-1"
                    >
                      {instance.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted">Aucune instance</div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InstancesCard;
