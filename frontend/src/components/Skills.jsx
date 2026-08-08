import {
  useEffect,
  useState
} from 'react';

import {
  getSkills
} from '../services/api';

import '../styles/Skills.css';


function Skills() {

  const [skills, setSkills] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');


  useEffect(() => {

    const fetchSkills = async () => {

      try {

        const response =
          await getSkills();

        setSkills(
          response.data || []
        );

      } catch (error) {

        console.error(
          'Failed to fetch skills:',
          error
        );

        setError(
          'Unable to load skills.'
        );

      } finally {

        setLoading(false);

      }

    };


    fetchSkills();

  }, []);


  // Group skills by category
  const groupedSkills =
    skills.reduce(
      (groups, skill) => {

        const category =
          skill.category ||
          'Other';

        if (!groups[category]) {
          groups[category] = [];
        }

        groups[category].push(skill);

        return groups;

      },
      {}
    );


  return (
    <section
      className="skills"
      id="skills"
    >

      <div className="container">

        <div className="section-heading">

          <p className="section-label">
            Technical Skills
          </p>

          <h2>
            Technologies I Work With
          </h2>

        </div>


        {loading && (
          <p className="skills-message">
            Loading skills...
          </p>
        )}


        {error && (
          <p className="skills-error">
            {error}
          </p>
        )}


        {!loading &&
          !error &&
          (
            <div className="skills-groups">

              {Object.entries(
                groupedSkills
              ).map(
                ([
                  category,
                  categorySkills
                ]) => (

                  <div
                    className="skill-group"
                    key={category}
                  >

                    <h3>
                      {category}
                    </h3>


                    <div className="skill-list">

                      {categorySkills.map(
                        (skill) => (

                          <div
                            className="skill-item"
                            key={skill.id}
                          >

                            <div className="skill-info">

                              <span>
                                {skill.name}
                              </span>

                              <span>
                                {skill.proficiency}%
                              </span>

                            </div>


                            <div className="skill-bar">

                              <div
                                className="skill-progress"
                                style={{
                                  width:
                                    `${skill.proficiency}%`
                                }}
                              />

                            </div>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>
          )}

      </div>

    </section>
  );
}


export default Skills;