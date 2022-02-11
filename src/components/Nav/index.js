import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav justify-content-end flex-row">
      <li className="nav-item mx-2">
        <Link data-testid="about" to="/" className="nav-link">
          About me
        </Link>
      </li>
      <li className="mx-2">
        <Link data-testid="project" to="/project" className="nav-link">
          Projects
        </Link>
      </li>
      <li className={`mx-2`}>
        <Link data-testid="contact" to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
      <li className={`mx-2 `}>
        <Link data-testid="resume" to="/resume" className="nav-link">
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
