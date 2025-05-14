import { useState, useEffect } from "react";
import { Form, Button, Col, Row, Alert, Card, Container } from "react-bootstrap";
import NavBarProfile from "../../../components/common/navBarProfile";
import { useDarkMode } from "../../../contexts/useDarkMode"; // Contexte partagé'
import NavigationBar from "../../../components/common/navbar/navbarlogin";

export default function ProfileForm({ initialData = {}, onSubmit }) {
  const { darkMode } = useDarkMode(); // toggleDarkMode est géré depuis NavBarProfile

  const [formData, setFormData] = useState({
    civilite: initialData.civilite || "mr",
    fname: initialData.fname || "",
    lname: initialData.lname || "",
    telephone: initialData.telephone || "",
    adresse: initialData.adresse || "",
    zipcode: initialData.zipcode || "",
    ville: initialData.ville || "",
    pays: initialData.pays || "",
    bio: initialData.bio || "",
    is_public: initialData.is_public || false,
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    let val = type === "checkbox" ? checked : value;

    if (name === "telephone") {
      val = value.replace(/\D/g, "").slice(0, 14);
      if (val.length >= 2) val = val.match(/.{1,2}/g).join(" ");
    }

    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    setStatus("✅ Modifications enregistrées !");
  };

  return (
    <div className={`vw-100 min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <NavBarProfile user={{ initials: `${formData.fname[0] || ''}${formData.lname[0] || ''}`.toUpperCase() }} />
      <Container className="py-5 bg-light">
        <h2 className="mb-3">Profil</h2>
        <p className="text-muted">Mettre à jour vos informations personnelles</p>

        <Form onSubmit={handleSubmit}>
          <ProfileSection title="Informations personnelles" darkMode={darkMode}>
            <Row className="mb-3">
              <Form.Group as={Col} md={2} controlId="civilite">
                <Form.Label>Civilité</Form.Label>
                <Form.Select name="civilite" value={formData.civilite} onChange={handleChange}>
                  <option value="mr">Mr.</option>
                  <option value="mme">Mme</option>
                  <option value="mlle">Mlle</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md={5} controlId="fname">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" name="fname" value={formData.fname} onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} md={5} controlId="lname">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="lname" value={formData.lname} onChange={handleChange} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="telephone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Ex: 034 12 34 567"
              />
            </Form.Group>
          </ProfileSection>

          <ProfileSection title="Adresse" darkMode={darkMode}>
            <Form.Group className="mb-3" controlId="adresse">
              <Form.Label>Adresse complète</Form.Label>
              <Form.Control type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} md={4} controlId="zipcode">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} md={4} controlId="ville">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" name="ville" value={formData.ville} onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} md={4} controlId="pays">
                <Form.Label>Pays</Form.Label>
                <Form.Control type="text" name="pays" value={formData.pays} onChange={handleChange} />
              </Form.Group>
            </Row>
          </ProfileSection>

          <ProfileSection title="Description" darkMode={darkMode}>
            <Form.Group className="mb-3" controlId="bio">
              <Form.Label>À propos de moi</Form.Label>
              <Form.Control as="textarea" name="bio" value={formData.bio} rows={4} onChange={handleChange} />
            </Form.Group>

            <Form.Check
              type="checkbox"
              id="is_public"
              label="Profil public – rendre votre profil visible aux autres utilisateurs"
              name="is_public"
              checked={formData.is_public}
              onChange={handleChange}
            />
          </ProfileSection>

          <div className="text-end mt-4">
            <Button type="submit" variant="primary">
              Enregistrer les modifications
            </Button>
          </div>

          {status && <Alert className="mt-4" variant="success">{status}</Alert>}
        </Form>
      </Container>
    </div>
  );
}

const ProfileSection = ({ title, children, darkMode }) => (
  <Card className="mb-4 shadow" bg={darkMode ? "dark" : "light"} text={darkMode ? "white" : "dark"}>
    <Card.Header className="fw-bold">{title}</Card.Header>
    <Card.Body>{children}</Card.Body>
  </Card>
);
