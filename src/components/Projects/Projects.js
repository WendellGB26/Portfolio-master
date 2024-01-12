import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import BikeToWork from "../../Assets/Projects/bike-to-work.png";
import DigitalHuman from "../../Assets/Projects/digital-human.png";
import GeekList from "../../Assets/Projects/geek-list.png";
import Quext from "../../Assets/Projects/quext-web.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quext}
              isBlog={false}
              title="QUEXT"
              description="Website in charge of helping apartment owners and operators, in the sale or rental of their apartments. In it, the owners could create their own network and through widgets they could create a website with the information of their condominium, residence or apartment"
              demoLink="https://onequext.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalHuman}
              isBlog={false}
              title="Digital Human"
              description="Integration of an AI for the tours and the reservation of the apartments and or condominiums that have the AI available through Quext."
              demoLink="https://onequext.com/product/digital-human"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BikeToWork}
              isBlog={false}
              title="Bike To Work Day"
              description="Bike to Work Day is a free, fun annual event focused on encouraging people to try out commuting by bike. The event typically takes place in-person the fourth Wednesday of every June. Bike to Work Day typically attracts tens of thousands of participants whose commitment helps communicate the desire and need for expanded and improved bike infrastructure in the Denver region."
              demoLink="https://biketoworkday.co/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GeekList}
              isBlog={false}
              title="Geek List"
              description="Geeklist is a social platform for developers to highlight their achievements,share resources and collaborate, your status can be sold as an NFT"
              demoLink="https://geekli.st/waitlist"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
