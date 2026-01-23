import "./ProjectGrid.css"
import projectImg from "../assets/images/project-card.png"

function ProjectGrid() {
  return (
    <section className="project-grid">
      <div className="project-grid-container">

        {/* Filters */}
        <div className="project-filters">
          <button className="active">All</button>
          <button>Web Development</button>
          <button>Design</button>
          <button>Branding</button>
        </div>

        {/* Cards */}
        <div className="project-cards">

          {[1, 2, 3].map((item) => (
            <div className="project-card" key={item}>

              <div className="card-image">
                <img src={projectImg} alt="Project" />

                <div className="image-overlay">
                  <p>Pink Sky</p>
                  <button>Follow</button>
                </div>
              </div>

              <div className="card-content">
                <h4>Project Alpha</h4>
                <p>HTML | CSS | JavaScript</p>
                <span>Interactive UI development</span>

                <button className="demo-btn">Live Demo</button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ProjectGrid
