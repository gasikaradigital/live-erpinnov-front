import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstancesCard from "./InstancesCard";
import SolutionsTeaser from "./SolutionsTeaser";
import PlanCard from "./PlanCard";
import { fetchPlas } from "../../api/planApi";

const DashboardContent = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    const initialize = async () => {
      try {
        const res = await fetchPlas();
        if (res) {
          setPlans(res.data);
        } else {
          console.log("cannot fetch plans");
        }
      } catch (err) {
        console.log(err);
      }
    };
    initialize();
  }, []); // ← ici, il faut [] pour que ça ne boucle pas à l'infini
  return <Container className="pt-5 mt-5" style={{ maxWidth: "100%" }}>
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
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            planData={plan}
            blur={index !== 0}
          />
        ))}
      </Col>
    </Row>
  </Container>
}



export default DashboardContent;
