import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";

import SolutionsTeaser from "./SolutionsTeaser";
import InstancesCard from "./InstancesCard";
import InstanceDoliSaas from "./InstanceDoliSaas";
import PlanCard from "./PlanCard";
import { fetchPlas } from "../../api/planApi";


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
      {/* Contenu affiché selon onglet */}
      <div className="mb-4">
        {activeTab === "dolisaas" ? <InstanceDoliSaas /> : <InstancesCard />}
      </div>

      {/* 4) Plans floutés */}
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

      <Row className="mb-4 g-0" style={{ width: "90vw"}}>
        <Col xs={12} className="px-0">
          <div
            className="border rounded bg-white shadow-sm p-4"
            style={{
              width: "100%",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            {/* Onglets de navigation */}
            <Nav variant="tabs" className="mb-3">
              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  active={activeTab === "dolisaas"}
                  onClick={() => setActiveTab("dolisaas")}
                  style={{
                    padding: "12px 0",
                    transition: "none",
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