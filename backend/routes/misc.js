const express = require('express');

const {
  getSkills,
  getExperience
} = require('../controllers/miscController');


const router = express.Router();


// Get all skills
router.get('/skills', getSkills);


// Get work experience and education
router.get('/experience', getExperience);


module.exports = router;