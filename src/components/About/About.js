import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/vscode2.png";
import Toolstack from "./Toolstack";

function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t('KnowMe1')} <strong className="purple">{t('KnowMe2')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        {t('Skills1')} <strong className="purple">{t('Skills2')} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t('Skills3')}</strong> {t('Skills4')}
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
