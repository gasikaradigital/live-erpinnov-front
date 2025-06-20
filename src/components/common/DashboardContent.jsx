import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import InstancesCard from "./InstancesCard";
import SolutionsTeaser from "./SolutionsTeaser";
import PlanCard from "./PlanCard";
import { fetchPlas } from "../../api/planApi";

const faker = [
//   {
//     "id": 1,
//     "label": "Solo",
//     "description": "Idéal pour les indépendants et micro-entrepreneurs.",
//     "features": [
//       "2 Go de stockage",
//       "1000 appels API"
//     ],
//     "price_min": "25000.00",
//     "sub_plans": [
//       {
//         "id": 1,
//         "label": "Basic",
//         "features": [
//           "Gestion des tiers",
//           "Produits",
//           "Stocks",
//           "Devis",
//           "Facturation",
//           "Comptabilité simple"
//         ],
//         "price_monthly": "5.00",
//         "price_yearly": "60.00",
//         "price_monthly_formated": "25000.00"
//       },
//       {
//         "id": 2,
//         "label": "Standard",
//         "features": [
//           "Modules Basic",
//           "Rapports et statistiques",
//           "CRM",
//           "Email intégré"
//         ],
//         "price_monthly": "8.00",
//         "price_yearly": "96.00",
//         "price_monthly_formated": "40000.00"
//       },
//       {
//         "id": 3,
//         "label": "Premium",
//         "features": [
//           "Modules Standard",
//           "Comptabilité analytique",
//           "Suivi de temps",
//           "KPI automatisés",
//           "Multi-devises"
//         ],
//         "price_monthly": "12.00",
//         "price_yearly": "144.00",
//         "price_monthly_formated": "60000.00"
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "label": "TPE",
//     "description": "Idéal pour les petites entreprises.",
//     "features": [
//       "4 Go de stockage",
//       "2000 appels API"
//     ],
//     "price_min": "72500.00",
//     "sub_plans": [
//       {
//         "id": 4,
//         "label": "Basic",
//         "features": [
//           "Modules Basic"
//         ],
//         "price_monthly": "14.50",
//         "price_yearly": "174.00",
//         "price_monthly_formated": "72500.00"
//       },
//       {
//         "id": 5,
//         "label": "Standard",
//         "features": [
//           "Modules Basic",
//           "Modules Standard"
//         ],
//         "price_monthly": "18.00",
//         "price_yearly": "216.00",
//         "price_monthly_formated": "90000.00"
//       },
//       {
//         "id": 6,
//         "label": "Premium",
//         "features": [
//           "Modules Basic",
//           "Modules Standard",
//           "Modules Premium"
//         ],
//         "price_monthly": "22.00",
//         "price_yearly": "264.00",
//         "price_monthly_formated": "110000.00"
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "label": "Association",
//     "description": "Conçu pour la gestion des associations.",
//     "features": [
//       "4 Go de stockage",
//       "2000 appels API"
//     ],
//     "price_min": "95000.00",
//     "sub_plans": [
//       {
//         "id": 7,
//         "label": "Basic",
//         "features": [
//           "Gestion des adhésions"
//         ],
//         "price_monthly": "19.00",
//         "price_yearly": "228.00",
//         "price_monthly_formated": "95000.00"
//       },
//       {
//         "id": 8,
//         "label": "PME Standard",
//         "features": [
//           "Paiement, suivi, relance des cotisations"
//         ],
//         "price_monthly": "25.00",
//         "price_yearly": "300.00",
//         "price_monthly_formated": "125000.00"
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "label": "Entreprise",
//     "description": "Offre complète pour les grandes entreprises.",
//     "features": [
//       "100 Go de stockage",
//       "10 000 appels API"
//     ],
//     "price_min": "195000.00",
//     "sub_plans": [
//       {
//         "id": 9,
//         "label": "RH",
//         "features": [
//           "Gestion des RH"
//         ],
//         "price_monthly": "39.90",
//         "price_yearly": "478.80",
//         "price_monthly_formated": "195000.00"
//       },
//       {
//         "id": 10,
//         "label": "GPEC",
//         "features": [
//           "GPEC"
//         ],
//         "price_monthly": "45.00",
//         "price_yearly": "540.00",
//         "price_monthly_formated": "225000.00"
//       },
//       {
//         "id": 11,
//         "label": "Paie",
//         "features": [
//           "Paie"
//         ],
//         "price_monthly": "50.00",
//         "price_yearly": "600.00",
//         "price_monthly_formated": "250000.00"
//       }
//     ]
//   }
]

const DashboardContent = () => {
  const [plans, setPlans] = useState([]);
  const [activeTab, setActiveTab] = useState("dolisaas");

  useEffect(() => {
    const initialize = async () => {
      try {
        const res = await fetchPlas();
        setPlans(res?.data || faker);
      } catch {
        setPlans(faker);
      }
    };
    initialize();
  }, []);

  return (
    <Container className="pt-5 mt-5" fluid style={{ maxWidth: "100%" }}>
      {/* 1) InstancesCard */}
      <Row className="mb-4 justify-content-center">
        <Col lg={12} md={11} sm={12}>
          <InstancesCard />
        </Col>
      </Row>

      {/* 2) SolutionsTeaser */}
      <Row className="mb-4 justify-content-center">
        <Col lg={{ span: 10, offset: 1 }}>
          <SolutionsTeaser />
        </Col>
      </Row>

      {/* 3) Onglets à 50/50 */}
      <Row className="mb-4 justify-content-center">
        <Col lg={{ span: 10, offset: 1 }}>
          <Nav variant="tabs" className="d-flex">
            <Nav.Item className="flex-fill text-center">
              <Nav.Link
                active={activeTab === "dolisaas"}
                onClick={() => setActiveTab("dolisaas")}
              >
                Dolisaas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="flex-fill text-center">
              <Nav.Link
                active={activeTab === "erpinnov"}
                onClick={() => setActiveTab("erpinnov")}
              >
                Erpinnov
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {/* 4) Plans floutés */}
      <Row className="mb-4 justify-content-center">
        <Col lg={{ span: 10, offset: 1 }}>
          {plans.map((plan) => (
            <PlanCard key={plan.id} planData={plan} blur={true} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardContent;