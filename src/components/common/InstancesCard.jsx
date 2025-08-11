import React from "react";
import { Card, Badge, Container, ListGroup } from "react-bootstrap";

const InstancesCard = () => {
  // Fake data for instances
  const fakeInstances = [
    {
      id: 1,
      name: "Production Server",
      status: "active",
      type: "Docker",
      created: "2024-05-15",
    },
    {
      id: 2,
      name: "Staging Environment",
      status: "stopped",
      type: "Kubernetes",
      created: "2024-06-20",
    },
    {
      id: 3,
      name: "Development DB",
      status: "active",
      type: "Database",
      created: "2024-07-10",
    },
    {
      id: 4,
      name: "Backup Server",
      status: "error",
      type: "Virtual Machine",
      created: "2024-08-01",
    },
    {
      id: 5,
      name: "Testing Cluster",
      status: "active",
      type: "Kubernetes",
      created: "2024-08-05",
    },
  ];

  const activeCount = fakeInstances.filter((i) => i.status === "active").length;

  return (
    <Container fluid className="px-0" style={{ height: "100vh" }}>
      <Card
        className="rounded-3 shadow-sm"
        style={{
          width: "90vw",
          height: "30vh",
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
                    Total: {fakeInstances.length}
                  </Badge>
                  <Badge
                    bg="light"
                    text="success"
                    className="px-3 py-2 rounded-pill"
                  >
                    Actives: {activeCount}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow-1 d-flex flex-column">
            {fakeInstances.length > 0 ? (
              <div className="flex-grow-1 overflow-auto">
                <ListGroup variant="flush">
                  {fakeInstances.slice(0, 3).map((instance) => (
                    <ListGroup.Item
                      key={instance.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <i
                          className={`bi bi-${
                            instance.type === "Database" ? "database" : "server"
                          } text-primary`}
                        />
                        <div>
                          <h6 className="mb-0">{instance.name}</h6>
                          <small className="text-muted">
                            {instance.type} • Created {instance.created}
                          </small>
                        </div>
                      </div>
                      <Badge
                        bg={
                          instance.status === "active"
                            ? "success"
                            : instance.status === "stopped"
                            ? "warning"
                            : "danger"
                        }
                      >
                        {instance.status}
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
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
                      Vous n'avez pas encore créé d'instance. Commencez par en
                      créer une nouvelle.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InstancesCard;
