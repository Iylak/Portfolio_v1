import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import {FaEnvelope, FaLinkedinIn} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              COME GET TO KNOW <span className="purple"> A LITTLE </span> ABOUT ME
            </h1>
            <p className="home-about-body">
              Hi ! It's Jeni, your favorite coding buddy 👾
              <br />
              <br />What do I code in ?
              <i>
                <b className="purple"> Python, Java, C#, C++, Terraform. </b>
              </i>
              <br />
              <br />
              What are my interests ? &nbsp;
              <i>
                <b className="purple">Working with LLM, GenAI </b> AND
                I also love{" "}
                <b className="purple">
                  cloud infrastructure and big data !
                </b>
              </i>
              <br />
              <br />
              What can we chat about ?
              <b className="purple"> Anything big data, docker, innovative workflows </b> and
              <i>
                <b className="purple">
                  {" "}
                  how to scale and deploy applications
                </b>
              </i>
              &nbsp; with
              <i>
                <b className="purple"> innovative frameworks and solutions ! </b>
              </i>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Iylak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wangjeni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://mail.google.com/mail/?view=cm&to=wang109@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <FaEnvelope/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
