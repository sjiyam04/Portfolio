import "./Navbar.css"
import logo from "./assets/images/My_L.png"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Jiya logo" />
        </div>

        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="navbar-btn"
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          Get in Touch!
</button>

      </div>
    </header>
  )
}

export default Navbar
