import React from 'react';
import portrait from '../../assets/images/portrait.webp';


function About() {
  return (
    <section className="container">
      <h1 id="about" className="page-title ">
        About Me
      </h1>
      <img className='' src={portrait} alt="self portrait" width={250} height={300} />
      <div className="my-2">
        <p>
          Hi my name is Taylor Keltgen
        </p>
      </div>
    </section>
  );
}

export default About;
