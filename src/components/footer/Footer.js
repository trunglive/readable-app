import React from "react";
import { Container, Icon } from "semantic-ui-react";

const Footer = () => (
  <div className="footer">
    <Container textAlign="center">
      <a
        href="https://github.com/trunglive/readable"
        className="footer-icon"
        target="_blank"
      >
        <p className="footer-text">Code by Trung Vo </p>
      </a>
    </Container>
  </div>
);

export default Footer;
