import {
  useEffect,
  useState
} from 'react';

import {
  FaBriefcase,
  FaGraduationCap
} from 'react-icons/fa';

import {
  getExperience
} from '../services/api';

import '../styles/Experience.css';


function Experience() {

  const [experiences, setExperiences] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');


  useEffect(() => {

    const fetchExperience = async () => {

      try {

        const response =
          await getExperience();

        setExperiences(
          response.data || []
        );

      } catch (error) {

        console.error(
          'Failed to fetch experience:',
          error
        );

        setError(
          'Unable to load experience.'
        );

      } finally {

        setLoading(false);

      }

    };


    fetchExperience();

  }, []);


  return (

    <section
      className="experience"
      id="experience"
    >

      <div className="container">

        <div className="section-heading">

          <p className="section-label">
            Career Journey
          </p>

          <h2>
            Experience & Education
          </h2>

        </div>


        {loading && (

          <p className="experience-message">
            Loading experience...
          </p>

        )}


        {error && (

          <p className="experience-error">
            {error}
          </p>

        )}


        {!loading &&
          !error &&
          experiences.length === 0 && (

            <p className="experience-message">
              No experience information available.
            </p>

          )}


        {!loading &&
          !error &&
          experiences.length > 0 && (

            <div className="timeline">

              {experiences.map((item) => (

                <article
                  className="timeline-item"
                  key={item.id}
                >

                  <div className="timeline-marker">

                    {item.type === 'education' ? (
                      <FaGraduationCap />
                    ) : (
                      <FaBriefcase />
                    )}

                  </div>


                  <div className="timeline-content">

                    <div className="timeline-header">

                      <div>

                        <span className="timeline-type">
                          {item.type === 'education'
                            ? 'Education'
                            : 'Experience'}
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                        <h4>
                          {item.organization}
                        </h4>

                      </div>


                      <div className="timeline-date">
                        {item.start_date}
                        {' - '}
                        {item.end_date}
                      </div>

                    </div>


                    {item.location && (

                      <p className="timeline-location">
                        {item.location}
                      </p>

                    )}


                    {item.description && (

                      <p className="timeline-description">
                        {item.description}
                      </p>

                    )}

                  </div>

                </article>

              ))}

            </div>

          )}

      </div>

    </section>

  );
}


export default Experience;