import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Want To Buy',
      description: 'Full Stack Group Project',
      deployedUrl: 'https://want-to-buy.herokuapp.com/',
      gitHubRepo: 'https://github.com/taylorkeltgen/want-to-buy',
    },
    {
      id: 2,
      title: 'Hotel Raven',
      description: 'Front-end Group Project',
      deployedUrl: 'https://smashercoder.github.io/hotel-raven/',
      gitHubRepo: 'https://github.com/SmasherCoder/hotel-raven',
    },
    {
      id: 3,
      title: 'TBD',
      description: 'Coming soon',
      deployedUrl: '',
      gitHubRepo: '',
    },
    {
      id: 4,
      title: 'TBD',
      description: 'Coming soon',
      deployedUrl: '',
      gitHubRepo: '',
    },
  ]);

  return (
    <div className="">
      <h1>Projects</h1>
      <div className="col-6 col-sm-12 my-5">
        {projects.map((proj) => (
          <section key={proj.id} className={`bg-img-${proj.id} ui-card img d-flex-inline flex-column m-4 py-5`}>
            <div className='description'>
              <div className=" align-items-center flex-row">
                <a href={proj.deployedUrl} target="_blank" rel="noopener noreferrer" className="project-title mx-3">
                  <h2>{proj.title}</h2>
                </a>
                <a href={proj.gitHubRepo} target="_blank" rel="noopener noreferrer" className="icon">
                  <h1>
                    <FaGithub />
                  </h1>
                </a>
              </div>
              <div className="d-flex-inline flex-wrap">
                <p>{proj.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Project;
