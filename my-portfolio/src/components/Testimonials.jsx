import "./Testimonials.css"

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">
          <span>TESTIMONIALS & ACHIEVEMENTS</span>
          <h2>Testimonials & Achievements</h2>
          <p>A few words and milestones that shaped my journey</p>
        </div>

        {/* Tabs */}
        <div className="testimonial-tabs">
          <button className="active">Testimonials</button>
          <button>Achievements</button>
        </div>

        {/* Cards */}
        <div className="testimonial-cards">

          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <div className="icon">🚀</div>

              <h4>The Vision Ahead</h4>

              <p>
                Focused on creating seamless, aesthetic digital
                experiences that bridge creativity and functionality.
              </p>

              <span className="pill">All</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials
