import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Card,
  Badge,
} from "react-bootstrap";
import AppNavbar from "./navbar/AppNavbar";
import { useTheme } from "../../contexts/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchEntreprises } from "../../api/enterpriseApi";
import { createInstance } from "../../api/instanceApi";
import { toast } from "react-toastify";
import { createSubscription } from "../../api/subscriptionApi";
import { faker } from "@faker-js/faker";

const InstanceCreate = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [planChoose, setPlanChoose] = useState(null);
  const [instanceName, setInstanceName] = useState("");
  const [selectedEnterprise, setSelectedEnterprise] = useState(1);
  const [organisations, setOrganisations] = useState([]);
  const [generatedName, setGeneratedName] = useState("");
  const [prefillData, setPrefillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateRandomName = () => {
    return faker.word.adjective() + "-" + faker.word.noun();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (location.state?.prefillData) {
          const { prefillData } = location.state;
          setPrefillData(prefillData);

          // Créer une entreprise fictive avec les données pré-remplies
          const fakeEnterprise = {
            id: 1,
            nom: prefillData.entreprise.nom,
            nif: prefillData.entreprise.nif,
            tel: prefillData.entreprise.tel,
            ville: prefillData.entreprise.ville,
            pays: prefillData.entreprise.pays,
            adresse: prefillData.entreprise.adresse,
            nbEmployes: prefillData.entreprise.nbEmployes,
          };

          setOrganisations([fakeEnterprise]);
          setSelectedEnterprise(1);
          setInstanceName(prefillData.name);
        } else {
          // Logique normale si pas de pré-remplissage
          const data = await fetchEntreprises();
          setOrganisations(data || []);
          if (data && data.length > 0) {
            setSelectedEnterprise(data[0].id);
          }
          setGeneratedName(generateRandomName());
        }
      } catch (err) {
        setError("Erreur lors du chargement des entreprises");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.state]);

  useEffect(() => {
    if (!prefillData && generatedName) {
      setInstanceName(generatedName);
    }
  }, [generatedName, prefillData]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCreateInstance = async () => {
    const nameToUse = instanceName.trim();

    const mapped = {
      name: nameToUse,
      entrepriseId: selectedEnterprise,
      planId: planChoose?.planId || 1,
      source: planChoose?.source || "manual",
      isActive: prefillData?.isActive || true,
    };

    if (planChoose?.subscription === "trial") {
      const trialData = {
        planId: planChoose.planId,
        subPlanId: planChoose.subPlanId,
      };
      await createSubscription(trialData);
    }

    const res = await createInstance(mapped);

    if (res) {
      toast.success("Instance créée avec succès !");
      navigate("/instances");
    } else {
      toast.error("Une erreur est survenue lors de la création.");
    }
  };

  const handlePrevious = () => {
    window.history.back();
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div
      className={`d-flex flex-column min-vh-100 bg-${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <AppNavbar />

      {/* Header avec bouton retour */}
      <div
        className={`py-3 border-bottom ${
          theme === "dark"
            ? "bg-dark border-secondary"
            : "bg-white border-light"
        }`}
      >
        <Container>
          <Button
            variant="link"
            className={`p-0 text-decoration-none d-flex align-items-center ${
              theme === "dark" ? "text-light" : "text-dark"
            }`}
            onClick={handleBackClick}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Retour
          </Button>
        </Container>
      </div>

      <Container className="flex-grow-1 py-4">
        <Row className="justify-content-center">
          <Col xl={8} lg={10}>
            <Card
              className={`shadow-sm ${
                theme === "dark" ? "bg-dark text-light border-secondary" : ""
              }`}
            >
              <Card.Body className="p-4">
                {/* En-tête */}
                <div className="d-flex align-items-start mb-4">
                  <div className="me-3 text-primary">
                    <i className="bi bi-question-circle-fill fs-3"></i>
                  </div>
                  <div>
                    <h1 className="h3 mb-2">Créez votre espace de travail</h1>
                    {prefillData ? (
                      <Badge bg="info" className="mb-2">
                        Pré-rempli à partir d'une instance existante
                      </Badge>
                    ) : null}
                    <p
                      className={`d-flex align-items-center mb-0 ${
                        theme === "dark" ? "text-light" : "text-muted"
                      }`}
                    >
                      <i className="bi bi-info-circle me-2"></i>
                      Choisissez un autre nom d'instance si celui proposé ne
                      convient pas
                    </p>
                  </div>
                </div>

                <hr
                  className={`my-4 ${
                    theme === "dark" ? "border-secondary" : ""
                  }`}
                />

                {/* Champ nom d'instance */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold mb-2">
                    Nom de l'instance
                  </Form.Label>
                  <div className="input-group">
                    <span
                      className={`input-group-text ${
                        theme === "dark"
                          ? "bg-dark text-light border-secondary"
                          : ""
                      }`}
                    >
                      https://
                    </span>
                    <Form.Control
                      type="text"
                      className={`${
                        theme === "dark"
                          ? "bg-dark text-light border-secondary"
                          : ""
                      }`}
                      value={instanceName}
                      onChange={(e) => setInstanceName(e.target.value)}
                    />
                    <span
                      className={`input-group-text ${
                        theme === "dark"
                          ? "bg-dark text-light border-secondary"
                          : ""
                      }`}
                    >
                      .erpinnov.com
                    </span>
                  </div>
                  <Form.Text
                    className={`mt-1 d-block ${
                      theme === "dark" ? "text-light" : "text-muted"
                    }`}
                  >
                    {prefillData
                      ? "Nom généré à partir de l'instance sélectionnée"
                      : "Nom généré automatiquement - vous pouvez le modifier"}
                  </Form.Text>
                </Form.Group>

                {/* Sélection entreprise */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold mb-2">
                    Entreprise associée <span className="text-danger">*</span>
                  </Form.Label>
                  <p
                    className={`mb-3 ${
                      theme === "dark" ? "text-light" : "text-muted"
                    }`}
                  >
                    Cette instance sera liée à l'entreprise sélectionnée.
                  </p>

                  <div className="enterprise-list">
                    {organisations && organisations.length > 0 ? (
                      organisations.map((org) => (
                        <Card
                          key={org.id}
                          className={`mb-3 cursor-pointer ${
                            selectedEnterprise === org.id
                              ? "border-primary"
                              : ""
                          } ${
                            theme === "dark"
                              ? "bg-dark text-light border-secondary"
                              : ""
                          }`}
                          onClick={() => setSelectedEnterprise(org.id)}
                        >
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div
                                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                  style={{ width: "40px", height: "40px" }}
                                >
                                  {org.nom.charAt(0)}
                                </div>
                                <div>
                                  <h6 className="mb-1">{org.nom}</h6>
                                  <p
                                    className={`mb-0 ${
                                      theme === "dark"
                                        ? "text-light"
                                        : "text-muted"
                                    }`}
                                  >
                                    <i className="bi bi-geo-alt me-1"></i>
                                    {org.ville}, {org.pays}
                                  </p>
                                  <small className="text-muted">
                                    <i className="bi bi-people me-1"></i>
                                    {org.nbEmployes}
                                  </small>
                                </div>
                              </div>
                              <Form.Check
                                type="radio"
                                name="enterprise"
                                checked={selectedEnterprise === org.id}
                                onChange={() => setSelectedEnterprise(org.id)}
                              />
                            </div>
                          </Card.Body>
                        </Card>
                      ))
                    ) : (
                      <p>Aucune entreprise disponible.</p>
                    )}
                  </div>

                  <Card
                    className={`mt-3 ${
                      theme === "dark"
                        ? "bg-dark text-light border-secondary"
                        : ""
                    }`}
                  >
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-geo-fill text-primary me-2"></i>
                        <span>
                          {organisations.length > 0 && selectedEnterprise
                            ? organisations.find(
                                (o) => o.id === selectedEnterprise
                              )?.pays || "Madagascar"
                            : "Madagascar"}
                        </span>
                      </div>
                      <Form.Text
                        className={`mt-1 d-block ${
                          theme === "dark" ? "text-light" : "text-muted"
                        }`}
                      >
                        Localisation de l'entreprise
                      </Form.Text>
                    </Card.Body>
                  </Card>
                </Form.Group>

                <hr
                  className={`my-4 ${
                    theme === "dark" ? "border-secondary" : ""
                  }`}
                />

                {/* Boutons d'action */}
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-secondary"
                    className="d-flex align-items-center"
                    onClick={handlePrevious}
                  >
                    <i className="bi bi-chevron-left me-2"></i>
                    Précédent
                  </Button>
                  <Button
                    variant="primary"
                    className="d-flex align-items-center"
                    onClick={handleCreateInstance}
                    disabled={!instanceName.trim()}
                  >
                    {prefillData ? "Créer à partir de l'instance" : "Suivant"}
                    <i className="bi bi-chevron-right ms-2"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstanceCreate;
