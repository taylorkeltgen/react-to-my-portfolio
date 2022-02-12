import React, {useState} from 'react';
import { FaGithub } from "react-icons/fa";

const Project = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Want To Buy',
            description: 'My second Group Project as part of my UT-Coding-Bootcamp',
            deployedUrl: 'https://want-to-buy.herokuapp.com/',
            gitHubRepo: 'https://github.com/taylorkeltgen/want-to-buy'
        },
        {
            id: 2,
            title: 'Hotel Raven',
            description: 'My first Group Project as part of my UT-Coding-Bootcamp',
            deployedUrl: 'https://smashercoder.github.io/hotel-raven/',
            gitHubRepo: 'https://github.com/SmasherCoder/hotel-raven'
        },
        {
            id: 3,
            title: 'TBD',
            description: 'Coming soon',
            deployedUrl: '',
            gitHubRepo: ''
        },
        {
            id: 4,
            title: 'TBD',
            description: 'Coming soon',
            deployedUrl: '',
            gitHubRepo: ''
        },
    ]);
  
    return (
        <div className=''>
            <h2>Projects</h2>
            <div className='container '>
                {projects.map((proj) => (
                    <div key={proj.id} className={`bg-img-${proj.id} row d-flex-inline flex-column py-5 m-4`}>
                            <div className=' flex-row align-items-center'>
                                <a href={proj.deployedUrl} target="_blank" rel="noopener noreferrer" className='project-title mx-3'><h2>{proj.title}</h2></a>
                                <a href={proj.gitHubRepo} target="_blank" rel="noopener noreferrer" className='icon'><h1><FaGithub /></h1></a>
                            </div>
                            <div className='d-flex-inline flex-wrap'>
                                <p>{proj.description}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Project;
