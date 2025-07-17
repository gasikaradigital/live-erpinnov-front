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

  const [tickets, setTickets] = useState([
    {
      id: 1,
      sujet: "Demande de devis",
      categorie: "Commercial",
      note: "Client B2B",
    },
    {
      id: 2,
      sujet: "Recrutement",
      categorie: "Administratif",
      note: "Poste RH",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [formData, setFormData] = useState({
    sujet: "",
    categorie: "Commercial",
    note: "",
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
    setFormData({ sujet: "", categorie: "Commercial", note: "" });
  };

  const handleEdit = (ticket) => {
    setEditTicket(ticket);
    setFormData({
      sujet: ticket.sujet,
      categorie: ticket.categorie,
      note: ticket.note,
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
                setFormData({ sujet: "", categorie: "Commercial", note: "" });
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
                    <th>#</th>
                    <th>Sujet</th>
                    <th>Catégorie</th>
                    <th>Note</th>
                    <th>Destination</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={ticket.id}>
                      <td>{index + 1}</td>
                      <td>{ticket.sujet}</td>
                      <td>{ticket.categorie}</td>
                      <td>{ticket.note}</td>
                      <td>
                        {ticket.categorie === "Administratif"
                          ? "Vers Administratif"
                          : "Vers Commercial"}
                      </td>
                      <td className="text-end">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          style={{ borderColor: badgeBlue, color: badgeBlue }}
                          onClick={() => handleEdit(ticket)}
                        >
                          <HiOutlinePencil />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          style={{ borderColor: "#dc3545", color: "#dc3545" }}
                          onClick={() => handleDelete(ticket.id)}
                        >
                          <HiOutlineTrash />
                        </Button>
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
              <Form.Group className="mb-3">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.sujet}
                  onChange={(e) =>
                    setFormData({ ...formData, sujet: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
                <Form.Label>Note</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                  placeholder="Remarques, précisions..."
                />
              </Form.Group>
              <div className="d-flex justify-content-end gap-2">
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
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default TicketDashboard;
