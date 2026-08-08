const { db } = require('../config/db');


// Format project data before sending to frontend
const formatProject = (project) => {
  return {
    ...project,

    tech_stack: project.tech_stack
      ? project.tech_stack
          .split(',')
          .map((tech) => tech.trim())
      : [],

    featured: Boolean(project.featured)
  };
};


// -----------------------------------
// GET ALL PROJECTS
// GET /api/projects
// -----------------------------------

const getAllProjects = (req, res, next) => {
  try {
    const projects = db
      .prepare(`
        SELECT *
        FROM projects
        ORDER BY featured DESC, display_order ASC
      `)
      .all();

    const formattedProjects =
      projects.map(formatProject);

    res.status(200).json({
      success: true,
      count: formattedProjects.length,
      data: formattedProjects
    });

  } catch (error) {
    next(error);
  }
};


// -----------------------------------
// GET SINGLE PROJECT
// GET /api/projects/:id
// -----------------------------------

const getProjectById = (req, res, next) => {
  try {
    const projectId =
      Number.parseInt(req.params.id, 10);


    // Validate project ID
    if (Number.isNaN(projectId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid project ID.'
      });
    }


    const project = db
      .prepare(`
        SELECT *
        FROM projects
        WHERE id = ?
      `)
      .get(projectId);


    // Project not found
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found.'
      });
    }


    res.status(200).json({
      success: true,
      data: formatProject(project)
    });

  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllProjects,
  getProjectById
};