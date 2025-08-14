import React from "react";
import { Card, Badge, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InstancesCard = () => {
  const navigate = useNavigate();

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
    {
      name: "Amazon",
      nif: "741 852 963",
      tel: "+1 206 266 1000",
      nbEmployes: "Plus de 5000",
      adresse: "410 Terry Ave N, Seattle",
      ville: "Seattle",
      pays: "USA",
      active: true,
    },
    {
      name: "Orange Madagascar",
      nif: "159 753 486",
      tel: "+261 32 11 222 33",
      nbEmployes: "201 – 500",
      adresse: "Zone Galaxy Andraharo",
      ville: "Antananarivo",
      pays: "Madagascar",
      active: true,
    },
  ];

  const handleInstanceClick = (instance) => {
    navigate("/instance/create", {
      state: {
        prefillData: {
          name:
            instance.name.toLowerCase().replace(/\s+/g, "-") +
            "-" +
            Math.floor(Math.random() * 1000),
          entreprise: {
            nom: instance.name,
            nif: instance.nif,
            tel: instance.tel,
            ville: instance.ville,
            pays: instance.pays,
            adresse: instance.adresse,
            nbEmployes: instance.nbEmployes,
          },
          isActive: instance.active,
        },
      },
    });
  };

  return (
    <Container
      fluid
      className="px-0 mt-0 d-flex justify-content-center align-items-start"
      style={{ minHeight: "100vh"}}
    >
      <Card
        className="rounded-3 shadow-sm"
        style={{
          width: "80vw",
          maxHeight: "60vh",
        }}
      >
        {/* Titre centré */}
        <h5 className="mb-0 fw-bold text-center p-3">
          Choisissez votre solution
        </h5>

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
              maxHeight: "calc(3 * 80px)",
            }}
          >
            {instances.length > 0 ? (
              instances.map((instance, idx) => (
                <div
                  key={idx}
                  className="border rounded p-3 mb-2"
                  style={{
                    minHeight: "80px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onClick={() => handleInstanceClick(instance)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "")
                  }
                >
                  <div className="fw-bold d-flex justify-content-between">
                    <span>{instance.name}</span>
                    <Badge
                      bg={instance.active ? "success" : "secondary"}
                      className="align-self-start"
                    >
                      {instance.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <small className="text-muted">
                    {instance.ville}, {instance.pays} — {instance.nbEmployes}
                  </small>
                  <div className="mt-1">
                    <small className="text-muted">{instance.adresse}</small>
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
