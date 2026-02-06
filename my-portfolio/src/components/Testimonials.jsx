import { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      id: 1,
      icon: '💼',
      role: 'Full stack Intern',
      company: 'Casepoint, Surat',
      duration: 'Sep 2025 - Jan 2026',
      text: 'Worked on designing responsive web interfaces, wireframes, and interactive prototypes using Figma. Collaborated with developers to ensure seamless user experience.'
    },
    {
      id: 2,
      icon: '🎨',
      role: 'Freelance Brand Designer',
      company: 'Self-Employed',
      duration: '2023 - Present',
      text: 'Designed logo systems, brand identities, and social media creatives for small businesses. Focused on minimal and modern design aesthetics.'
    },
    {
      id: 3,
      icon: '🖥️',
      role: 'Web Design Projects',
      company: 'Academic & Personal Projects',
      duration: 'Ongoing',
      text: 'Developed and designed websites using modern UI principles. Worked on layout structuring, color systems, and user flow improvements.'
    }
  ];

  const achievementsData = [
    {
      id: 1,
      icon: '🏆',
      title: '5+ Projects Completed',
      text: 'Successfully delivered over 20 web development and design projects across various industries.'
    },
    {
      id: 2,
      icon: '🎨',
      title: '5+ Brand Identities',
      text: 'Created complete branding systems including logos, typography, and color palettes.'
    },
    {
      id: 3,
      icon: '📚',
      title: 'Continuous Learning',
      text: 'Actively improving skills in UI/UX, branding, and modern design systems.'
    }
  ];

  const currentData = activeTab === 'experience' ? experienceData : achievementsData;

  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">
          <span>EXPERIENCE & ACHIEVEMENTS</span>
          <h2>My Professional Journey</h2>
          <p>A glimpse into my work experience and milestones</p>
        </div>

        {/* Tabs */}
        <div className="testimonial-tabs">
          <button 
            className={activeTab === 'experience' ? 'active' : ''}
            onClick={() => setActiveTab('experience')}
          >
            Experience
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

              {activeTab === 'experience' ? (
                <>
                  <h4>{item.role}</h4>
                  <span className="role">{item.company}</span>
                  <span className="duration">{item.duration}</span>
                  <p>{item.text}</p>
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
