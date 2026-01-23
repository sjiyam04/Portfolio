import "./Journey.css"

function Journey() {
  return (
    <section className="journey">
      <div className="journey-container">

        {/* Header */}
        <div className="journey-header">
          <span>JOURNEY SO FAR</span>
          <h2>The Path That Shaped Me</h2>
          <p>
            A quick look at how I evolved — from learning the basics
            to creating real digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">

          {/* Center line */}
          <div className="timeline-line"></div>

          {/* Left card */}
          <div className="timeline-item left">
            <div className="timeline-card">
              <small>Now</small>
              <h4>The Vision Ahead</h4>
              <p>
                Focused on creating seamless, aesthetic digital
                experiences that bridge creativity and functionality.
              </p>
              <span className="tag">All</span>
            </div>
          </div>

          {/* Right card */}
          <div className="timeline-item right">
            <div className="timeline-card">
              <small>2025</small>
              <h4>Building Identity</h4>
              <p>
                Combining code, design and branding into one vision,
                building projects as a full stack developer.
              </p>
              <span className="tag">All</span>
            </div>
          </div>

          {/* Left card */}
          <div className="timeline-item left">
            <div className="timeline-card">
              <small>2024</small>
              <h4>Freelance Projects</h4>
              <p>
                Designed and developed professional websites —
                Skyvi and more.
              </p>
              <span className="tag">All</span>
            </div>
          </div>

          {/* Right card */}
          <div className="timeline-item right">
            <div className="timeline-card">
              <small>2024</small>
              <h4>Skill Development</h4>
              <p>
                Focused on creating seamless, aesthetic digital
                experiences that bridge creativity and functionality.
              </p>
              <span className="tag">All</span>
            </div>
          </div>

          {/* Left card */}
          <div className="timeline-item left">
            <div className="timeline-card">
              <small>2022</small>
              <h4>Education Foundation</h4>
              <p>
                Built strong fundamentals in development, design,
                and problem solving.
              </p>
              <span className="tag">All</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Journey
