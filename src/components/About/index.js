import React from 'react';
import portrait from '../../assets/images/portrait.webp';

function About() {
  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 id="about" className="page-title ">
          About Me
        </h2>
        <img style={{ borderRadius: '25%' }} className="my-4" src={portrait} alt="self portrait" width={250} height={300} />
      </div>
      <div className="my-2">
        <p>
          Hi my name is Taylor Keltgen. I am an aspiring Developer currently working in an IT Support role at the University of Texas at Austin. I
          have strong desire to learn and create new things, and I love problem solving. I have just completed the University of Texas at Austin
          Coding Bootcamp for Full Stack Web Development, and I am ready to start my new career journey in the Development field.
          <br />
          <br />
          Some of my strengths include high adaptibility, quick learning, a problem solving mentality, the ability to view things from a wide lens, a
          leadership mentality, and a strong desire to always improve.
        </p>
      </div>
    </section>
  );
}

export default About;
