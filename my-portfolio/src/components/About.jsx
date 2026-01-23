import "./About.css"
import aboutGraphic from "../assets/images/assets.png"

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-text">
          <span className="about-label">ABOUT ME</span>

          <h2>
            Who I Am <br />
            Beyond the Code.
          </h2>

          <p>
            I craft elegant and meaningful digital solutions — from sleek UI
            design to full-stack development. With a foundation in .NET,
            React, and UI/UX design, I blend creativity with technical
            precision to build intuitive and impactful digital experiences.
          </p>

          <div className="about-divider"></div>

          <div className="about-stats">
            <span>20+ Projects Completed</span>
            <span>10+ Branding Designs</span>
            <span>Constant Learner</span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="about-visual">
          <img src={aboutGraphic} alt="Skills & tools" />
        </div>

      </div>
    </section>
  )
}

export default About
