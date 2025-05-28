import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./EntrepriseCreate.css";
import {
  Container,
  Button,
  Navbar,
  Nav,
  Card,
  Row,
  Col,
  Form as RBForm,
} from "react-bootstrap";
import AppNavbar from "../navbar/AppNavbar"; // adapte le chemin si besoin
import { useTheme } from "../../../contexts/ThemeContext"; // adapte le chemin si besoin

const EntrepriseCreatePage = () => {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    nom: "",
    nif: "",
    tel: "",
    nbEmployes: "",
    adresse: "",
    ville: "",
    pays: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", form);
    // TODO : appel API ou autre logique
  };

  return (
   <div
  className={`text-light w-100 mx-0 px-0 ${
    theme === "dark" ? "bg-dark" : "bg-light"
  }`}
  style={{ overflowX: "hidden", maxWidth: "1600px", margin: "0 auto" }}
>

      <AppNavbar />

      {/* Sous-navbar « action » */}
      <Navbar
        expand="lg"
        className={theme === "dark" ? "bg-dark" : "bg-light"}
        variant={theme === "dark" ? "dark" : "light"}
      >
      <Container fluid className="p-0">
  <div
    className={`d-flex justify-content-between align-items-center py-2 ${
      theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
    }`}
    style={{
      maxWidth: "1400px", // ← largeur maximale
      margin: "0 auto",    // ← centré dans le container
      width: "100%",       // ← prend toute la largeur dispo
      paddingLeft: "2rem", // ← padding interne
      paddingRight: "2rem"
    }}
  >
    <Nav>
      <Nav.Link
        href="#"
        className={`d-flex align-items-center gap-2 text-start ${
          theme === "dark" ? "text-white" : "text-dark"
        }`}
      >
        <FiArrowLeft size={20} />
        Retour à l’espace client
      </Nav.Link>
    </Nav>
  </div>
</Container>

      </Navbar>

      {/* Contenu principal */}
      <Container className="py-5">
        <Row className="g-4 justify-content-center text-start">
          {/* Colonne gauche */}
          <Col lg={3}>
            <Card
              bg={theme === "dark" ? "dark" : "light"}
              text={theme === "dark" ? "white" : "dark"}
              className="text-start w-100 p-0 m-0"
            >
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Mes organisations</span>
                <span className="badge bg-danger">0</span>
              </Card.Header>
              <Card.Body className="text-muted text-start">
                Aucune organisation ajoutée
              </Card.Body>
            </Card>
          </Col>

          {/* Colonne droite : formulaire */}
          <Col lg={8}>
            <Card
              bg={theme === "dark" ? "dark" : "light"}
              text={theme === "dark" ? "white" : "dark"}
              className="shadow-sm text-start w-100 p-0 m-0"
            >
              <Card.Header className="bg-primary text-white w-100 p-0 m-0">
                <div className="w-100 p-3">
                  <h5 className="mb-1">Nouvelle organisation</h5>
                  <small>Configurez votre première organisation.</small>
                </div>
              </Card.Header>

              <Card.Body className="text-start">
                <RBForm id="org-create-form" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col md={12}>
                      <RBForm.Label>Nom de l’organisation</RBForm.Label>
                      <RBForm.Control
                        className="text-start"
                        type="text"
                        placeholder="Ex : Space X"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <RBForm.Label>NIF ou SIREN</RBForm.Label>
                      <RBForm.Control
                        className="text-start"
                        type="text"
                        placeholder="Numéro fiscal"
                        name="nif"
                        value={form.nif}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <RBForm.Label>Téléphone</RBForm.Label>
                      <RBForm.Control
                        className="text-start"
                        type="tel"
                        placeholder="+261 xx xx xxx xx"
                        name="tel"
                        value={form.tel}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col>
                      <RBForm.Label>Nombre d’employés</RBForm.Label>
                      <RBForm.Select
                        className="text-start"
                        name="nbEmployes"
                        value={form.nbEmployes}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionnez</option>
                        <option value="1-10">1 – 10</option>
                        <option value="11-50">11 – 50</option>
                        <option value="51-200">51 – 200</option>
                        <option value="200+">Plus de 200</option>
                      </RBForm.Select>
                    </Col>
                  </Row>

                  <RBForm.Group className="mb-3">
                    <RBForm.Label>Adresse complète</RBForm.Label>
                    <RBForm.Control
                      as="textarea"
                      rows={2}
                      placeholder="Adresse de l’entreprise"
                      name="adresse"
                      value={form.adresse}
                      onChange={handleChange}
                    />
                  </RBForm.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <RBForm.Label>Ville</RBForm.Label>
                      <RBForm.Control
                        className="text-start"
                        type="text"
                        placeholder="Ex : Antananarivo"
                        name="ville"
                        value={form.ville}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col md={6}>
                      <RBForm.Label>Pays</RBForm.Label>
                      <RBForm.Select
                        className="text-start"
                        name="pays"
                        value={form.pays}
                        onChange={handleChange}
                      >
                        <option value="">-- Choisir pays --</option>
                        <option value="MG">Madagascar</option>
                        <option value="FR">France</option>
                        <option value="US">États-Unis</option>
                      </RBForm.Select>
                    </Col>
                  </Row>
                </RBForm>
              </Card.Body>
            </Card>

            {/* Bouton de soumission */}
            <div className="mt-3 d-flex justify-content-start">
              <Button
                type="submit"
                form="org-create-form"
                className="btn btn-primary"
              >
                Ajouter l'organisation <span className="fs-5">+</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer
        className={`w-100 py-3 mt-auto ${
          theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        } text-start`}
      >
        <Container className="d-flex justify-content-between text-start">
          <div className="d-flex gap-3">
            <a href="#" className="text-decoration-none text-reset">
              Support
            </a>
            <a href="#" className="text-decoration-none text-reset">
              Contact
            </a>
          </div>
          <div>&copy; 2025 ERP INNOV</div>
        </Container>
      </footer>
    </div>
  );
};

export default EntrepriseCreatePage;
