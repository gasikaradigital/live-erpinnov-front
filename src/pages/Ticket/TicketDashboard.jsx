import { useState } from "react";
import {
  Card,
  Badge,
  Button,
  Modal,
  Form,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import AppNavbar from "../../components/common/navbar/AppNavbar";
import {
  HiTicket,
  HiPlus,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketDashboard = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const today = new Date().toISOString().split("T")[0];
  console.log(today);

  const [tickets, setTickets] = useState([
    {
      id: 1,
      sujet: "Demande de devis",
      categorie: "Commercial",
      note: "Client B2B",
      status: "finnish",
      reference: "EB54321",
      createdAt: "2025-06-03",
    },
    {
      id: 2,
      sujet: "Recrutement",
      categorie: "Administratif",
      note: "Poste RH",
      status: "in progress",
      reference: "EB12345",
      createdAt: "2025-06-03",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [formData, setFormData] = useState({
    sujet: "",
    categorie: "Commercial",
    note: "",
    status: "in progress",
    reference: "",
    createdAt: today,
  });

  const commercialCount = tickets.filter(
    (t) => t.categorie === "Commercial"
  ).length;
  const administratifCount = tickets.filter(
    (t) => t.categorie === "Administratif"
  ).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.sujet.trim() === "") return toast.error("Le sujet est requis");

    if (editTicket) {
      setTickets(
        tickets.map((t) => (t.id === editTicket.id ? { ...t, ...formData } : t))
      );
      toast.success("Ticket modifié");
    } else {
      setTickets([...tickets, { id: Date.now(), ...formData }]);
      toast.success("Ticket ajouté");
    }

    setShowModal(false);
    setEditTicket(null);
    setFormData({ sujet: "", categorie: "Commercial", note: "", status: "in progress", reference: "", createdAt: today});
  };

  const handleEdit = (ticket) => {
    setEditTicket(ticket);
    setFormData({
      sujet: ticket.sujet,
      categorie: ticket.categorie,
      note: ticket.note,
      status: ticket.status,
      reference: ticket.reference,
      createdAt: ticket.createdAt,
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Confirmer la suppression du ticket ?")) {
      setTickets(tickets.filter((t) => t.id !== id));
      toast.success("Ticket supprimé");
    }
  };

  const bgColor = darkMode ? "#222" : "#fff";
  const textColor = darkMode ? "#eee" : "#222";
  const cardBg = darkMode ? "#222" : "#f8f9fa";
  const badgeBlue = "#0d6efd";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppNavbar />
      <div className="container d-flex align-items-center justify-content-center">
        <Container
          className="py-5 mt-4"
          style={{
            width: "100%",
            maxWidth: "100%",
            borderRadius: "12px",
            backgroundColor: cardBg,
          }}
        >
          {/* En-tête */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center pt-4 gap-3 mb-4">
            <h2
              className="d-flex align-items-center"
              style={{ color: badgeBlue }}
            >
              <HiTicket className="me-2" size={30} />
              Tableau de bord
            </h2>
            <Button
              style={{ backgroundColor: badgeBlue, borderColor: badgeBlue }}
              onClick={() => {
                setEditTicket(null);
                setFormData({ sujet: "", categorie: "Commercial", note: "", status: "in progress", reference: "", createdAt: today});
                setShowModal(true);
              }}
            >
              <HiPlus className="me-1" /> Nouveau ticket
            </Button>
          </div>

          {/* Statistiques */}
          <Row className="g-4 mb-4 justify-content-center text-center">
            <Col xs={12} md={6} lg={4}>
              <Card
                style={{
                  backgroundColor: cardBg,
                  color: textColor,
                  width: "100%",
                  height: "200px",
                }}
                className="shadow-sm"
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h6>Tickets commerciaux</h6>
                    <h3>{commercialCount}</h3>
                  </div>
                  <Badge style={{ backgroundColor: badgeBlue, color: "#fff" }}>
                    Commercial
                  </Badge>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card
                style={{
                  backgroundColor: cardBg,
                  color: textColor,
                  width: "100%",
                  height: "200px",
                }}
                className="shadow-sm"
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h6>Tickets administratifs</h6>
                    <h3>{administratifCount}</h3>
                  </div>
                  <Badge style={{ backgroundColor: badgeBlue, color: "#fff" }}>
                    Administratif
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Tableau des tickets */}
          <Card
            style={{
              backgroundColor: darkMode ? "#3a3f47" : "#e9ecef",
              color: textColor,
              width: "100%",
              maxWidth: "1000px",
            }}
            className="shadow-sm mx-auto"
          >
            <Card.Body className="p-0">
              <Table
                striped
                bordered
                hover
                responsive
                variant={darkMode ? "dark" : "light"}
                className="mb-0"
              >
                <thead style={{ backgroundColor: badgeBlue, color: "#fff" }}>
                  <tr>
                    <th>Réference</th>
                    <th>Date</th>
                    <th>Sujet</th>
                    <th>Catégorie</th>
                    <th>Note</th>
                    <th>Destination</th>
                    <th>Satus</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={ticket.id}>
                      <td>{ticket.reference}</td>
                      <td className="text-start">
                        {ticket.createdAt}
                      </td>
                      <td>{ticket.sujet}</td>
                      <td>{ticket.categorie}</td>
                      <td>{ticket.note}</td>
                      <td>
                        {ticket.categorie === "Administratif"
                          ? "Vers Administratif"
                          : "Vers Commercial"}
                      </td>
                      <td>
                        {ticket.status === "finnish" ? (
                          <Badge bg="success">terminé</Badge>
                        ) : (
                          <Badge bg="warning" text="dark">en cours</Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>

        {/* Modal ajout/modif */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header
            style={{ backgroundColor: cardBg, color: textColor }}
            closeButton
          >
            <Modal.Title>
              {editTicket ? "Modifier Ticket" : "Ajouter Ticket"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: bgColor, color: textColor }}>
            <Form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={formData.createdAt}
                      onChange={(e) =>
                        setFormData({ ...formData, createdAt: e.target.value })
                      }
                      style={{ textAlign: "left" }}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Réference</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.reference}
                      onChange={(e) =>
                        setFormData({ ...formData, reference: e.target.value })
                      }
                      style={{ textAlign: "left" }}
                      placeholder="ex: EBxxxxx"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.sujet}
                      onChange={(e) =>
                        setFormData({ ...formData, sujet: e.target.value })
                      }
                      style={{ textAlign: "left" }}
                      placeholder="ex: Devi..."
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Catégorie</Form.Label>
                    <Form.Select
                      value={formData.categorie}
                      onChange={(e) =>
                        setFormData({ ...formData, categorie: e.target.value })
                      }
                    >
                      <option value="Commercial">Commercial</option>
                      <option value="Administratif">Administratif</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                      placeholder="Remarques, précisions..."
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                    >
                      <option value="finnish">Terminé</option>
                      <option value="in progress">en cours</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Annuler
                    </Button>
                    <Button
                      type="submit"
                      style={{ backgroundColor: badgeBlue, borderColor: badgeBlue }}
                    >
                      {editTicket ? "Mettre à jour" : "Ajouter"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default TicketDashboard;
