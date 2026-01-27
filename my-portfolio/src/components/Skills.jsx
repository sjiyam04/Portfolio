import "./Skills.css"

import html from "../assets/icons/html5.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/javascript.svg"
import react from "../assets/icons/react.svg"

import dotnet from "../assets/icons/dotnet.svg"
import sql from "../assets/icons/postgresql.svg"
import redis from "../assets/icons/redis.svg"
import rabbitmq from "../assets/icons/rabbitmq.svg"

import figma from "../assets/icons/figma.svg"
import git from "../assets/icons/git.svg"
import github from "../assets/icons/github.svg"

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Header */}
        <div className="skills-header">
          <span>MY TOOLKIT</span>
          <h2>What I Work With</h2>
          <p>
            A mix of technologies, frameworks, and tools I use to
            design, build, and deliver digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h4>FRONTEND</h4>

            <div className="skill-icons">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={react} alt="React" />
            </div>

            <div className="skill-info">
              <p>HTML · CSS · JavaScript · React</p>
              <span>85%</span>
            </div>

            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>

            <small>Interactive UI & frontend development</small>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h4>BACKEND & DATABASES</h4>

            <div className="skill-icons">
              <img src={dotnet} alt=".NET" />
              <img src={sql} alt="SQL Server" />
              <img src={redis} alt="Redis" />
              <img src={rabbitmq} alt="RabbitMQ" />
            </div>

            <div className="skill-info">
              <p>.NET · SQL Server · Redis · RabbitMQ</p>
              <span>80%</span>
            </div>

            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>

            <small>APIs, databases & backend architecture</small>
          </div>

          {/* UI UX */}
          <div className="skill-card">
            <h4>UI / UX DESIGN</h4>

            <div className="skill-icons">
              <img src={figma} alt="Figma" />
              {/* <img src={xd} alt="Adobe XD" /> */}
            </div>

            <div className="skill-info">
              <p>Figma · Adobe XD · Wireframing</p>
              <span>90%</span>
            </div>

            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>

            <small>User-centric design & prototyping</small>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h4>TOOLS & CONCEPTS</h4>

            <div className="skill-icons">
              <img src={git} alt="Git" />
              <img src={github} alt="GitHub" />
            </div>

            <div className="skill-info">
              <p>Git · GitHub · MVC · REST APIs</p>
              <span>85%</span>
            </div>

            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>

            <small>Clean code, version control & architecture</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
