import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstancesCard from "./InstancesCard";
import SolutionsTeaser from "./SolutionsTeaser";
import PlanCard from "./PlanCard";

const DashboardContent = () => (
  <Container className="pt-5 mt-5" style={{ maxWidth: "100%" }}>
     <Row className="mb-4 justify-content-center">
    <Col lg={12} md={11} sm={12}>
      <InstancesCard />
    </Col>
  </Row>
    <Row>
      <Col lg={{ span: 10, offset: 1 }}>
        <SolutionsTeaser />
      </Col>
    </Row>
     <Row className="mb-4 justify-content-center">
    <Col lg={12} md={11} sm={12}>
      <PlanCard />
    </Col>
  </Row>
  </Container>
);

export default DashboardContent;
