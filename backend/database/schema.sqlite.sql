DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT NOT NULL,
  image_url TEXT,
  github_url TEXT,
  live_url TEXT,
  featured INTEGER DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS skills;

CREATE TABLE skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  proficiency INTEGER DEFAULT 80,
  display_order INTEGER DEFAULT 0
);


DROP TABLE IF EXISTS experience;

CREATE TABLE experience (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL DEFAULT 'work'
       CHECK(type IN ('work', 'education')),
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  location TEXT,
  start_date TEXT NOT NULL,
  end_date TEXT DEFAULT 'Present',
  description TEXT,
  display_order INTEGER DEFAULT 0
);




INSERT INTO projects
(
  title,
  description,
  tech_stack,
  image_url,
  github_url,
  live_url,
  featured,
  display_order
)
VALUES

(
  'VideoTube Backend API',
  'A scalable RESTful backend service for a video-sharing platform supporting JWT authentication, profile photo management, secure file uploads, and media handling.',
  'Node.js,Express.js,MongoDB,Mongoose,Cloudinary,JWT,Multer,Postman',
  '/images/project-videotube.jpg',
  'https://github.com/Sakhawat025/Backend.git',
  NULL,
  1,
  1
),

(
  'Smart Vehicle Care & Loyalty Platform',
  'A Django-based vehicle service platform featuring service booking, product rental, customer management, and a loyalty rewards system.',
  'Python,Django,HTML5,CSS3,Bootstrap,DTL,SQLite',
  '/images/project-vehicle-care.jpg',
  'https://github.com/Sakhawat025/Python_Project.git',
  NULL,
  1,
  2
),

(
  'Privacy-Preserving Drug Addiction Prediction Using Federated Learning',
  'Developed AddictNet, a federated learning-based machine learning system designed to predict drug addiction risk while preserving user data privacy by enabling decentralized model training.',
  'Python,Federated Learning,Machine Learning',
  '/images/project-addictnet.jpg',
  'https://github.com/Sakhawat025/Machine_Learning_Project.git',
  NULL,
  1,
  3
);



INSERT INTO skills
(name, category, proficiency, display_order)
VALUES

-- Programming Languages
('Python', 'Programming Language', 88, 1),
('JavaScript (ES6+)', 'Programming Language', 90, 2),
('C++', 'Programming Language', 75, 3),

-- Frontend
('React.js', 'Frontend', 85, 4),
('HTML5', 'Frontend', 92, 5),
('CSS3', 'Frontend', 90, 6),

-- Backend
('Node.js', 'Backend', 88, 7),
('Express.js', 'Backend', 88, 8),
('Django', 'Backend', 82, 9),
('REST API Design', 'Backend', 88, 10),

-- Database
('SQL', 'Database', 88, 11),
('SQLite', 'Database', 85, 12),
('MongoDB', 'Database', 82, 13),
('Mongoose', 'Database', 80, 14),

-- Authentication & Security
('JWT', 'Authentication & Security', 85, 15),
('Bcrypt', 'Authentication & Security', 82, 16),
('CORS', 'Authentication & Security', 85, 17),

-- AI / Machine Learning
('Machine Learning', 'AI / Machine Learning', 80, 18),

-- Tools
('Git & GitHub', 'Tools', 88, 19),
('Docker', 'Tools', 72, 20);


INSERT INTO experience
(
  type,
  title,
  organization,
  location,
  start_date,
  end_date,
  description,
  display_order
)
VALUES

(
  'work',
  'Backend AI Engineer Intern',
  'FlyRank AI',
  'Remote',
  'Jul 2026',
  'Present',
  'Developing scalable backend APIs and integrating machine learning models to optimize system performance.',
  1
),

(
  'work',
  'Backend Engineer Intern',
  'Eutropia IT Solution',
  'Remote',
  'Aug 2026',
  'Present',
  'Built secure RESTful APIs, optimized database queries, and managed server-side logic.',
  2
),

(
  'work',
  'Support Engineer Intern',
  'HR Soft BD',
  'Dhaka, Bangladesh',
  'Aug 2026',
  'Present',
  'Monitored system performance, resolved technical bugs, and assisted clients with software deployment.',
  3
),

(
  'work',
  'System Executive Intern',
  'eChithi',
  'Dhaka, Bangladesh',
  'Jul',
  'Present',
  'Managed internal IT infrastructure, streamlined data workflows, and maintained system uptime.',
  4
),

(
  'education',
  'B.Sc. in Computer Science & Engineering',
  'University of Asia Pacific',
  'Dhaka, Bangladesh',
  '2023',
  '2026',
  'Focused on software engineering, database systems, web technologies, machine learning, and AI.',
  5
);