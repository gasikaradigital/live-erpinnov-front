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
import { HiTicket, HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketDashboard = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const today = new Date().toISOString().slice(0, 16);

  const [tickets, setTickets] = useState([
    {
      id: 1,
      reference: "EB54321",
      createdAt: "2025-06-03T10:30",
      contact: "Client B2B",
      sujet: "Demande de devis",
      categorie: "Commercial",
      priorite: "Haute",
      canal: "Email",
      assigneA: "Jean Dupont",
      derniereActivite: "2025-06-04T09:00",
      status: "finnish",
      slaRestant: "0j 0h",
    },
    {
      id: 2,
      reference: "EB12345",
      createdAt: "2025-06-03T11:00",
      contact: "Poste RH",
      sujet: "Recrutement",
      categorie: "Administratif",
      priorite: "Moyenne",
      canal: "Téléphone",
      assigneA: "Sophie Martin",
      derniereActivite: "2025-06-05T14:30",
      status: "in progress",
      slaRestant: "1j 3h",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [formData, setFormData] = useState({
    reference: "",
    createdAt: today,
    contact: "",
    sujet: "",
    categorie: "Commercial",
    priorite: "Moyenne",
    canal: "Email",
    assigneA: "",
    derniereActivite: today,
    status: "in progress",
    slaRestant: "2j 0h",
  });

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
    setFormData({
      reference: "",
      createdAt: today,
      contact: "",
      sujet: "",
      categorie: "Commercial",
      priorite: "Moyenne",
      canal: "Email",
      assigneA: "",
      derniereActivite: today,
      status: "in progress",
      slaRestant: "2j 0h",
    });
  };

  const handleEdit = (ticket) => {
    setEditTicket(ticket);
    setFormData({ ...ticket });
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
              TICKET 
            </h2>
            <Button
              style={{ backgroundColor: badgeBlue, borderColor: badgeBlue }}
              onClick={() => {
                setEditTicket(null);
                setFormData({
                  reference: "",
                  createdAt: today,
                  contact: "",
                  sujet: "",
                  categorie: "Commercial",
                  priorite: "Moyenne",
                  canal: "Email",
                  assigneA: "",
                  derniereActivite: today,
                  status: "in progress",
                  slaRestant: "2j 0h",
                });
                setShowModal(true);
              }}
            >
              <HiPlus className="me-1" /> Nouveau ticket
            </Button>
          </div>

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
                    <th>Réf</th>
                    <th>Date/heure</th>
                    <th>Contact</th>
                    <th>Sujet</th>
                    <th>Catégorie</th>
                    <th>Priorité</th>
                    <th>Canal</th>
                    <th>Assigné à</th>
                    <th>Dernière activité</th>
                    <th>Statut</th>
                    <th>SLA restant</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.reference}</td>
                      <td>{ticket.createdAt}</td>
                      <td>{ticket.contact}</td>
                      <td>{ticket.sujet}</td>
                      <td>{ticket.categorie}</td>
                      <td>{ticket.priorite}</td>
                      <td>{ticket.canal}</td>
                      <td>{ticket.assigneA}</td>
                      <td>{ticket.derniereActivite}</td>
                      <td>
                        {ticket.status === "finnish" ? (
                          <Badge bg="success">terminé</Badge>
                        ) : (
                          <Badge bg="warning" text="dark">en cours</Badge>
                        )}
                      </td>
                      <td>{ticket.slaRestant}</td>
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
                    <Form.Label>Date/heure</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={formData.createdAt}
                      onChange={(e) =>
                        setFormData({ ...formData, createdAt: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Réf</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.reference}
                      onChange={(e) =>
                        setFormData({ ...formData, reference: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
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
                      <option>Commercial</option>
                      <option>Administratif</option>
                      <option>Technique</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Priorité</Form.Label>
                    <Form.Select
                      value={formData.priorite}
                      onChange={(e) =>
                        setFormData({ ...formData, priorite: e.target.value })
                      }
                    >
                      <option>Moyenne</option>
                      <option>Haute</option>
                      <option>Basse</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Canal</Form.Label>
                    <Form.Select
                      value={formData.canal}
                      onChange={(e) =>
                        setFormData({ ...formData, canal: e.target.value })
                      }
                    >
                      <option>Email</option>
                      <option>Téléphone</option>
                      <option>Chat</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Assigné à</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.assigneA}
                      onChange={(e) =>
                        setFormData({ ...formData, assigneA: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Dernière activité</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={formData.derniereActivite}
                      onChange={(e) =>
                        setFormData({ ...formData, derniereActivite: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Statut</Form.Label>
                    <Form.Select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                    >
                      <option value="in progress">en cours</option>
                      <option value="finnish">terminé</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>SLA restant</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.slaRestant}
                      onChange={(e) =>
                        setFormData({ ...formData, slaRestant: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-end mt-4">
                <Button
                  variant="secondary"
                  className="me-2"
                  onClick={() => setShowModal(false)}
                >
                  Annuler
                </Button>
                <Button type="submit" style={{ backgroundColor: badgeBlue, borderColor: badgeBlue }}>
                  {editTicket ? "Modifier" : "Ajouter"}
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
