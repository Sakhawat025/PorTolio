import {
  useEffect,
  useState
} from 'react';

import {
  getProjects
} from '../services/api';

import ProjectCard from './ProjectCard';

import '../styles/Projects.css';


function Projects() {

  const [projects, setProjects] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');


  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const response =
          await getProjects();

        setProjects(
          response.data || []
        );

      } catch (error) {

        console.error(
          'Failed to fetch projects:',
          error
        );

        setError(
          'Unable to load projects.'
        );

      } finally {

        setLoading(false);

      }

    };


    fetchProjects();

  }, []);


  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="container">

        <div className="section-heading">

          <p className="section-label">
            My Work
          </p>

          <h2>
            Featured Projects
          </h2>

          <p className="projects-intro">
            A selection of backend,
            full-stack, and AI-focused
            projects I have worked on.
          </p>

        </div>


        {loading && (

          <p className="projects-message">
            Loading projects...
          </p>

        )}


        {error && (

          <p className="projects-error">
            {error}
          </p>

        )}


        {!loading &&
          !error &&
          projects.length === 0 && (

            <p className="projects-message">
              No projects available.
            </p>

          )}


        {!loading &&
          !error &&
          projects.length > 0 && (

            <div className="projects-grid">

              {projects.map((project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                />

              ))}

            </div>

          )}

      </div>

    </section>

  );
}


export default Projects;