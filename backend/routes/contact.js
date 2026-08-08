const express = require('express');

const { body } = require('express-validator');

const {
  createMessage
} = require('../controllers/contactController');

const validateRequest =
  require('../middleware/validateRequest');


const router = express.Router();


// -----------------------------------
// POST CONTACT MESSAGE
// POST /api/contact
// -----------------------------------

router.post(
  '/',

  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required.')
      .isLength({ min: 2, max: 100 })
      .withMessage(
        'Name must be between 2 and 100 characters.'
      ),

    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required.')
      .isEmail()
      .withMessage('Please provide a valid email address.')
      .normalizeEmail(),

    body('subject')
      .optional({ checkFalsy: true })
      .trim()
      .isLength({ max: 150 })
      .withMessage(
        'Subject cannot exceed 150 characters.'
      ),

    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required.')
      .isLength({ min: 10, max: 2000 })
      .withMessage(
        'Message must be between 10 and 2000 characters.'
      )
  ],

  validateRequest,

  createMessage
);


module.exports = router;