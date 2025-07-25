import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about" className="about-page">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I’m <span className="highlight">Chethana S Nair</span> — a passionate 3rd‑year Computer Science student at Amrita Vishwa Vidyapeetham.
          I merge problem‑solving with UI/UX design to build meaningful digital experiences.
        </p>
        <p className="about-text">
          I enjoy working on full‑stack solutions, designing intuitive user interfaces, and solving real‑world challenges. I’m also honing my skills in creative storytelling and design thinking.
        </p>
        
      </div>
    </section>
  );
}

export default About;
