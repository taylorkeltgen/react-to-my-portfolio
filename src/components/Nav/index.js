import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <> 
      <ul className="navbar-nav justify-content-end align-items-center flex-row">
        <li className='col m-2'>
          <h1>Portfolio</h1>
        </li>
        <li className="col-1 mx-2">
          <Link data-testid="about" to="/" className="nav-link ">
            About me
          </Link>
        </li>
        <li className="col-1 mx-2">
          <Link data-testid="project" to="/project" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="col-1 mx-2">
          <Link data-testid="contact" to="/contact" className="nav-link col-2">
            Contact
          </Link>
        </li>
        <li className="col-1 mx-2">
          <Link data-testid="resume" to="/resume" className="nav-link col-2">
            Resume
          </Link>
        </li>
      </ul>
    </> 
  );
}

export default Nav;
