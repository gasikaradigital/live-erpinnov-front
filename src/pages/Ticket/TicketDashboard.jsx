import { useState } from 'react';
import {
  Card, Badge, Button, Modal, Form, Table, Container, Row, Col
} from 'react-bootstrap';
import { useDarkMode } from '../../contexts/DarkModeContext';
import NavBarProfile from '../../components/common/navbar/navBarProfile';
import {
  HiTicket, HiPlus, HiOutlinePencil, HiOutlineTrash
} from 'react-icons/hi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketDashboard = () => {
  const { darkMode } = useDarkMode();

  const [tickets, setTickets] = useState([
    { id: 1, sujet: 'Problème connexion', statut: 'en cours' },
    { id: 2, sujet: 'Erreur de paiement', statut: 'résolu' },
    { id: 3, sujet: 'Bug interface', statut: 'en cours' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [formData, setFormData] = useState({ sujet: '', statut: 'en cours' });

  const ticketsEnCours = tickets.filter(ticket => ticket.statut === 'en cours').length;
  const ticketsResolus = tickets.filter(ticket => ticket.statut === 'résolu').length;

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

  return (
    <div className={`min-vh-100 vw-100 d-flex flex-column ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <NavBarProfile
        user={{
          initials: `${formData?.fname?.[0] ?? ""}${formData?.lname?.[0] ?? ""
            }`.toUpperCase(),
        }}
      />
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
    <Container
          className="py-5 mt-4"
          style={{ width: "100%", maxWidth: "700px", borderRadius: "12px" }}
        >
        {/* En-tête avec bouton */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <h2 className="d-flex align-items-center">
            <HiTicket className="text-primary me-2" size={30} />
            Tableau des tickets
          </h2>
          <Button variant="primary" onClick={() => {
            setEditTicket(null);
            setFormData({ sujet: '', statut: 'en cours' });
            setShowModal(true);
          }}>
            <HiPlus className="me-1" /> Nouveau ticket
          </Button>
        </div>

        {/* Statistiques */}
        <Row className="g-3 mb-4">
          <Col md={6}>
            <Card className={`shadow-sm h-100 ${darkMode ? 'bg-dark text-white' : ''}`}>
              <Card.Body>
                <h6 className="text-muted">Tickets en cours</h6>
                <h3>{ticketsEnCours}</h3>
                <Badge bg="warning">À traiter</Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className={`shadow-sm h-100 ${darkMode ? 'bg-dark text-white' : ''}`}>
              <Card.Body>
                <h6 className="text-muted">Tickets résolus</h6>
                <h3>{ticketsResolus}</h3>
                <Badge bg="success">Résolus</Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Liste des tickets */}
        <Card className={`shadow-sm ${darkMode ? 'bg-secondary text-white' : ''}`}>
          <Card.Body className="p-0">
            <Table
              striped
              bordered
              hover
              responsive
              variant={darkMode ? 'dark' : 'light'}
              className="mb-0"
            >
              <thead>
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
                      <Badge bg={ticket.statut === 'en cours' ? 'warning' : 'success'}>
                        {ticket.statut}
                      </Badge>
                    </td>
                    <td className="text-end">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(ticket)}
                      >
                        <HiOutlinePencil />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
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
        <Modal.Header closeButton className={darkMode ? 'bg-dark text-white' : ''}>
          <Modal.Title>{editTicket ? 'Modifier Ticket' : 'Ajouter Ticket'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={darkMode ? 'bg-dark text-white' : ''}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                value={formData.sujet}
                onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                className={darkMode ? 'bg-secondary text-white' : ''}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Statut</Form.Label>
              <Form.Select
                value={formData.statut}
                onChange={(e) => setFormData({ ...formData, statut: e.target.value })}
                className={darkMode ? 'bg-secondary text-white' : ''}
              >
                <option value="en cours">En cours</option>
                <option value="résolu">Résolu</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end gap-2">
              <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                Annuler
              </Button>
              <Button type="submit" variant="primary">
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