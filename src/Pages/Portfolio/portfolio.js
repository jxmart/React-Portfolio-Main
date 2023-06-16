import React from 'react';

const Application = ({ title, imageSrc, deployedLink, githubLink }) => {
    return (
      <div className="application">
        <h3>{title}</h3>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={title} />
        </a>
        <div className="links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            View Application
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    );
  };

const Portfolio = () => {
    const applications = [
        {
            title: 'Application 1',
            imageSrc: 'path/to/image1.jpg',
            deployedLink: 'https://example.com/app1',
            githubLink: 'https://github.com/user/repo1'
          },
          {
            title: 'Application 2',
            imageSrc: 'path/to/image2.jpg',
            deployedLink: 'https://example.com/app2',
            githubLink: 'https://github.com/jxmart/repo2'
          },
        ];

    return (
        <section className='portfolio'>
        <h3>Portfolio</h3>
        <div className="applications">
        {applications.map((app, index) => (
          <Application
            key={index}
            title={app.title}
            imageSrc={app.imageSrc}
            deployedLink={app.deployedLink}
            githubLink={app.githubLink}
          />
        ))}
      </div>
        </section>
    )
}

export default Portfolio