import React from 'react';
import resume from '../../assets/Resume_Taylor_Keltgen_2022.pdf';

const Resume = () => {
  return (
    <div className="d-flex-column">
      <div>
        <h2 className="page-title">Resume</h2>
        <p className='mt-4'>
          Download my{' '}
          <a href={resume} download="Taylor_Keltgen_Resume">
            resume
          </a>
        </p>
      </div>
     
      <div className="container my-5 mx-1">
        <div>
          <h4>Coding Langages Known</h4>
          <ul>
            <li>Javascript (Primary)</li>
            <li>Python (Currently learning) </li>
            <li>C# (Want to learn)</li>
          </ul>
        </div>
        <div>
          <h4>Front-end Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React.js</li> 
            <li>Handlebars.js</li> 
            <li>Responsive Design</li>
          </ul>
        </div>
        <div>
          <h4>Back-end Proficiencies</h4>
          <ul>
            <li>Git</li>
            <li>API Fetching</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose.js</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
