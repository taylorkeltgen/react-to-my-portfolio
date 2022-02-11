import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const { page = [], currentPage, setCurrentPage } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <ul className="nav justify-content-end flex-row">
      <li className="nav-item mx-2">
        <a data-testid="about" href="/about" className="nav-link" onClick={() => setCurrentPage(true)}>
          About me
        </a>
      </li>
      <li className="mx-2">
        <a data-testid="project" href="/project" className="nav-link">
          Projects
        </a>
      </li>
      <li className={`mx-2`}>
        <a data-testid="contact" href="/contact" className="nav-link">
          Contact
        </a>
      </li>
      <li className={`mx-2 `}>
        <a data-testid="resume" href="/resume" className="nav-link">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;
