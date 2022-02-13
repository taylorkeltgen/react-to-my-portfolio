import React from 'react';

const Resume = () => {
  return (
    <div className="d-flex-column">
      <div>
        <h1>Resume</h1>
        <p>
          Download my{' '}
          <a href="./resume.txt" download="Taylor_Keltgen_Resume">
            resume
          </a>
        </p>
      </div>
      <div>
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
