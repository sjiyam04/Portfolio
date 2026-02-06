import "./Projects.css"
import projectImg from "../assets/Images/project-1.png"

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <span>PROJECTS</span>
          <h2>Building Ideas into Reality</h2>
          <p>
            A glimpse into the digital experiences I’ve designed
            and developed — blending creativity, functionality,
            and code precision.
          </p>
        </div>

        {/* Featured Project */}
        <h4 className="featured-title">FEATURED PROJECTS</h4>

        {/* <div className="featured-card">
          
          
          <div className="featured-image">
            <img src={projectImg} alt="Project preview" />
          </div>

          <div className="featured-content">
            <h3>Skyvi International</h3>
            <p>
              Modern trade website for a global export company
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>CSS</span>
              <span>.NET</span>
            </div>

            <button className="project-btn">Live Demo</button>
          </div>

        </div> */}
      </div>
    </section>
  )
}

export default Projects
