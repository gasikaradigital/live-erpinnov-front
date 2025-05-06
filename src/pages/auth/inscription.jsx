import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logique de validation ou d'envoi à un backend
    if (formData.motDePasse !== formData.confirmation) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    console.log("Formulaire envoyé :", formData);
    alert("Inscription réussie !");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow">
        <h3 className="text-center mb-4">Créer un compte</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNom">
            <Form.Label>Nom complet</Form.Label>
            <Form.Control
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemple@mail.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              placeholder="Mot de passe sécurisé"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label>Confirmation du mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="confirmation"
              value={formData.confirmation}
              onChange={handleChange}
              placeholder="Répétez le mot de passe"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            S'inscrire
          </Button>

          <div className="text-center mt-3">
            <small>Déjà un compte ? <Link to="/login">Se connecter</Link></small>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Inscription;
