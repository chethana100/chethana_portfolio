import React from 'react';
import './certification.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="certifications-title">🎓 Certifications</h2>

      <div className="certification-card">
        <h3>Lore Mines Internship</h3>
        <p>
          Successfully completed an internship as a <strong>Django Web Developer</strong> at <strong>Lore Mines</strong>. During this internship, I worked on backend development and contributed to real-world web applications using Django framework.
        </p>

        <a
          href="https://drive.google.com/file/d/12P25i8z3zSJNsmyei80Iem0AwVndX6SD/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="certification-button"
        >
          📄 View Certificate
        </a>
      </div>

      {/* Spacer between this and next section */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default Certifications;
