import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        {' '}
        <Link data-testid="about" to="/" className="nav-link">
          <h1 className="page-title">Portfolio</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <ul className="navbar-nav ms-auto">
              <li>
                <Link data-testid="about" to="/" className="nav-link">
                  <h5 className="pink text-nowrap">About me</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="project" to="/project" className="nav-link">
                  <h5 className="pink">Projects</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="contact" to="/contact" className="nav-link">
                  <h5 className="pink">Contact</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="resume" to="/resume" className="nav-link">
                  <h5 className="pink">Resume</h5>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
