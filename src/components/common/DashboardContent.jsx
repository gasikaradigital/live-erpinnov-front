import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstancesCard from "./InstancesCard";
import SolutionsTeaser from "./SolutionsTeaser";

const DashboardContent = () => (
  <Container className="my-4">
    <Row>
      <Col lg={{ span: 10, offset: 1 }}>
        <InstancesCard />
      </Col>
    </Row>
    <Row>
      <Col>
        <SolutionsTeaser />
      </Col>
    </Row>
  </Container>
);

export default DashboardContent;

