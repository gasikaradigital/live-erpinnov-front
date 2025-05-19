import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstancesCard from "./InstancesCard";
import SolutionsTeaser from "./SolutionsTeaser";

const DashboardContent = () => (
  <Container className="pt-5 mt-5">
    <Row className="mb-4">
      <Col lg={{ span: 10, offset: 1 }}>
        <InstancesCard />
      </Col>
    </Row>
    <Row>
      <Col lg={{ span: 10, offset: 1 }}>
        <SolutionsTeaser />
      </Col>
    </Row>
  </Container>
);

export default DashboardContent;
