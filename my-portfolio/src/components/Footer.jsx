import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* CTA Section */}
        {/* <div className="footer-cta">
          <h2>Let's Create Something Remarkable Together</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to bring your vision to life.
          </p>
          <a href="mailto:your.email@example.com" className="cta-button">
            Get In Touch
          </a>
        </div> */}

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Left: Brand */}
          <div className="footer-brand">
            <h3>Jiya Shah</h3>
            <p>Full Stack Developer & Designer</p>
            <p className="footer-tagline">
              Crafting digital experiences that blend 
              creativity with functionality.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right: Connect */}
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="mailto:your.email@example.com">Email</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Jiya Shah. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer