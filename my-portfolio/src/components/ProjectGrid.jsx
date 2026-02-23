import { useState } from 'react';
import './ProjectGrid.css';

function ProjectGrid() {
  // Sample project data - you can add more projects here
  const projects = [
    {
      id: 1,
      title: "Tanush Group",
      subtitle: "Construction Website",
      tech: "React | Tailwind CSS | JavaScript",
      description: "Interactive UI development",
      image: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://tanushgroup.com"
    },
    {
      id: 2,
      title: "Auramed Enterprise",
      subtitle: "Pharmaceutical Website",
      tech: "React | Node.js | MongoDB",
      description: "Full stack web application",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-ruw-L4r--1FElIepObU-Ov4MCAS79zrbg&s",
      link: "https://www.auramedenterprise.com/"
    },
    {
      id: 3,
      title: "Jimit Thakore lawyer",
      subtitle: "Personalized Lawyer Website",
      tech: "React | Tailwind CSS | JavaScript",
      description: "Lawyer website development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1h08C4RvRvzYilmVqaatLXapYrynC-Sm7iO2mwg-SNrLECIzH7YGXkYU&s",
      link: "https://jimitthakore.in/"
    }
   
  ];

  return (
    <section className="project-grid">
      <div className="project-grid-container">
        
        {/* Scroll hint */}
        <div className="scroll-hint">
          <span>← Scroll to explore →</span>
        </div>

        {/* Horizontal scrollable cards */}
        <div className="project-cards-wrapper">
          <div className="project-cards">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="card-content">
                  <h4>{project.title}</h4>
                  <p>{project.tech}</p>
                  <span>{project.description}</span>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="demo-btn">Live Demo</button>
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicators */}
        <div className="scroll-indicators">
          {projects.map((_, index) => (
            <div key={index} className="indicator"></div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectGrid;