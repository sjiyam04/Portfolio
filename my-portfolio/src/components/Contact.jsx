import "./Contact.css"

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span>CONTACT</span>
          <h2>Get in Touch !</h2>
          <p>
            Whether you have a project in mind, question or just
            want to say Hello!, I’d love to hear from you.
          </p>
        </div>

        {/* Glass Card */}
        <div className="contact-card">

          {/* Left */}
          <div className="contact-info">
            <small>Contact</small>
            <h3>
              Got a Project ? <br />
              Let’s talk
            </h3>

            <p className="contact-email">sjjyam04@gmail.com</p>
            <p className="contact-phone">+91 78620 75559</p>

            <div className="contact-icons">
              <span>✉️</span>
              <span>in</span>
              <span>📞</span>
              <span>📸</span>
            </div>

            <button className="resume-btn">Download Resume →</button>
          </div>

          {/* Divider */}
          <div className="contact-divider"></div>

          {/* Right */}
          <form className="contact-form">
            <label>Name</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Subject</label>
            <input type="text" />

            <label>Message</label>
            <textarea rows="4"></textarea>

            <button className="submit-btn">Get in touch !</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
