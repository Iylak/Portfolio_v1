import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            That's me ! Hi, I'm <span className="purple">Jie Wang </span>
            from <span className="purple"> Los Angeles, CA: </span>
              but you can call me <span className="purple">Jeni</span>
            <br />
            I am currently employed as a <span className="purple"> Software Developer II </span> at
              <span className="purple"> Oracle-OCI Media Services </span>.
            <br />
            I attended <span className="purple"> University of California, San Diego </span> for my
              <span className="purple"> B.S. in Data Science </span> and my
              <span className="purple"> minor in Management Science </span>.
            <br />
            <br />
            Outside of the code space, you can find me
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing/Filming Dance content
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
              <li className="about-activity">
                  <ImPointRight /> Gaming
              </li>
          </ul>

          <p style={{ color: "rgb(0, 71, 171)" }}>
            "Your only comparison is you from yesterday !"{" "}
          </p>
          <footer className="blockquote-footer">Jeni Wang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
