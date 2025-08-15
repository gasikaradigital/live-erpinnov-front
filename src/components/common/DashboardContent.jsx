import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import InstancesCard from "./InstancesCard";
import InstanceDoliSaas from "./InstanceDoliSaas";
import InstanceErpi from "./InstanceErpi";
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
    <Container fluid className="pt-5 mt-5">
      {/* Navigation des onglets */}
      <Nav className="mb-3 justify-content-center">
        <Nav.Item className="flex-fill text-center">
          <Nav.Link
            active={activeTab === "dolisaas"}
            onClick={() => setActiveTab("dolisaas")}
            style={{
              padding: "6px 0",
              fontSize: "14px",
              backgroundColor:
                activeTab === "dolisaas" ? activeBg : "transparent",
              color: textColor,
              borderRadius: "6px",
              transition: "all 0.3s ease",
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
              padding: "6px 0",
              fontSize: "14px",
              backgroundColor:
                activeTab === "erpinnov" ? activeBg : "transparent",
              color: textColor,
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
          >
            Erpinnov
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Contenu principal avec hauteur uniforme */}
      <Row
        className="overflow-auto"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <Col xs={12} className="p-0">
          {activeTab === "dolisaas" && <InstanceDoliSaas />}
          {activeTab === "erpinnov" && <InstanceErpi />}
        </Col>
        <Col xs={12} className="p-5">
          <InstancesCard />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardContent;
