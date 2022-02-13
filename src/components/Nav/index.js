import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-md navbar-dark'>
        <Link data-testid="about" to="/" className="nav-link">
          <h1 className="link text-nowrap">Portfolio</h1>
        </Link>
        <button 
        className='navbar-toggler'
        type="button"
        data-bs-toggle="collaspe"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
          <div className='collapse navbar-collapse' id='toggleMobileMenu'>
            <ul className='navbar-nav ms-auto'>
              <li>
                <Link data-testid="about" to="/" className="nav-link">
                  <h5 className="link text-nowrap">About me</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="project" to="/project" className="nav-link">
                  <h5 className="link">Projects</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="contact" to="/contact" className="nav-link">
                  <h5 className="link">Contact</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="resume" to="/resume" className="nav-link col-2">
                  <h5 className="link">Resume</h5>
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default Nav;
