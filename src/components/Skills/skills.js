import React from 'react';
import './skills.css';
import uiuxImg from '../../assets/uiux.png';
import webdevImg from '../../assets/webdev.png';
import probImg from '../../assets/problem.png';
import appImg from '../../assets/app.png'; 

function Skills() {
  const skills = [
    {
      img: uiuxImg,
      title: 'UI/UX Design',
      desc: 'Designing intuitive interfaces prioritizing user engagement.',
    },
    {
      img: webdevImg,
      title: 'Teamwork & Collaboration ',
      desc: 'Working effectively with others to achieve common goals.'
    },
    {
      img: probImg,
      title: 'Problem Solving',
      desc: 'DSA foundation to tackle real-world challenges.',
    },
    {
      img: appImg, 
      title: 'Communication Skills',
      desc: 'Effectively conveying ideas and collaborating within teams.',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">What I Do</h2>
      
      <div className="skills-container">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <img src={s.img} alt={s.title} className="skill-img" />
            <div className="skill-text">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
