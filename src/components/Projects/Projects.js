import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import BikeToWork from "../../Assets/Projects/bike-to-work.png";
import DigitalHuman from "../../Assets/Projects/digital-human.png";
import GeekList from "../../Assets/Projects/geek-list.png";
import Quext from "../../Assets/Projects/quext-web.png";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('project-title1')} <strong className="purple">{t('project-title2')} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('project-subtitle')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quext}
              isBlog={false}
              title="QUEXT"
              description={t('quextProject')}
              demoLink="https://onequext.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalHuman}
              isBlog={false}
              title="Digital Human"
              description={t('iaProject')}
              demoLink="https://onequext.com/product/digital-human"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BikeToWork}
              isBlog={false}
              title="Bike To Work Day"
              description={t('bikeProject')}
              demoLink="https://biketoworkday.co/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GeekList}
              isBlog={false}
              title="Geek List"
              description={t('geekProject')}
              demoLink="https://geekli.st/waitlist"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
