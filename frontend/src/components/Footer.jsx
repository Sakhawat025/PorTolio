import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';

import '../styles/Footer.css';


function Footer() {

  const currentYear =
    new Date().getFullYear();


  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">

          <a
            href="#home"
            className="footer-logo"
          >
            Portfolio.
          </a>

          <p>
            Backend & AI Engineer focused on
            scalable APIs, intelligent systems,
            and practical software solutions.
          </p>

        </div>


        <div className="footer-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="footer-socials">

          <a
            href="https://github.com/Sakhawat025"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/sakhawat-hossain-71a534331/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BImDmT1GsQBqUNxjoOse82g%3D%3D"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>


          <a
            href="sakhawathossai25@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="container">

          <p>
            © {2026} Sakhawat Hossain.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}


export default Footer;