import "./Hero.css"
import profile from "../assets/Images/MyImage.jpeg"

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Hi, I’m <br />
            <span>Jiya Shah</span>
          </h1>

          <h3>I’m a Full stack Developer.</h3>

          <p>
            Crafting elegant, functional, and meaningful digital
            solutions – from sleek UI design to full stack development.
          </p>

          <button className="hero-btn">Get in touch!</button>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={profile} alt="Jiya Shah" />
        </div>

      </div>
    </section>
  )
}

export default Hero
