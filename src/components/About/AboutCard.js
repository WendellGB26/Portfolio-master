import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {t('KnowText1')}
          <br />

          <br />
            <span className="purple">{t('KnowText2')}</span>
          <br />

          <br />
          {t('KnowText3')}
          <br />

          <br />
          {t('KnowText4')}
          <br />


          <br />
          {t('KnowText5')}
          <br />

          <br />
          {t('KnowText6')}
          <br />

          <br />
          {t('KnowText7')}
          <br />

          <br />
          {t('KnowText8')}
          </p>
          <span className="purple">{t('Aspirations1')}</span>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('Aspirations2')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('Aspirations3')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('Aspirations4')}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t('phrase')}"{" "}
          </p>
          <footer className="blockquote-footer">{t('phraseCreator')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
