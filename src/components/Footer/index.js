import React from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow, FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <h6 className="d-flex justify-content-center align-items-center">
        Built with React <FaReact />
      </h6>
      <footer className="d-flex justify-content-center align-items-center mb-5">
        <a href="https://github.com/taylorkeltgen" target="_blank" rel="noopener noreferrer">
          <h1 className="mx-3">
            <FaGithub />
          </h1>
        </a>
        <a href="https://www.linkedin.com/in/taylor-keltgen-53312412a/" target="_blank" rel="noopener noreferrer">
          <h1 className="mx-3">
            <FaLinkedin />
          </h1>
        </a>
        <a href="https://stackoverflow.com/users/16635981/taylork" target="_blank" rel="noopener noreferrer">
          <h1 className="mx-3">
            <FaStackOverflow />
          </h1>
        </a>
      </footer>
    </>
  );
};

export default Footer;
