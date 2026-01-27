import { useState } from 'react';
import "./Contact.css";
// import resumePDF from "../assets/resume/Jiya_Shah_Resume.pdf"; // Uncomment and add your PDF path

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleDownloadResume = () => {
    // Option 1: If you have the PDF in your assets folder
    // const link = document.createElement('a');
    // link.href = resumePDF;
    // link.download = 'Jiya_Shah_Resume.pdf';
    // link.click();

    // Option 2: If your PDF is in the public folder
    const link = document.createElement('a');
    link.href = '/resume/Jiya_Shah_Resume.pdf'; // Place PDF in public/resume/ folder
    link.download = 'Jiya_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span>CONTACT</span>
          <h2>Get in Touch!</h2>
          <p>
            Whether you have a project in mind, a question, or just
            want to say hello, I'd love to hear from you.
          </p>
        </div>

        {/* Glass Card */}
        <div className="contact-card">

          {/* Left */}
          <div className="contact-info">
            <small>CONTACT</small>
            <h3>
              Got a Project?<br />
              Let's Talk
            </h3>

            <div className="contact-detail">
              <span className="detail-icon">✉️</span>
              <p className="contact-email">sjjyam04@gmail.com</p>
            </div>

            <div className="contact-detail">
              <span className="detail-icon">📞</span>
              <p className="contact-phone">+91 78620 75559</p>
            </div>

            <div className="social-section">
              <p className="social-label">Connect with me</p>
              <div className="contact-icons">
                <a href="mailto:sjjyam04@gmail.com" className="social-icon" title="Email">
                  <span>✉️</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                  <span>in</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                  <span>🐙</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                  <span>📸</span>
                </a>
              </div>
            </div>

            <button className="resume-btn" onClick={handleDownloadResume}>
              Download Resume
              <span className="arrow">→</span>
            </button>
          </div>

          {/* Divider */}
          <div className="contact-divider"></div>

          {/* Right - Contact Form */}
          <div className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button onClick={handleSubmit} className="submit-btn">
              Send Message
              <span className="send-icon">✈️</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;