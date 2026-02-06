import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Orange Background Section */}
        <div className="contact-orange-bg">

          {/* Left Side */}
          <div className="contact-left">
            <h1 className="contact-title">CONTACTS</h1>
            <p className="contact-subtitle">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          {/* Right Side Tagline */}
          <div className="contact-tagline">
            <p>CONTACT US TODAY AND LET US MAKE YOUR PROJECT EXCEPTIONAL!</p>
          </div>

        </div>

        {/* Info Cards */}
        <div className="contact-cards-wrapper">

          {/* Address */}
          <div className="contact-info-card">
            <span className="card-label">
              <FaMapMarkerAlt className="card-icon" />
              ADDRESS
            </span>
            <div className="card-content">
              <p className="card-address">
                301, Triveni Apt., Sandhkuva <br />
                Navsari, Gujarat - 396445
              </p>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="contact-info-card">
            <span className="card-label">
              <FaPhoneAlt className="card-icon" />
              PHONE
            </span>
            <div className="card-content">
              <a href="tel:+917862075559" className="card-link">
                <p className="card-phone">+91 78620 75559</p>
              </a>
            </div>

            <span className="card-label card-label-email">
              <FaEnvelope className="card-icon" />
              EMAIL
            </span>
            <div className="card-content">
              <a href="mailto:sjjyam04@gmail.com" className="card-link">
                <p className="card-email">sjiyam04@gmail.com</p>
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="contact-info-card">
            <span className="card-label">OUR SOCIALS</span>
            <div className="card-content social-icons-wrapper">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title="Facebook"
              >
                <FaFacebookF className="social-icon" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
