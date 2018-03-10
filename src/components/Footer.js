import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer">
    <Container textAlign="center">
      <span>
        <strong className="footer-text">Made by </strong>
      </span>
      <a
        href="https://github.com/trunglive/readable"
        className="footer-icon"
        target="_blank"
      >
        <strong>Trung Vo </strong>
        <Icon name="github" size="big" />
      </a>
    </Container>
  </div>
);

export default Footer;