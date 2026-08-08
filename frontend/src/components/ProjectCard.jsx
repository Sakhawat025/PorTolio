import { useState } from 'react';

import {
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

import '../styles/Projects.css';


function ProjectCard({ project }) {

  const [imageError, setImageError] =
    useState(false);


  const {
    title,
    description,
    tech_stack = [],
    image_url,
    github_url,
    live_url,
    featured
  } = project;


  return (
    <article className="project-card">

      <div className="project-image-wrapper">

        {image_url && !imageError ? (

          <img
            src={image_url}
            alt={title}
            className="project-image"
            onError={() => setImageError(true)}
          />

        ) : (

          <div className="project-image-placeholder">
            <span>
              {title?.charAt(0)}
            </span>
          </div>

        )}


        {featured && (
          <span className="project-featured">
            Featured
          </span>
        )}

      </div>


      <div className="project-content">

        <h3>
          {title}
        </h3>


        <p className="project-description">
          {description}
        </p>


        <div className="project-tech-stack">

          {tech_stack.map((tech) => (
            <span
              key={`${title}-${tech}`}
              className="project-tech"
            >
              {tech}
            </span>
          ))}

        </div>


        {(github_url || live_url) && (

          <div className="project-links">

            {github_url && (

              <a
                href={github_url}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />

                Code
              </a>

            )}


            {live_url && (

              <a
                href={live_url}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>

            )}

          </div>

        )}

      </div>

    </article>
  );
}


export default ProjectCard;