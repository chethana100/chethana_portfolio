import React from 'react';
import './intro.css';
import homeImage from '../../assets/home_image.png'; 

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Hello,</h1>
          <h2>
            I'm <span className="highlight-name">Chethana S Nair</span>
          </h2>
          <h3>Computer Science Student</h3>
          <p>
            I'm a 3rd year Computer Science student at Amrita Vishwa Vidyapeetham,
            passionate about both technology and the creative world of arts.
          </p>
        </div>
        <img src={homeImage} alt="Chethana S Nair" className="intro-img" />
      </div>
    </section>
  );
};

export default Intro;
