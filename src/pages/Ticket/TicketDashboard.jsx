import { useState } from 'react';
import {
  Card, Badge, Button, Modal, Form, Table, Container, Row, Col
} from 'react-bootstrap';
import { useTheme } from '../../contexts/ThemeContext';
import AppNavbar from '../../components/common/navbar/AppNavbar';
import {
  HiTicket, HiPlus, HiOutlinePencil, HiOutlineTrash
} from 'react-icons/hi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketDashboard = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  const [tickets, setTickets] = useState([
    { id: 1, sujet: 'Problème connexion', statut: 'en cours' },
    { id: 2, sujet: 'Erreur de paiement', statut: 'résolu' },
    { id: 3, sujet: 'Bug interface', statut: 'en cours' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [formData, setFormData] = useState({ sujet: '', statut: 'en cours' });

  const ticketsEnCours = tickets.filter(t => t.statut === 'en cours').length;
  const ticketsResolus = tickets.filter(t => t.statut === 'résolu').length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.sujet.trim() === '') return toast.error("Le sujet est requis");

    if (editTicket) {
      setTickets(tickets.map(t => t.id === editTicket.id ? { ...t, ...formData } : t));
      toast.success('Ticket modifié');
    } else {
      setTickets([...tickets, { id: Date.now(), ...formData }]);
      toast.success('Ticket ajouté');
    }

    setShowModal(false);
    setEditTicket(null);
    setFormData({ sujet: '', statut: 'en cours' });
  };

  const handleEdit = (ticket) => {
    setEditTicket(ticket);
    setFormData({ sujet: ticket.sujet, statut: ticket.statut });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Confirmer la suppression du ticket ?")) {
      setTickets(tickets.filter(t => t.id !== id));
      toast.success("Ticket supprimé");
    }
  };

  // Couleurs personnalisées

  const bgColor = darkMode ? '#222' : '#fff';         // gris foncé ou blanc
  const textColor = darkMode ? '#eee' : '#222';       // clair ou sombre
  const cardBg = darkMode ? '#222' : '#f8f9fa';    // gris moyen ou gris clair
  const badgeBlue = '#0d6efd';                         // bleu vif
  const badgeGray = darkMode ? '#6c757d' : '#adb5bd'; // gris pour badge inactive

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
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


          {/* En-tête avec bouton */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center pt-4 gap-3 mb-4">
            <h2 className="d-flex align-items-center" style={{ color: badgeBlue }}>
              <HiTicket className="me-2" size={30} />
              Tableau des tickets
            </h2>
            <Button
              style={{ backgroundColor: badgeBlue, borderColor: badgeBlue }}
              onClick={() => {
                setEditTicket(null);
                setFormData({ sujet: '', statut: 'en cours' });
                setShowModal(true);
              }}
            >
              <HiPlus className="me-1" /> Nouveau ticket
            </Button>
          </div>

          {/* Statistiques */}
          <Row className="g-3 mb-4">
            <Col md={6}>
              <Card style={{ backgroundColor: cardBg, color: textColor }} className="shadow-sm h-100">
                <Card.Body>
                  <h6 style={{ color: badgeGray }}>Tickets en cours</h6>
                  <h3>{ticketsEnCours}</h3>
                  <Badge style={{ backgroundColor: badgeBlue, color: '#fff' }}>À traiter</Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ backgroundColor: cardBg, color: textColor }} className="shadow-sm h-100">
                <Card.Body>
                  <h6 style={{ color: badgeGray }}>Tickets résolus</h6>
                  <h3>{ticketsResolus}</h3>
                  <Badge style={{ backgroundColor: badgeBlue, color: '#fff' }}>Résolus</Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         <Card
  style={{
    backgroundColor: darkMode ? '#3a3f47' : '#e9ecef',
    color: textColor,
    width: '100%',          // Prend toute la largeur possible
    maxWidth: '900px',      // Ou une largeur max plus large que précédemment
  }}
  className="shadow-sm mx-auto"  // Centré horizontalement
>
  <Card.Body className="p-0">
    <Table
      striped
      bordered
      hover
      responsive
      variant={darkMode ? 'dark' : 'light'}
      className="mb-0"
    >
      <thead style={{ backgroundColor: badgeBlue, color: '#fff' }}>
        <tr>
          <th>#</th>
          <th>Sujet</th>
          <th>Statut</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, index) => (
          <tr key={ticket.id}>
            <td>{index + 1}</td>
            <td>{ticket.sujet}</td>
            <td>
              <Badge
                style={{
                  backgroundColor: ticket.statut === 'en cours' ? badgeBlue : badgeGray,
                  color: '#fff',
                }}
              >
                {ticket.statut}
              </Badge>
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
                style={{ borderColor: '#dc3545', color: '#dc3545' }}
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

        {/* Modal CRUD */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header style={{ backgroundColor: cardBg, color: textColor }} closeButton>
            <Modal.Title>{editTicket ? 'Modifier Ticket' : 'Ajouter Ticket'}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: bgColor, color: textColor }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.sujet}
                  onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                  style={{ backgroundColor: darkMode ? '#444' : '#fff', color: textColor }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Statut</Form.Label>
                <Form.Select
                  value={formData.statut}
                  onChange={(e) => setFormData({ ...formData, statut: e.target.value })}
                  style={{ backgroundColor: darkMode ? '#444' : '#fff', color: textColor }}
                >
                  <option value="en cours">En cours</option>
                  <option value="résolu">Résolu</option>
                </Form.Select>
              </Form.Group>
              <div className="d-flex justify-content-end gap-2">
                <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                  Annuler
                </Button>
                <Button type="submit" style={{ backgroundColor: badgeBlue, borderColor: badgeBlue }}>
                  {editTicket ? 'Mettre à jour' : 'Ajouter'}
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
