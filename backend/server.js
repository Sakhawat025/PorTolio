require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { testConnection } = require('./config/db');

const projectRoutes =
  require('./routes/projects');

const miscRoutes =
  require('./routes/misc');

const app = express();

const PORT = process.env.PORT || 5000;


// ----------------------------
// Middleware
// ----------------------------

// Allow frontend to communicate with backend
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173'
  })
);


// Parse JSON request body
app.use(express.json());


// Parse form-urlencoded data
app.use(
  express.urlencoded({
    extended: true
  })
);


// ----------------------------
// Request Logger
// ----------------------------

app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`
  );

  next();
});


// ----------------------------
// Health Check Route
// ----------------------------

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is running.'
  });
});

// Projects API
app.use('/api/projects', projectRoutes);
// Skills and Experience API
app.use('/api', miscRoutes);


// ----------------------------
// 404 Route
// ----------------------------

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found.'
  });
});

app.use('/api/projects', projectRoutes);

// ----------------------------
// Global Error Handler
// ----------------------------

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);

  res.status(500).json({
    success: false,
    error: 'Internal server error.'
  });
});


// ----------------------------
// Start Server
// ----------------------------

app.listen(PORT, async () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );

  await testConnection();
});