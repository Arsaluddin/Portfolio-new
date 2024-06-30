import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arsal uddin </span>
            from <span className="purple"> India.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            <br />
            I have completed my B.Tech from Ujjain Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning never Ends!"{" "}
          </p>
          <footer className="blockquote-footer">Arsal Uddin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
