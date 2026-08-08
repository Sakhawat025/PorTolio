const { db } = require('../config/db');


// -----------------------------------
// GET ALL SKILLS
// GET /api/skills
// -----------------------------------

const getSkills = (req, res, next) => {
  try {
    const skills = db
      .prepare(`
        SELECT
          id,
          name,
          category,
          proficiency,
          display_order
        FROM skills
        ORDER BY display_order ASC
      `)
      .all();

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills
    });

  } catch (error) {
    next(error);
  }
};


// -----------------------------------
// GET ALL EXPERIENCE
// GET /api/experience
// -----------------------------------

const getExperience = (req, res, next) => {
  try {
    const experience = db
      .prepare(`
        SELECT
          id,
          type,
          title,
          organization,
          location,
          start_date,
          end_date,
          description,
          display_order
        FROM experience
        ORDER BY display_order ASC
      `)
      .all();

    res.status(200).json({
      success: true,
      count: experience.length,
      data: experience
    });

  } catch (error) {
    next(error);
  }
};


module.exports = {
  getSkills,
  getExperience
};