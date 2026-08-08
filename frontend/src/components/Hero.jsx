import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

import heroImage from '../assets/hero.png';

import '../styles/Hero.css';


function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >

      <div className="container hero-container">


        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>


          <h1>
            Sakhawat Hossain
          </h1>


          <h2>
            Backend & AI Engineer
          </h2>


          <p className="hero-description">
            I build scalable backend systems,
            RESTful APIs, and AI-powered
            applications using technologies such
            as Node.js, Django, Python, MongoDB,
            SQL, and machine learning.
          </p>


          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
            </a>


            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact Me
            </a>

          </div>


          <div className="hero-socials">

            <a
              href="https://github.com/Sakhawat025"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>


            <a
              href="https://linkedin.com/in/sakhawat-hossain-71a534331"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}


export default Hero;