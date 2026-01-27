import { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [activeTab, setActiveTab] = useState('testimonials');

  const testimonialsData = [
    {
      id: 1,
      icon: '💬',
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      text: 'Working with Jiya was an absolute pleasure. Her attention to detail and creative approach brought our vision to life beyond expectations.'
    },
    {
      id: 2,
      icon: '⭐',
      name: 'Michael Chen',
      role: 'Product Manager, Digital Co',
      text: 'Exceptional work! The website design and development were delivered on time with outstanding quality. Highly recommend!'
    },
    {
      id: 3,
      icon: '🎯',
      name: 'Emma Williams',
      role: 'Marketing Director, Brand Hub',
      text: 'Jiya transformed our brand identity with her unique design perspective. The results exceeded all our expectations.'
    }
  ];

  const achievementsData = [
    {
      id: 1,
      icon: '🏆',
      title: '20+ Projects Completed',
      text: 'Successfully delivered over 20 web development and design projects for clients across various industries.'
    },
    {
      id: 2,
      icon: '🎨',
      title: '10+ Brand Identities',
      text: 'Created comprehensive branding solutions including logos, color schemes, and brand guidelines for diverse businesses.'
    },
    {
      id: 3,
      icon: '📚',
      title: 'Continuous Learning',
      text: 'Committed to staying updated with the latest technologies and design trends through ongoing education and practice.'
    }
  ];

  const currentData = activeTab === 'testimonials' ? testimonialsData : achievementsData;

  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">
          <span>TESTIMONIALS & ACHIEVEMENTS</span>
          <h2>What People Say & What I've Achieved</h2>
          <p>A collection of feedback and milestones that shaped my journey</p>
        </div>

        {/* Tabs */}
        <div className="testimonial-tabs">
          <button 
            className={activeTab === 'testimonials' ? 'active' : ''}
            onClick={() => setActiveTab('testimonials')}
          >
            Testimonials
          </button>
          <button 
            className={activeTab === 'achievements' ? 'active' : ''}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>

        {/* Cards */}
        <div className="testimonial-cards">
          {currentData.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="icon">{item.icon}</div>

              {activeTab === 'testimonials' ? (
                <>
                  <div className="testimonial-content">
                    <p className="testimonial-text">"{item.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <h4>{item.name}</h4>
                    <span className="role">{item.role}</span>
                  </div>
                </>
              ) : (
                <>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;