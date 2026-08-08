const express = require('express');

const {
  getAllProjects,
  getProjectById
} = require('../controllers/projectController');


const router = express.Router();


// Get all projects
router.get('/', getAllProjects);


// Get project by ID
router.get('/:id', getProjectById);


module.exports = router;