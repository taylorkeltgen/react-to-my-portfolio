import React from 'react';
import Nav from '../Nav';

const Header = () => {
  return (
  <header>
      <Nav className="container"></Nav>
      <section className="hero">
      <a data-testid="link" href="/" className="nav-link">
          Taylor Keltgen
        </a>
    </section>
  </header>);
};

export default Header;
