import React from 'react';
import portrait from '../../assets/images/portrait.webp';

function About() {
  return (
    <section className="container">
      <div className='d-flex justify-content-between'>
        <h1 id="about" className="page-title ">
          About Me
        </h1>
        <img className="" src={portrait} alt="self portrait" width={250} height={300} />
      </div>
      <div className="my-2">
        <p>Hi my name is Taylor Keltgen. I am an aspiring Developer currently working in the IT Support field.</p>
      </div>
    </section>
  );
}

export default About;
