import { useState } from 'react';
import './ProjectGrid.css';

function ProjectGrid() {
  // Sample project data - you can add more projects here
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      subtitle: "Pink Sky",
      tech: "HTML | CSS | JavaScript",
      description: "Interactive UI development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Project Beta",
      subtitle: "Blue Ocean",
      tech: "React | Node.js | MongoDB",
      description: "Full stack web application",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Project Gamma",
      subtitle: "Green Forest",
      tech: ".NET | SQL Server",
      description: "Enterprise backend solution",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Project Delta",
      subtitle: "Red Sunset",
      tech: "Figma | Adobe XD",
      description: "UI/UX design system",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Project Epsilon",
      subtitle: "Purple Dream",
      tech: "React Native | Firebase",
      description: "Mobile app development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Project Zeta",
      subtitle: "Orange Glow",
      tech: "Three.js | WebGL",
      description: "3D interactive experience",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
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
                  
                  <div className="image-overlay">
                    <p>{project.subtitle}</p>
                    <button>View Project</button>
                  </div>
                </div>

                <div className="card-content">
                  <h4>{project.title}</h4>
                  <p>{project.tech}</p>
                  <span>{project.description}</span>
                  
                  <button className="demo-btn">Live Demo</button>
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