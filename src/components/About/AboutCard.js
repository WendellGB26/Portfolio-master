import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am a Front-End Developer with three years of hands-on experience. 
          My professional journey has revolved around creating intuitive and user-friendly websites. 
          I have a deep passion for web development and a constant thirst for learning. One of my key strengths lies in my 
          ability to swiftly adapt to new challenges and seamlessly integrate into collaborative teams.
          
          <br />

          <br />
            <span className="purple">Career Aspirations:</span>
          <br />

          <br />
            Looking forward, my goal is to remain at the forefront of technological advancements 
            in web development. This involves staying updated on emerging design paradigms and 
            harnessing the capabilities of cutting-edge frameworks.
          <br />

          <br />
            Effective communication plays a pivotal role in aligning the client's vision with 
            the final product. Leveraging my intermediate English skills and proficiency in 
            technical-client communication, I am committed to enhancing my language abilities. 
            My aspiration is to evolve into a bilingual developer capable of bridging the gap between 
            technical and non-technical stakeholders seamlessly.
          <br />


          <br />
            I strongly believe in the power of teamwork and collaboration. 
            I eagerly anticipate opportunities to mentor and work closely with fellow developers. 
            This not only contributes to the growth of my colleagues but also enriches my understanding 
            of diverse perspectives and approaches.
          <br />

          <br />
            My ultimate objective is to craft websites and web applications that leave a 
            lasting positive impression on users. Whether it's enhancing sales on an e-commerce 
            site or fostering connections on a community platform, I aim to create memorable and 
            impactful user experiences.
          <br />

          <br />
            In summary, my journey as a Front-End Developer has been characterized by growth, 
            adaptability, and unwavering enthusiasm. As I progress in my career, I am excited 
            about embracing new challenges, expanding my horizons, and making a meaningful impact 
            in the dynamic world of web development.
          <br />

          <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <span className="purple">Career Aspirations:</span>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Do exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A good software developer works with discipline and perseverance from day one.!"{" "}
          </p>
          <footer className="blockquote-footer">Omar Bradley</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
