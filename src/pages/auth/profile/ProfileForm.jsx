import { useState, useEffect } from "react";
import { Form, Button, Col, Row, Alert, Container } from "react-bootstrap";
import AppNavbar from "../../../components/common/navbar/AppNavbar";
import { useTheme } from "../../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import { fetchProfile, updateProfile } from "../../../api/profileApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileForm({ initialData = {}, onSubmit }) {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const [formData, setFormData] = useState({
    civilite: initialData?.civilite ?? "mr",
    fname: initialData?.fname ?? "",
    lname: initialData?.lname ?? "",
    telephone: initialData?.telephone ?? "",
    email: initialData?.email ?? "", 
    adresse: initialData?.adresse ?? "",
    zipcode: initialData?.zipcode ?? "",
    ville: initialData?.ville ?? "",
    pays: initialData?.pays ?? "",
    bio: initialData?.bio ?? "",
    is_public: initialData?.is_public ?? false,
  });

  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const profile = await fetchProfile();
        if (profile) setFormData(profile);
        else console.warn("Profil introuvable.");
      } catch (err) {
        console.error("Erreur lors de la récupération du profil :", err);
      }
    };

    fetchUser();
  }, [navigate]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateProfile(formData);
      if (result) {
        toast.success("✅ Modifications enregistrées !");
        if (onSubmit) onSubmit(formData);
        setStatus("✅ Modifications enregistrées !");
        navigate("/dashboard");
      } else {
        toast.warning("⚠️ Échec de la mise à jour du profil.");
      }
    } catch (error) {
      toast.error("❌ Erreur lors de l'enregistrement : " + error);
    }
  };

  const inputClass = darkMode
    ? "bg-dark text-white text-start"
    : "bg-light text-dark text-start";

  return (
    <div className={`vw-100 min-vh-100 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <AppNavbar />
      <div className="container d-flex align-items-start justify-content-center pt-5">
        <Container
          className="py-5"
          style={{ width: "100%", maxWidth: "700px", borderRadius: "12px" }}
        >
          <p className="text-start fs-3 fw-semibold">Profil</p>
          <p className="text-start fs-5 mb-4">
            Mettre à jour vos informations personnelles
          </p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3 text-start">
              <Form.Group as={Col} md={2} controlId="civilite">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Civilité
                </Form.Label>
                <Form.Select
                  name="civilite"
                  value={formData.civilite}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="mr">Mr.</option>
                  <option value="mme">Mme</option>
                  <option value="mlle">Mlle</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md={5} controlId="fname">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Prénom
                </Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Form.Group>

              <Form.Group as={Col} md={5} controlId="lname">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Nom
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 text-start">
              {/* Colonne Email */}
              <Form.Group as={Col} md={6} controlId="email">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex: exemple@domaine.com"
                  className={inputClass}
                />
              </Form.Group>

              {/* Colonne Téléphone */}
              <Form.Group as={Col} md={6} controlId="telephone">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Téléphone
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Ex: 034 12 34 567"
                  className={inputClass}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 text-start w-100" controlId="adresse">
              <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                Adresse
              </Form.Label>
              <Form.Control
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className={inputClass}
              />
            </Form.Group>

            <Row className="mb-3 text-start">
              <Form.Group as={Col} md={4} controlId="zipcode">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Code postal
                </Form.Label>
                <Form.Control
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Form.Group>

              <Form.Group as={Col} md={4} controlId="ville">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Ville
                </Form.Label>
                <Form.Control
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Form.Group>

              <Form.Group as={Col} md={4} controlId="pays">
                <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                  Pays
                </Form.Label>
                <Form.Control
                  type="text"
                  name="pays"
                  value={formData.pays}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 text-start" controlId="bio">
              <Form.Label className={darkMode ? "text-white" : "text-dark"}>
                À propos de moi
              </Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={formData.bio}
                rows={4}
                onChange={handleChange}
                className={inputClass}
              />
            </Form.Group>

            {/* <Form.Check
              type="checkbox"
              id="is_public"
              label="Profil public – rendre votre profil visible aux autres utilisateurs"
              name="is_public"
              checked={formData.is_public}
              onChange={handleChange}
              className="text-start w-100 mb-4"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            /> */}

            <div className="text-end mt-4">
              <Button type="submit" variant="primary">
                Enregistrer les modifications
              </Button>
            </div>

            {status && (
              <Alert className="mt-4" variant="success">
                {status}
              </Alert>
            )}
          </Form>
        </Container>
      </div>
    </div>
  );
}
