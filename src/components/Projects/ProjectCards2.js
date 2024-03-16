import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCardsTwo(props) {
  return (
    <div className="project-card-container">
      <Card className="project-card-view">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
              </Card.Text>
            </Card.Body>
          </div>
          <div className="flip-card-back">
            <Card.Body>
              {props.work.map((item, index) => (
                <Card.Text key={index} style={{ textAlign: "justify" }}>
                  {item}
                </Card.Text>
              ))}
              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </Button>
              )}
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectCardsTwo;