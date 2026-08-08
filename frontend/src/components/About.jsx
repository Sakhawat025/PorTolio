import '../styles/About.css';


function About() {
  return (
    <section
      className="about"
      id="about"
    >
      <div className="container about-container">

        <div className="section-heading">
          <p className="section-label">
            About Me
          </p>

          <h2>
            Building Reliable Backend Systems
            and AI-Powered Applications
          </h2>
        </div>


        <div className="about-content">

          <div className="about-text">

            <p>
              I am a Computer Science and Engineering student in my final year, focused on backend development, artificial intelligence, and scalable web applications.
            </p>

            <p>
              My experience includes developing RESTful
              APIs, working with relational and NoSQL
              databases, implementing authentication
              systems, and integrating machine learning
              models into backend applications.
            </p>

            <p>
              I enjoy solving practical engineering
              problems and building systems that are
              secure, maintainable, and efficient.
            </p>

          </div>


          <div className="about-highlights">

            <div className="about-card">
              <span className="about-number">
                4+
              </span>

              <p>
                Professional & Internship Experiences
              </p>
            </div>


            <div className="about-card">
              <span className="about-number">
                3+
              </span>

              <p>
                Major Development Projects
              </p>
            </div>


            <div className="about-card">
              <span className="about-number">
                AI
              </span>

              <p>
                Machine Learning & Backend Integration
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default About;