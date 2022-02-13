import React from 'react';
import Nav from '../Nav';

const Header = () => {
  return (
    <header>
      <Nav></Nav>
      <section className="hero">
        <h1 style={{ color: 'DeepPink' }}>Taylor Keltgen</h1>
      </section>
    </header>
  );
};

export default Header;
