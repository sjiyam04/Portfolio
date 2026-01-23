import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>Let’s build something meaningful.</h3>

        <p>
          © {new Date().getFullYear()} Jiya Shah. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
