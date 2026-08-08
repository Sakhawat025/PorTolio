const { db } = require('../config/db');


// -----------------------------------
// CREATE CONTACT MESSAGE
// POST /api/contact
// -----------------------------------

const createMessage = (req, res, next) => {
  try {
    const {
      name,
      email,
      subject,
      message
    } = req.body;


    const statement = db.prepare(`
      INSERT INTO messages
      (
        name,
        email,
        subject,
        message
      )
      VALUES (?, ?, ?, ?)
    `);


    const result = statement.run(
      name.trim(),
      email.trim().toLowerCase(),
      subject ? subject.trim() : null,
      message.trim()
    );


    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully.',
      data: {
        id: result.lastInsertRowid
      }
    });

  } catch (error) {
    next(error);
  }
};


module.exports = {
  createMessage
};