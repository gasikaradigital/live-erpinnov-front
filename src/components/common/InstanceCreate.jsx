import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import AppNavbar from "./navbar/AppNavbar";
import { useTheme } from "../../contexts/ThemeContext";
import { useNavigate } from "react-router";
import "./InstanceCreate.css";
import { fetchEntreprises } from "../../api/enterpriseApi";
import { createInstance } from "../../api/instanceApi";
import { toast } from "react-toastify";
import { createSubscription } from "../../api/subscriptionApi";
import { faker } from "@faker-js/faker";

const InstanceCreate = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [planChoose, setPlanChoose] = useState(null);
  const [instanceName, setInstanceName] = useState("");
  const [selectedEnterprise, setSelectedEnterprise] = useState(1);
  const [organisations, setOrganisations] = useState([]);
  const [generatedName, setGeneratedName] = useState("");

  const generateRandomName = () => {
    return faker.word.adjective() + "-" + faker.word.noun();
  };

  useEffect(() => {
    if (organisations.length > 0) {
      const selectedOrg = organisations.find(
        (org) => org.id === Number(selectedEnterprise)
      );
      if (selectedOrg) {
        const orgName = selectedOrg.nom.trim();
        let nameBasedOnOrg = orgName.toLowerCase().replace(/\s+/g, "-");
        const randomSuffix = Math.floor(Math.random() * 1000);
        setGeneratedName(`${nameBasedOnOrg}-${randomSuffix}`);
      } else {
        setGeneratedName(generateRandomName());
      }
    } else {
      setGeneratedName(generateRandomName());
    }
  }, [selectedEnterprise, organisations]);

  useEffect(() => {
    if (generatedName) {
      setInstanceName(generatedName);
    }
  }, [generatedName]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCreateInstance = async () => {
    const nameToUse = instanceName.trim();

    const mapped = {
      name: nameToUse,
      entrepriseId: selectedEnterprise,
      planId: planChoose.planId,
      source: planChoose.source,
    };

    if (planChoose.subscription == "trial") {
      const trialData = {
        planId: planChoose.planId,
        subPlanId: planChoose.subPlanId,
      };
      const resTrial = await createSubscription(trialData);
    }

    const res = await createInstance(mapped);

    if (res) {
      toast.success("Instance créée avec succès !");
      navigate("/instances"); // Redirection après succès
    } else {
      toast.error("Une erreur est survenue lors de la création.");
    }
  };

  const handlePrevious = () => {
    window.history.back();
  };

  return (
    <div className={`instance-create-page ${theme}`}>
      <AppNavbar />

      {/* Header avec bouton retour */}
      <div className={`instance-back-nav ${theme}`}>
        <Container>
          <Button
            variant="link"
            className={`btn btn-link text-decoration-none p-0 back-button`}
            onClick={handleBackClick}
          >
            <svg
              width="16"
              height="16"
              className="me-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Retour
          </Button>
        </Container>
      </div>

      <Container className="main-container py-4">
        <Row className="justify-content-center">
          <Col xl={8} lg={10} md={12}>
            <div className={`info-card ${theme} p-3 p-md-4`}>
              {/* En-tête */}
              <div className="d-flex align-items-start mb-4">
                <div className="me-3">
                  <svg
                    width="32"
                    height="32"
                    fill="#0066FF"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </div>
                <div>
                  <h1 className={`header-title ${theme} mb-2`}>
                    Créez votre espace de travail
                  </h1>
                  <p
                    className={`header-subtitle ${theme} mb-0 d-flex align-items-center`}
                  >
                    <svg
                      width="16"
                      height="16"
                      className="me-2"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                    Choisissez un autre nom d'instance si celui proposé ne
                    convient pas
                  </p>
                </div>
              </div>

              <div className={`divider ${theme} my-4`}></div>

              {/* Champ nom d'instance */}
              <Form.Group className="mb-4">
                <Form.Label className={`${theme} mb-2`}>
                  Nom de l'instance
                </Form.Label>
                <div className="input-group">
                  <span className={`input-group-text ${theme}`}>https://</span>
                  <Form.Control
                    type="text"
                    className={`form-control ${theme}`}
                    value={instanceName}
                    onChange={(e) => setInstanceName(e.target.value)}
                  />
                  <span className={`input-group-text ${theme}`}>
                    .erpinnov.com
                  </span>
                </div>
                <Form.Text className={`helper-text ${theme} mt-1 d-block`}>
                  Nom généré automatiquement - vous pouvez le modifier
                </Form.Text>
              </Form.Group>

              {/* Sélection entreprise */}
              <Form.Group className="mb-4">
                <Form.Label className={`${theme} mb-2`}>
                  Entreprise associée <span className="text-danger">*</span>
                </Form.Label>
                <p className={`section-desc ${theme} mb-3`}>
                  Cette instance sera liée à l'entreprise sélectionnée.
                </p>

                <div className="enterprise-list">
                  {organisations.map((org) => (
                    <div
                      key={org.id}
                      className={`enterprise-card ${theme} mb-3 p-3 ${
                        selectedEnterprise === org.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedEnterprise(org.id)}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className={`enterprise-avatar ${theme} me-3`}>
                            {org.nom.charAt(0)}
                          </div>
                          <div>
                            <h6 className={`enterprise-name ${theme} mb-1`}>
                              {org.nom}
                            </h6>
                            <p className={`enterprise-location ${theme} mb-0`}>
                              {org.ville}, {org.pays}
                            </p>
                          </div>
                        </div>
                        <Form.Check
                          type="radio"
                          name="enterprise"
                          checked={selectedEnterprise === org.id}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`location-info ${theme} mt-3 p-3`}>
                  <div className="d-flex align-items-center">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="me-2"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span>Madagascar</span>
                  </div>
                  <Form.Text className={`location-desc ${theme} mt-1 d-block`}>
                    Localisation de l'entreprise
                  </Form.Text>
                </div>
              </Form.Group>

              <div className={`divider ${theme} my-4`}></div>

              {/* Boutons d'action */}
              <div className="d-flex justify-content-between">
                <Button
                  variant="outline-secondary"
                  className={`previous-btn ${theme} me-2`}
                  onClick={handlePrevious}
                >
                  <svg
                    width="16"
                    height="16"
                    className="me-2"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11 1.5a.5.5 0 0 1 0 .707L5.707 7.5H15.5a.5.5 0 0 1 0 1H5.707l5.293 5.293a.5.5 0 0 1-.707.707l-6-6a.5.5 0 0 1 0-.707l6-6a.5.5 0 0 1 .707 0z"
                    />
                  </svg>
                  Précédent
                </Button>
                <Button
                  variant="primary"
                  className="create-btn"
                  onClick={handleCreateInstance}
                  disabled={!instanceName.trim()}
                >
                  Suivant
                  <svg
                    width="16"
                    height="16"
                    className="ms-2"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstanceCreate;
