import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import InstancesCard from "./InstancesCard";
import InstanceDoliSaas from "./InstanceDoliSaas";
import PlanCard from "./PlanCard";
import { fetchPlas } from "../../api/planApi";
import { useTheme } from "../../contexts/ThemeContext";

const DashboardContent = () => {
  const { theme } = useTheme();
  const [plans, setPlans] = useState([]);
  const [activeTab, setActiveTab] = useState("dolisaas");

  useEffect(() => {
    const initialize = async () => {
      try {
        const res = await fetchPlas();
        setPlans(res?.data || []);
      } catch {
        setPlans([]);
      }
    };
    initialize();
  }, []);

  const bgColor = theme === "dark" ? "#212529" : "#ffffff";
  const textColor = theme === "dark" ? "#f8f9fa" : "#212529";
  const activeBg = theme === "dark" ? "#2b2b3c" : "#e9ecef";
  const borderCol = theme === "dark" ? "#444" : "#dee2e6";

  return (
    <Container className="pt-5 mt-5" fluid style={{ maxWidth: "100%" }}>
      {/* InstancesCard toujours visible */}
      <Row className="mb-4 justify-content-center">
        <Col lg={10}>
          <InstancesCard />
        </Col>
      </Row>

      {/* Onglets */}
      <Row className="mb-4 g-0 justify-content-center">
        <Col lg={10}>
          <div
            className="border rounded shadow-sm p-4"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              border: "1px solid",
              borderColor: borderCol,
            }}
          >
            <Nav variant="tabs" className="mb-3 justify-content-center">
              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  active={activeTab === "dolisaas"}
                  onClick={() => setActiveTab("dolisaas")}
                  style={{
                    padding: "12px 0",
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

      {/* Contenu dynamique si dolisaas sélectionné */}
      {activeTab === "dolisaas" && (
        <Row className="mb-4 justify-content-center">
          <Col lg={10}>
            <InstanceDoliSaas />
          </Col>
        </Row>
      )}

      {/* Plans
      <Row className="mb-4 justify-content-center">
        <Col lg={10}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              planData={plan}
              blDécouvrez
              nos
              solutionsur={!(activeTab === "erpinnov" && plan.id === 1)}
              source={activeTab}
            />
          ))}
        </Col>
      </Row> */}
    </Container>
  );
};

export default DashboardContent;
