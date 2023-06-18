import React from 'react';
import projects from '../../Projects/projects';


const Portfolio = () => {
    const renderProjects = () => {
        return projects.map((project, index) => (
            <div key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.title} />
                <div>
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                        View Deployed App
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View GitHub Repository
                    </a>
                </div>
            </div>
        ));
    };

    return (
        <section className='portfolio'>
            <h3>Portfolio</h3>
        </section>
    )
}

export default Portfolio