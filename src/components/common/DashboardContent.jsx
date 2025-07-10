import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import SolutionsTeaser from "./SolutionsTeaser";
import InstancesCard from "./InstancesCard";
import InstanceDoliSaas from "./InstanceDoliSaas";
import PlanCard from "./PlanCard";
import { fetchPlas } from "../../api/planApi";
import { useTheme } from "../../contexts/ThemeContext"; // chemin correct

const DashboardContent = () => {
  const { theme } = useTheme(); // Accès au thème clair/sombre

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

  // 🎨 Couleurs selon le thème
  const bgColor = theme === "dark" ? "#212529" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const activeBg = theme === "dark" ? "#2b2b3c" : "#e9ecef";
  const borderCol = theme === "dark" ? "#444" : "#dee2e6";

  return (
    <Container className="pt-5 mt-5" fluid style={{ maxWidth: "100%" }}>
      {/* Contenu principal selon onglet */}
      <div className="mb-4">
        {activeTab === "dolisaas" ? <InstanceDoliSaas /> : <InstancesCard />}
      </div>

      {/* Plans */}
      <Row className="mb-4 justify-content-center">
        <Col lg={{ span: 10, offset: 1 }}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              planData={plan}
              blDécouvrez
              nos
              solutionsur={!(activeTab === "dolisaas" && plan.id === 1)}
              source={activeTab}
            />
          ))}
        </Col>
      </Row>

      {/* Onglets de navigation */}
      <Row className="mb-4 g-0" style={{ width: "90vw" }}>
        <Col xs={12} className="px-0">
          <div
            className="border rounded shadow-sm p-4"
            style={{
              width: "100%",
              boxSizing: "border-box",
              position: "relative",
              backgroundColor: bgColor,
              color: textColor,
              border: "1px solid",
              borderColor: borderCol,
            }}
          >
            <Nav variant="tabs" className="mb-3">
              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  active={activeTab === "dolisaas"}
                  onClick={() => setActiveTab("dolisaas")}
                  style={{
                    padding: "12px 0",
                    transition: "none",
                    backgroundColor:
                      activeTab === "dolisaas" ? activeBg : "transparent",
                    color: textColor,
                  }}
                >
                  Dolisaas
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  active={activeTab === "erpinnov"}
                  onClick={() => setActiveTab("erpinnov")}
                  style={{
                    padding: "12px 0",
                    transition: "none",
                    backgroundColor:
                      activeTab === "erpinnov" ? activeBg : "transparent",
                    color: textColor,
                  }}
                >
                  Erpinnov
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardContent;
