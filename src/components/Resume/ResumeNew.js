import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BethImage from '../../Assets/Beth.jpeg';
import DagoImage from '../../Assets/Dago.jpeg';
import KeallyImage from '../../Assets/Keally.jpeg';
import OliverImage from '../../Assets/Oliver.jpeg';
import Aaron from '../../Assets/Aaron.jpeg';

import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV_Wendell_Guillen.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Card from '../UI/coverCard'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(1200);
  const linkedInUrl = 'https://www.linkedin.com/in/wendell-guillen-brenes-8b99331b9/details/recommendations/?detailScreenTabIndex=0';

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", padding: "10px", alignContent: "center"}}>
          <Col
            md={3}
            style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center' }}
          >
            <div>
              <Button
              className="btn"
              variant="primary"
              href={linkedInUrl}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              {t('linkedInCover')}
            </Button>
            </div>
          </Col>
        </Row>  
        <Row style={{ justifyContent: "center", padding: "10px", alignContent: "center"}}>
          <Col
            md={7}
            style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center' }}
            className="about-img"
          >
            <div className="container">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 10,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                className="swiper_container"
              >
                <SwiperSlide>
                  <Card 
                    image={BethImage}
                    href='https://www.linkedin.com/in/bethalisonb/'
                    name= 'Beth-Alison Berggren'
                    profesion= 'Product Development and Marketing Strategist | Digital Marketing | Social Media Marketing | Marketing Director | Business Strategy | B2B Marketing | Brand Development'
                    cover= {t('BethText')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                      image={KeallyImage}
                      href='https://www.linkedin.com/in/keally-k-5536311ab/'
                      name= 'Keally Keambom'
                      profesion= 'Business Analyst/PM at Quext'
                      cover= {t('KeallyText')}
                    />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                    image={DagoImage}
                    href='https://www.linkedin.com/in/dagomedinaz/'
                    name= 'Dago Medina'
                    profesion= 'Full Stack Developer'
                    cover= {t('DagoText')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                    image={Aaron}
                    href='https://www.linkedin.com/in/aaron-z%C3%BA%C3%B1iga-b9270169/'
                    name= 'Aaron Zuñiga'
                    profesion= 'Project Manager professional'
                    cover= {t('AaronText')}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card 
                    image={OliverImage}
                    href='https://www.linkedin.com/in/oliver-ortega-a700a321a/'
                    name= 'Oliver Ortega'
                    profesion= 'Quality Assurance Automation Engineer'
                    cover= {t('OliverText')}
                  />
                </SwiperSlide>
              </Swiper>
            </div>            
          </Col>        
        </Row>      
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="btn"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('download')}
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>


      </Container>
    </div>
  );
}

export default ResumeNew;
