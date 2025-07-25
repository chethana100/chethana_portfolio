import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/About';
import Skills from './components/Skills/skills';
import Projects from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Certification from './components/Certification/certification';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    <Certification/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
