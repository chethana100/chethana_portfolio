import React from 'react';
import './project.css';

const Projects = () => {
  const projects = [
    {
      title: 'Wok N Roll – Food Delivery website',
      desc: 'Part of a small group project for the User Interface course. We designed a responsive and engaging food delivery UI called "Wok N Roll" using React. I contributed mainly to the UI/UX structuring and visual design.',
    },
    {
      title: 'Inventory Management System',
      desc: 'Built as a DSA course project in a small group. We implemented core data structures and algorithms to manage an inventory system, including features like adding, updating, and searching items.',
    },
    {
      title: 'eXpOS – Operating Systems Project',
      desc: 'Contributed to a group Operating Systems project based on the eXpOS (eXperimental Operating System) specification. I focused on process management and system call implementation.',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
