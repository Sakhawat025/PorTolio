const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

require('dotenv').config();


// Database file path
const DB_PATH =
  process.env.DB_PATH ||
  path.join(__dirname, '..', 'database', 'portfolio.db');


// SQL schema file path
const SCHEMA_PATH =
  path.join(__dirname, '..', 'database', 'schema.sqlite.sql');


// Check whether database already exists
const dbFileExistedBefore = fs.existsSync(DB_PATH);


// Create or connect to database
const db = new Database(DB_PATH);


// Improve SQLite performance
db.pragma('journal_mode = WAL');


// If database doesn't exist, create tables and seed data
if (!dbFileExistedBefore) {
  try {
    const schema = fs.readFileSync(SCHEMA_PATH, 'utf8');

    db.exec(schema);

    console.log(
      'SQLite database created and seeded at:',
      DB_PATH
    );
  } catch (error) {
    console.error(
      'Failed to initialize SQLite database:',
      error.message
    );
  }
} else {
  console.log(
    'SQLite database connected at:',
    DB_PATH
  );
}


// Test database connection
async function testConnection() {
  try {
    db.prepare('SELECT 1').get();

    console.log('SQLite connection verified.');
  } catch (error) {
    console.error(
      'SQLite connection check failed:',
      error.message
    );
  }
}


// Export database
module.exports = {
  db,
  testConnection
};